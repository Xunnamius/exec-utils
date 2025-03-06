import type {
  Options as ExecaOptions,
  Result as ExecaResult,
  ResultPromise as ExecaResultPromise
} from 'execa' with { 'resolution-mode': 'import' };

import type { Merge, Promisable, Simplify } from 'type-fest';

/**
 * @see {@link ExecaOptions}
 */
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
  /**
   * When attaching a debugger to a Node.js process, such as when using the
   * `--inspect*` flags, Node will add it's own "debugger attached" lines to
   * stderr. Set `elideNodeDebuggerStringsFromStderr` to `true` to remove them
   * automatically, or `false` to do nothing.
   *
   * @default true
   * @see https://github.com/nodejs/node/issues/34799
   */
  elideNodeDebuggerStringsFromStderr?: boolean;
};

/**
 * @see {@link RunOptions}
 */
export type DefaultRunOptions = RunOptions & {
  lines: false;
  coerceOutputToString: true;
  elideNodeDebuggerStringsFromStderr: true;
  all: false;
};

/**
 * @see {@link ExecaResultPromise}
 */
export type RunIntermediateReturnType<OptionsType extends ExecaOptions = ExecaOptions> =
  ExecaResultPromise<OptionsType>;

/**
 * @see {@link ExecaResult}
 */
export type RunReturnType<OptionsType extends RunOptions = DefaultRunOptions> = Simplify<
  [Merge<DefaultRunOptions, OptionsType>] extends [
    infer ReifiedOptionsType extends ExecaOptions
  ]
    ? ReifiedOptionsType extends { lines: true }
      ? Merge<
          ExecaResult<ReifiedOptionsType>,
          {
            /**
             * The output of the subprocess on
             * [`stdout`](https://en.wikipedia.org/wiki/Standard_streams#Standard_output_(stdout)).
             *
             * This is `undefined` if the `stdout` option is set to only
             * `'inherit'`, `'ignore'`, `Writable` or `integer`, or if the
             * `buffer` option is `false`.
             *
             * This is an array if the `lines` option is `true`, or if the
             * `stdout` option is a transform in object mode.
             */
            stdout: string[];
            /**
             * The output of the subprocess on
             * [`stderr`](https://en.wikipedia.org/wiki/Standard_streams#Standard_error_(stderr)).
             *
             * This is `undefined` if the `stderr` option is set to only
             * `'inherit'`, `'ignore'`, `Writable` or `integer`, or if the
             * `buffer` option is `false`.
             *
             * This is an array if the `lines` option is `true`, or if the
             * `stderr` option is a transform in object mode.
             */
            stderr: string[];
          } & (ReifiedOptionsType['all'] extends true
            ? {
                /**
                 * The output of the subprocess with `result.stdout` and
                 * `result.stderr` interleaved.
                 *
                 * This requires the `all` option to be `true`.
                 *
                 * This is `undefined` if both `stdout` and `stderr` options are
                 * set to only `'inherit'`, `'ignore'`, `Writable` or `integer`,
                 * or if the `buffer` option is `false`.
                 *
                 * This is an array if the `lines` option is `true`, or if
                 * either the `stdout` or `stderr` option is a transform in
                 * object mode.
                 */
                all: string[];
              }
            : unknown)
        >
      : ReifiedOptionsType extends { coerceOutputToString: true }
        ? Merge<
            ExecaResult<ReifiedOptionsType>,
            {
              /**
               * The output of the subprocess on
               * [`stdout`](https://en.wikipedia.org/wiki/Standard_streams#Standard_output_(stdout)).
               *
               * This is `undefined` if the `stdout` option is set to only
               * `'inherit'`, `'ignore'`, `Writable` or `integer`, or if the
               * `buffer` option is `false`.
               *
               * This is an array if the `lines` option is `true`, or if the
               * `stdout` option is a transform in object mode.
               */
              stdout: string;
              /**
               * The output of the subprocess on
               * [`stderr`](https://en.wikipedia.org/wiki/Standard_streams#Standard_error_(stderr)).
               *
               * This is `undefined` if the `stderr` option is set to only
               * `'inherit'`, `'ignore'`, `Writable` or `integer`, or if the
               * `buffer` option is `false`.
               *
               * This is an array if the `lines` option is `true`, or if the
               * `stderr` option is a transform in object mode.
               */
              stderr: string;
            } & (ReifiedOptionsType['all'] extends true
              ? {
                  /**
                   * The output of the subprocess with `result.stdout` and
                   * `result.stderr` interleaved.
                   *
                   * This requires the `all` option to be `true`.
                   *
                   * This is `undefined` if both `stdout` and `stderr` options
                   * are set to only `'inherit'`, `'ignore'`, `Writable` or
                   * `integer`, or if the `buffer` option is `false`.
                   *
                   * This is an array if the `lines` option is `true`, or if
                   * either the `stdout` or `stderr` option is a transform in
                   * object mode.
                   */
                  all: string;
                }
              : unknown)
          >
        : ExecaResult<ReifiedOptionsType>
    : never
>;

/**
 * @see `runnerFactory`
 */
export type RunnerFactoryReturnType<
  FactoryOptionsType extends RunOptions = DefaultRunOptions
> = {
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
   *
   * 3. Elides Node.js debugger strings. Set
   *    `elideNodeDebuggerStringsFromStderr: false` to override this.
   */
  (args?: string[], options?: undefined): Promise<RunReturnType<FactoryOptionsType>>;
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
   *
   * 3. Elides Node.js debugger strings. Set
   *    `elideNodeDebuggerStringsFromStderr: false` to override this.
   */
  <LocalOptionsType extends RunOptions>(
    args?: string[],
    options?: LocalOptionsType
  ): Promise<RunReturnType<Merge<FactoryOptionsType, LocalOptionsType>>>;
};
