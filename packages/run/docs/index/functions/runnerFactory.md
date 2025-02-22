[**@-xun/run**](../../README.md)

***

[@-xun/run](../../README.md) / [index](../README.md) / runnerFactory

# Function: runnerFactory()

> **runnerFactory**\<`FactoryOptionsType`\>(`file`, `args`?, `options`?): (`args`?, `options`?) => `Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\[\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<FactoryOptionsType\> & \{ \[Key in (...) \| (...) \| (...) as (...) extends (...) ? (...) : (...)\]: (...)\[(...)\] \} & OmitIndexSignature\<FactoryOptionsType\>)\[KeyType\] \}\] extends \[ReifiedOptionsType\] ? ReifiedOptionsType extends \{ lines: true \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(...) & (...)\> & \{ \[Key in (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) as (...) extends (...) ? (...) : (...)\]: (...)\[(...)\] \} & OmitIndexSignature\<(...) & (...)\>)\[KeyType\] \} : ReifiedOptionsType extends \{ coerceOutputToString: true \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(...)\> & \{ \[Key in (...) as (...)\]: (...) \} & OmitIndexSignature\<(...)\>)\[KeyType\] \} : Result\<ReifiedOptionsType\> : never)\[KeyType\] \}\>\<`LocalOptionsType`\>(`args`?, `options`?) => `Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\[\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<\{ \[KeyType in (...)\]: (...) \}\> & \{ \[Key in (...) \| (...) \| (...) as (...) extends (...) ? (...) : (...)\]: (...)\[(...)\] \} & OmitIndexSignature\<\{ \[KeyType in (...)\]: (...) \}\>)\[KeyType\] \}\] extends \[ReifiedOptionsType\] ? ReifiedOptionsType extends \{ lines: true \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(...) & (...)\> & \{ \[Key in (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) as (...) extends (...) ? (...) : (...)\]: (...)\[(...)\] \} & OmitIndexSignature\<(...) & (...)\>)\[KeyType\] \} : ReifiedOptionsType extends \{ coerceOutputToString: true \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(...)\> & \{ \[Key in (...) as (...)\]: (...) \} & OmitIndexSignature\<(...)\>)\[KeyType\] \} : Result\<ReifiedOptionsType\> : never)\[KeyType\] \}\>

Defined in: [packages/run/src/index.ts:146](https://github.com/Xunnamius/exec-utils/blob/bf5e65a2582e7e8aeaba89dc9f922437cbff4809/packages/run/src/index.ts#L146)

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

`Function`

Runs (executes) with respect to the factory parameters used to generate
this function.

Additional arguments specified via `args` will be appended to the
corresponding factory parameter. On the other hand, additional options
specified via `options` will _overwrite_ corresponding factory options (via
`Object.assign`).

Note that, by default (unless modified at the factory level), this
function:

1. Rejects on a non-zero exit code. Set `reject: false` to override this.

2. Coerces output to a string. Set `coerceOutputToString: false` (or
   `lines: true`) to override this.

### Parameters

#### args?

`string`[]

#### options?

`undefined`

### Returns

`Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\[\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<FactoryOptionsType\> & \{ \[Key in (...) \| (...) \| (...) as (...) extends (...) ? (...) : (...)\]: (...)\[(...)\] \} & OmitIndexSignature\<FactoryOptionsType\>)\[KeyType\] \}\] extends \[ReifiedOptionsType\] ? ReifiedOptionsType extends \{ lines: true \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(...) & (...)\> & \{ \[Key in (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) as (...) extends (...) ? (...) : (...)\]: (...)\[(...)\] \} & OmitIndexSignature\<(...) & (...)\>)\[KeyType\] \} : ReifiedOptionsType extends \{ coerceOutputToString: true \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(...)\> & \{ \[Key in (...) as (...)\]: (...) \} & OmitIndexSignature\<(...)\>)\[KeyType\] \} : Result\<ReifiedOptionsType\> : never)\[KeyType\] \}\>

Runs (executes) with respect to the factory parameters used to generate
this function.

Additional arguments specified via `args` will be appended to the
corresponding factory parameter. On the other hand, additional options
specified via `options` will _overwrite_ corresponding factory options (via
`Object.assign`).

Note that, by default (unless modified at the factory level), this
function:

1. Rejects on a non-zero exit code. Set `reject: false` to override this.

2. Coerces output to a string. Set `coerceOutputToString: false` (or
   `lines: true`) to override this.

### Type Parameters

• **LocalOptionsType** *extends* [`RunOptions`](../../types/type-aliases/RunOptions.md)

### Parameters

#### args?

`string`[]

#### options?

`LocalOptionsType`

### Returns

`Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\[\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<\{ \[KeyType in (...)\]: (...) \}\> & \{ \[Key in (...) \| (...) \| (...) as (...) extends (...) ? (...) : (...)\]: (...)\[(...)\] \} & OmitIndexSignature\<\{ \[KeyType in (...)\]: (...) \}\>)\[KeyType\] \}\] extends \[ReifiedOptionsType\] ? ReifiedOptionsType extends \{ lines: true \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(...) & (...)\> & \{ \[Key in (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) as (...) extends (...) ? (...) : (...)\]: (...)\[(...)\] \} & OmitIndexSignature\<(...) & (...)\>)\[KeyType\] \} : ReifiedOptionsType extends \{ coerceOutputToString: true \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(...)\> & \{ \[Key in (...) as (...)\]: (...) \} & OmitIndexSignature\<(...)\>)\[KeyType\] \} : Result\<ReifiedOptionsType\> : never)\[KeyType\] \}\>
