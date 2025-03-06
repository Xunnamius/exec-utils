[**@-xun/run**](../../README.md)

***

[@-xun/run](../../README.md) / [index](../README.md) / runnerFactory

# Function: runnerFactory()

> **runnerFactory**\<`FactoryOptionsType`\>(`file`, `args`?, `options`?): [`RunnerFactoryReturnType`](../../types/type-aliases/RunnerFactoryReturnType.md)\<`FactoryOptionsType`\>

Defined in: [packages/run/src/index.ts:184](https://github.com/Xunnamius/exec-utils/blob/49a686926412eee8a176a3c8893c62abf78eaebf/packages/run/src/index.ts#L184)

Returns a [run](run.md) function that, when called, runs (executes) `file` with
the given `args` with respect to the given `options`.

Additional arguments specified via the returned [run](run.md) function will be
appended to `args`. On the other hand, additional options specified via the
returned [run](run.md) function will _overwrite_ existing options in `options`
(via `Object.assign`).

Note that, by default, the returned [run](run.md) function:

1. Rejects on a non-zero exit code. Set `reject: false` to override this.

2. Coerces output to a string. Set `coerceOutputToString: false` (or
   `lines: true`) to override this.

3. Elides Node.js debugger strings. Set `elideNodeDebuggerStringsFromStderr:
   false` to override this.

## Type Parameters

• **FactoryOptionsType** *extends* [`RunOptions`](../../types/type-aliases/RunOptions.md) = [`DefaultRunOptions`](../../types/type-aliases/DefaultRunOptions.md)

## Parameters

### file

`string`

### args?

`string`[]

### options?

`FactoryOptionsType`

## Returns

[`RunnerFactoryReturnType`](../../types/type-aliases/RunnerFactoryReturnType.md)\<`FactoryOptionsType`\>
