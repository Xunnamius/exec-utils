import { createDebugLogger } from 'rejoinder';

import { globalDebuggerNamespace } from 'universe+run:constant.ts';

import type {
  Options as ExecaOptions,
  Result as ExecaResult,
  ResultPromise as ExecaResultPromise
} from 'execa' with { 'resolution-mode': 'import' };

import type { Merge, Promisable, Simplify } from 'type-fest';

let runCounter = 0;
const debug = createDebugLogger({ namespace: globalDebuggerNamespace });

export type { Subprocess } from 'execa' with { 'resolution-mode': 'import' };

export type RunOptions = ExecaOptions & {
  /**
   * Access the {@link RunIntermediateReturnType} object, a thin wrapper around
   * execa's {@link ExecaResultPromise}, via this callback function.
   */
  useIntermediate?: (intermediateResult: RunIntermediateReturnType) => Promisable<void>;
  /**
   * If `true`, {@link RunReturnType.stdout} and {@link RunReturnType.stderr}
   * will be coerced to string values. If they are `undefined`, they will be
   * coerced to empty strings.
   *
   * Defaults to `true` unless {@link RunOptions.lines} is `true`, in which case
   * output will be coerced to an array of strings regardless of this option.
   */
  coerceOutputToString?: boolean;
};

export type RunReturnType<
  OptionsType extends RunOptions = RunOptions,
  CoerceOutputTo extends 'string' | 'array' | 'n/a' = 'string'
> = CoerceOutputTo extends 'string'
  ? Merge<ExecaResult<OptionsType>, { stdout: string; stderr: string }>
  : CoerceOutputTo extends 'array'
    ? Merge<ExecaResult<OptionsType>, { stdout: string[]; stderr: string[] }>
    : ExecaResult<OptionsType>;

export type RunIntermediateReturnType<OptionsType extends RunOptions = RunOptions> =
  ExecaResultPromise<OptionsType>;

/**
 * Runs (executes) `file` with the given `args` with respect to the given
 * `options`.
 *
 * With this call signature, `stdout` and `stderr` will be of type `string[]`.
 *
 * Note that, by default, this function rejects on a non-zero exit code. Set
 * `reject: false` to override this, or use {@link runNoRejectOnBadExit}.
 */
export async function run<OptionsType extends RunOptions & { lines: true }>(
  file: string,
  args: string[],
  options: OptionsType
): Promise<RunReturnType<RunOptions & OptionsType, 'array'>>;
/**
 * Runs (executes) `file` with the given `args` with respect to the given
 * `options`.
 *
 * Note that, by default, this function rejects on a non-zero exit code. Set
 * `reject: false` to override this, or use {@link runNoRejectOnBadExit}.
 */
export async function run<
  OptionsType extends RunOptions & { coerceOutputToString: false }
>(
  file: string,
  args: string[],
  options: OptionsType
): Promise<RunReturnType<RunOptions & OptionsType, 'n/a'>>;
/**
 * Runs (executes) `file` with the given `args` with respect to the given
 * `options`.
 *
 * With this call signature, `stdout` and `stderr` will be coerced to type
 * `string`.
 *
 * Note that, by default, this function rejects on a non-zero exit code. Set
 * `reject: false` to override this, or use {@link runNoRejectOnBadExit}.
 */
export async function run<OptionsType extends RunOptions>(
  file: string,
  args?: string[],
  options?: OptionsType
): Promise<RunReturnType<RunOptions & OptionsType>>;
export async function run(
  file: string,
  args?: string[],
  { useIntermediate, coerceOutputToString = true, ...execaOptions }: RunOptions = {}
): Promise<RunReturnType<RunOptions, 'string' | 'array' | 'n/a'>> {
  const runDebug = debug.extend(String(++runCounter));

  runDebug(`executing command: ${file}${args ? ` ${args.join(' ')}` : ''}`);
  runDebug('execution options: %O', execaOptions);
  runDebug('using intermediate result: %O', !!useIntermediate);

  coerceOutputToString &&= !execaOptions.lines;
  runDebug('output coercion: %O', coerceOutputToString);

  const intermediateResult = (await import('execa')).execa(file, args, execaOptions);

  await useIntermediate?.(intermediateResult);
  const finalResult = await intermediateResult;

  if (coerceOutputToString) {
    finalResult.stdout = finalResult.stdout?.toString() ?? '';
    finalResult.stderr = finalResult.stderr?.toString() ?? '';
  }

  runDebug('execution result: %O', finalResult);
  return finalResult;
}

/**
 * Runs (executes) `file` with the given `args` with respect to the given
 * `options` (merged with `{ stdout: 'inherit', stderr: 'inherit' }`).
 *
 * Note that, by default, this function rejects on a non-zero exit code.
 * Set `reject: false` to override this, or use {@link runNoRejectOnBadExit}.
 *
 * @see {@link run}
 */
export async function runWithInheritedIo(
  file: string,
  args?: string[],
  options?: Omit<RunOptions, 'all' | 'stdout' | 'stderr' | 'stdio' | 'lines'>
): Promise<Omit<RunReturnType, 'all' | 'stdout' | 'stderr' | 'stdio'>> {
  return run(file, args, {
    ...options,
    stdout: 'inherit',
    stderr: 'inherit'
  }) as Promise<Omit<RunReturnType, 'all' | 'stdout' | 'stderr' | 'stdio'>>;
}

/**
 */
/**
 * Runs (executes) `file` with the given `args` with respect to the given
 * `options`.
 *
 * Note that this function DOES NOT REJECT on a non-zero exit code.
 *
 * @see {@link run}
 */
export async function runNoRejectOnBadExit<
  OptionsType extends Omit<RunOptions, 'reject'> & { lines: true }
>(
  file: string,
  args: string[],
  options: OptionsType
): Promise<RunReturnType<Omit<RunOptions, 'reject'> & OptionsType, 'array'>>;
/**
 * Runs (executes) `file` with the given `args` with respect to the given
 * `options`.
 *
 * Note that this function DOES NOT REJECT on a non-zero exit code.
 *
 * @see {@link run}
 */
export async function runNoRejectOnBadExit<
  OptionsType extends Omit<RunOptions, 'reject'> & {
    coerceOutputToString: false;
  }
>(
  file: string,
  args: string[],
  options: OptionsType
): Promise<RunReturnType<Omit<RunOptions, 'reject'> & OptionsType, 'n/a'>>;
/**
 * Runs (executes) `file` with the given `args` with respect to the given
 * `options`.
 *
 * With this call signature, `stdout` and `stderr` will be coerced to type
 * `string`.
 *
 * Note that this function DOES NOT REJECT on a non-zero exit code.
 *
 * @see {@link run}
 */
export async function runNoRejectOnBadExit<
  OptionsType extends Omit<RunOptions, 'reject'>
>(
  file: string,
  args?: string[],
  options?: OptionsType
): Promise<RunReturnType<Omit<RunOptions, 'reject'> & OptionsType>>;
export async function runNoRejectOnBadExit(
  file: string,
  args?: string[],
  options: Omit<RunOptions, 'reject'> = {}
): Promise<RunReturnType<RunOptions, 'string' | 'array' | 'n/a'>> {
  return run(file, args, { ...options, reject: false });
}

/**
 * Returns a function that, when called, runs (executes) `file` with the given
 * `args` with respect to the given `options`. These parameters can be
 * overridden during individual invocations.
 */
export function runnerFactory<FactoryOptionsType extends RunOptions>(
  file: string,
  args?: string[],
  options?: FactoryOptionsType
) {
  // ? Hide these names from intellisense
  const factoryArgs = args;
  const factoryOptions = options;

  /**
   * Runs (executes) `file` with the given `args` with respect to the given
   * `options`.
   *
   * With this call signature, `stdout` and `stderr` will be of type `string[]`.
   *
   * Note that, by default, this function rejects on a non-zero exit code. Set
   * `reject: false` to override this, or use {@link runNoRejectOnBadExit}.
   */
  async function factoryRunner<LocalOptionsType extends RunOptions & { lines: true }>(
    args: string[],
    options: LocalOptionsType
  ): Promise<RunReturnType<RunOptions & LocalOptionsType, 'array'>>;
  /**
   * Runs (executes) `file` with the given `args` with respect to the given
   * `options`.
   *
   * Note that, by default, this function rejects on a non-zero exit code. Set
   * `reject: false` to override this, or use {@link runNoRejectOnBadExit}.
   */
  async function factoryRunner<
    LocalOptionsType extends RunOptions & { coerceOutputToString: false }
  >(
    args: string[],
    options: LocalOptionsType
  ): Promise<RunReturnType<RunOptions & LocalOptionsType, 'n/a'>>;
  /**
   * Runs (executes) `file` with the given `args` with respect to the given
   * `options`.
   *
   * With this call signature, `stdout` and `stderr` will be coerced to type
   * `string`.
   *
   * Note that, by default, this function rejects on a non-zero exit code. Set
   * `reject: false` to override this, or use {@link runNoRejectOnBadExit}.
   */
  async function factoryRunner<LocalOptionsType extends RunOptions>(
    args?: string[],
    options?: LocalOptionsType
  ): Promise<
    Simplify<
      FactoryOptionsType extends RunOptions & { lines: true }
        ? RunReturnType<RunOptions & FactoryOptionsType & LocalOptionsType, 'array'>
        : FactoryOptionsType extends RunOptions & {
              coerceOutputToString: false;
            }
          ? RunReturnType<RunOptions & FactoryOptionsType & LocalOptionsType, 'n/a'>
          : RunReturnType<RunOptions & FactoryOptionsType & LocalOptionsType>
    >
  >;
  async function factoryRunner(
    args?: string[],
    options?: RunOptions
  ): Promise<RunReturnType<RunOptions, 'string' | 'array' | 'n/a'>> {
    return run(file, args ?? factoryArgs, { ...factoryOptions, ...options });
  }

  return factoryRunner;
}
