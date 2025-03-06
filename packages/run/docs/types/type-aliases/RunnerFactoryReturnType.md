[**@-xun/run**](../../README.md)

***

[@-xun/run](../../README.md) / [types](../README.md) / RunnerFactoryReturnType

# Type Alias: RunnerFactoryReturnType()\<FactoryOptionsType\>

> **RunnerFactoryReturnType**\<`FactoryOptionsType`\>: (`args`?, `options`?) => `Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\[\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<FactoryOptionsType\> & \{ \[Key in (...) \| (...) \| (...) \| (...) as (...) extends (...) ? (...) : (...)\]: (...)\[(...)\] \} & OmitIndexSignature\<FactoryOptionsType\>)\[KeyType\] \}\] extends \[ReifiedOptionsType\] ? ReifiedOptionsType extends \{ lines: true \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(...) & (...)\> & \{ \[Key in (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) as (...) extends (...) ? (...) : (...)\]: (...)\[(...)\] \} & OmitIndexSignature\<(...) & (...)\>)\[KeyType\] \} : ReifiedOptionsType extends \{ coerceOutputToString: true \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(...)\> & \{ \[Key in (...) as (...)\]: (...) \} & OmitIndexSignature\<(...)\>)\[KeyType\] \} : Result\<ReifiedOptionsType\> : never)\[KeyType\] \}\>\<`LocalOptionsType`\>(`args`?, `options`?) => `Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\[\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<\{ \[KeyType in (...)\]: (...) \}\> & \{ \[Key in (...) \| (...) \| (...) \| (...) as (...) extends (...) ? (...) : (...)\]: (...)\[(...)\] \} & OmitIndexSignature\<\{ \[KeyType in (...)\]: (...) \}\>)\[KeyType\] \}\] extends \[ReifiedOptionsType\] ? ReifiedOptionsType extends \{ lines: true \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(...) & (...)\> & \{ \[Key in (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) as (...) extends (...) ? (...) : (...)\]: (...)\[(...)\] \} & OmitIndexSignature\<(...) & (...)\>)\[KeyType\] \} : ReifiedOptionsType extends \{ coerceOutputToString: true \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(...)\> & \{ \[Key in (...) as (...)\]: (...) \} & OmitIndexSignature\<(...)\>)\[KeyType\] \} : Result\<ReifiedOptionsType\> : never)\[KeyType\] \}\>

Defined in: [packages/run/src/types.ts:165](https://github.com/Xunnamius/exec-utils/blob/49a686926412eee8a176a3c8893c62abf78eaebf/packages/run/src/types.ts#L165)

## Type Parameters

• **FactoryOptionsType** *extends* [`RunOptions`](RunOptions.md) = [`DefaultRunOptions`](DefaultRunOptions.md)

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

3. Elides Node.js debugger strings. Set
   `elideNodeDebuggerStringsFromStderr: false` to override this.

## Parameters

### args?

`string`[]

### options?

`undefined`

## Returns

`Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\[\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<FactoryOptionsType\> & \{ \[Key in (...) \| (...) \| (...) \| (...) as (...) extends (...) ? (...) : (...)\]: (...)\[(...)\] \} & OmitIndexSignature\<FactoryOptionsType\>)\[KeyType\] \}\] extends \[ReifiedOptionsType\] ? ReifiedOptionsType extends \{ lines: true \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(...) & (...)\> & \{ \[Key in (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) as (...) extends (...) ? (...) : (...)\]: (...)\[(...)\] \} & OmitIndexSignature\<(...) & (...)\>)\[KeyType\] \} : ReifiedOptionsType extends \{ coerceOutputToString: true \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(...)\> & \{ \[Key in (...) as (...)\]: (...) \} & OmitIndexSignature\<(...)\>)\[KeyType\] \} : Result\<ReifiedOptionsType\> : never)\[KeyType\] \}\>

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

3. Elides Node.js debugger strings. Set
   `elideNodeDebuggerStringsFromStderr: false` to override this.

## Type Parameters

• **LocalOptionsType** *extends* [`RunOptions`](RunOptions.md)

## Parameters

### args?

`string`[]

### options?

`LocalOptionsType`

## Returns

`Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\[\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<\{ \[KeyType in (...)\]: (...) \}\> & \{ \[Key in (...) \| (...) \| (...) \| (...) as (...) extends (...) ? (...) : (...)\]: (...)\[(...)\] \} & OmitIndexSignature\<\{ \[KeyType in (...)\]: (...) \}\>)\[KeyType\] \}\] extends \[ReifiedOptionsType\] ? ReifiedOptionsType extends \{ lines: true \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(...) & (...)\> & \{ \[Key in (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) as (...) extends (...) ? (...) : (...)\]: (...)\[(...)\] \} & OmitIndexSignature\<(...) & (...)\>)\[KeyType\] \} : ReifiedOptionsType extends \{ coerceOutputToString: true \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(...)\> & \{ \[Key in (...) as (...)\]: (...) \} & OmitIndexSignature\<(...)\>)\[KeyType\] \} : Result\<ReifiedOptionsType\> : never)\[KeyType\] \}\>

## See

`runnerFactory`
