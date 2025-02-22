import { createDebugLogger } from 'rejoinder';

import { globalDebuggerNamespace } from 'universe+run:constant.ts';

import type { Merge } from 'type-fest';

import type {
  DefaultRunOptions,
  RunOptions,
  RunReturnType
} from 'universe+run:types.ts';

let runCounter = 0;
const debug = createDebugLogger({ namespace: globalDebuggerNamespace });

export type { Subprocess } from 'execa' with { 'resolution-mode': 'import' };
export type * from 'universe+run:types.ts';

/**
 * Runs (executes) `file` with the given `args` with respect to the given
 * `options`.
 *
 * Note that, by default, this function:
 *
 * 1. Rejects on a non-zero exit code. Set `reject: false` to override this, or
 *    use {@link runNoRejectOnBadExit}.
 *
 * 2. Coerces output to a string. Set `coerceOutputToString: false` (or `lines:
 *    true`) to override this.
 */
export async function run(
  file: string,
  args?: string[],
  options?: undefined
): Promise<RunReturnType>;
export async function run<OptionsType extends RunOptions>(
  file: string,
  args?: string[],
  options?: OptionsType
): Promise<RunReturnType<OptionsType>>;
export async function run<OptionsType extends RunOptions = DefaultRunOptions>(
  file: string,
  args?: string[],
  options?: OptionsType
): Promise<unknown> {
  const runDebug = debug.extend(String(++runCounter));

  const {
    useIntermediate,
    coerceOutputToString = true,
    ...execaOptions
  } = options || ({} as RunOptions);

  runDebug(`executing command: ${file}${args ? ` ${args.join(' ')}` : ''}`);
  runDebug('execution options: %O', execaOptions);
  runDebug('using intermediate result: %O', !!useIntermediate);

  const shouldCoerceOutputToString = coerceOutputToString && !execaOptions.lines;
  runDebug('output coercion: %O', shouldCoerceOutputToString);

  const intermediateResult = (await import('execa')).execa(file, args, execaOptions);

  await useIntermediate?.(intermediateResult);
  const finalResult = await intermediateResult;

  if (shouldCoerceOutputToString) {
    /* istanbul ignore next */
    finalResult.stdout = finalResult.stdout?.toString() ?? '';
    /* istanbul ignore next */
    finalResult.stderr = finalResult.stderr?.toString() ?? '';
  }

  runDebug('execution result: %O', finalResult);
  return finalResult;
}

/**
 * Runs (executes) `file` with the given `args` with respect to the given
 * `options` (merged with `{ stdout: 'inherit', stderr: 'inherit' }`).
 *
 * Note that, by default, this function rejects on a non-zero exit code. Set
 * `reject: false` to override this, or use {@link runNoRejectOnBadExit}.
 *
 * @see {@link run}
 */
export async function runWithInheritedIo(
  file: string,
  args?: string[],
  options?: Omit<
    RunOptions,
    'all' | 'stdout' | 'stderr' | 'stdio' | 'lines' | 'coerceOutputToString'
  >
): Promise<Omit<RunReturnType, 'all' | 'stdout' | 'stderr' | 'stdio'>> {
  return run(file, args, {
    ...options,
    coerceOutputToString: false,
    stdio: 'inherit'
  }) as Promise<Omit<RunReturnType, 'all' | 'stdout' | 'stderr' | 'stdio'>>;
}

/**
 * Runs (executes) `file` with the given `args` with respect to the given
 * `options`.
 *
 * Note that, by default, this function:
 *
 * 1. **DOES NOT REJECT on a non-zero exit code.**
 *
 * 2. Coerces output to a string. Set `coerceOutputToString: false` (or `lines:
 *    true`) to override this.
 */
export async function runNoRejectOnBadExit(
  file: string,
  args?: string[],
  options?: undefined
): Promise<RunReturnType>;
export async function runNoRejectOnBadExit<
  OptionsType extends Omit<RunOptions, 'reject'>
>(
  file: string,
  args?: string[],
  options?: OptionsType
): Promise<RunReturnType<OptionsType>>;
export async function runNoRejectOnBadExit<
  OptionsType extends Omit<RunOptions, 'reject'> = Omit<DefaultRunOptions, 'reject'>
>(file: string, args?: string[], options?: OptionsType): Promise<unknown> {
  return run(file, args, { ...options, reject: false });
}

/**
 * Returns a {@link run} function that, when called, runs (executes) `file` with
 * the given `args` with respect to the given `options`.
 *
 * Additional arguments specified via the returned {@link run} function will be
 * appended to `args`. On the other hand, additional options specified via the
 * returned {@link run} function will _overwrite_ existing options in `options`
 * (via `Object.assign`).
 *
 * Note that, by default, the returned {@link run} function:
 *
 * 1. Rejects on a non-zero exit code. Set `reject: false` to override this.
 *
 * 2. Coerces output to a string. Set `coerceOutputToString: false` (or
 *    `lines: true`) to override this.
 */
export function runnerFactory<FactoryOptionsType extends RunOptions = DefaultRunOptions>(
  file: string,
  args?: string[],
  options?: FactoryOptionsType
) {
  // ? Hide these names from intellisense
  const factoryArgs = args;
  const factoryOptions = options;

  /**
   * Runs (executes) with respect to the factory parameters used to generate
   * this function.
   *
   * Additional arguments specified via `args` will be appended to the
   * corresponding factory parameter. On the other hand, additional options
   * specified via `options` will _overwrite_ corresponding factory options (via
   * `Object.assign`).
   *
   * Note that, by default (unless modified at the factory level), this
   * function:
   *
   * 1. Rejects on a non-zero exit code. Set `reject: false` to override this.
   *
   * 2. Coerces output to a string. Set `coerceOutputToString: false` (or
   *    `lines: true`) to override this.
   */
  async function factoryRunner(
    args?: string[],
    options?: undefined
  ): Promise<RunReturnType<FactoryOptionsType>>;
  async function factoryRunner<LocalOptionsType extends RunOptions>(
    args?: string[],
    options?: LocalOptionsType
  ): Promise<RunReturnType<Merge<FactoryOptionsType, LocalOptionsType>>>;
  async function factoryRunner(args?: string[], options?: RunOptions): Promise<unknown> {
    return run(file, [...(factoryArgs || []), ...(args || [])], {
      ...factoryOptions,
      ...options
    });
  }

  return factoryRunner;
}
