[**@-xun/run**](../../README.md)

***

[@-xun/run](../../README.md) / [index](../README.md) / run

# Function: run()

## Call Signature

> **run**(`file`, `args`?, `options`?): `Promise`\<\{ `all`: `undefined`; `cause`: `unknown`; `code`: `undefined` \| `string`; `command`: `string`; `cwd`: `string`; `durationMs`: `number`; `escapedCommand`: `string`; `exitCode`: `number`; `failed`: `boolean`; `ipcOutput`: \[\] \| (`null` \| `string` \| `number` \| `boolean` \| `object` \| readonly `JsonMessage`[] \| \{\})[]; `isCanceled`: `boolean`; `isForcefullyTerminated`: `boolean`; `isGracefullyCanceled`: `boolean`; `isMaxBuffer`: `boolean`; `isTerminated`: `boolean`; `message`: `undefined` \| `string`; `name`: `undefined` \| `string`; `originalMessage`: `undefined` \| `string`; `pipedFrom`: `Result`\<`Options`\>[]; `shortMessage`: `undefined` \| `string`; `signal`: `Signals`; `signalDescription`: `string`; `stack`: `undefined` \| `string`; `stderr`: `string`; `stdio`: `MapResultStdio`\<readonly \[`StdinOptionCommon`\<`false`, `false`\>, `StdoutStderrOptionCommon`\<`false`, `false`\>, `StdoutStderrOptionCommon`\<`false`, `false`\>, `StdioExtraOptionCommon`\<`false`\>\] \| readonly \[`undefined`, `undefined`, `undefined`\] \| readonly \[`"pipe"`, `"pipe"`, `"pipe"`\] \| readonly \[`"inherit"`, `"inherit"`, `"inherit"`\] \| readonly \[`"ignore"`, `"ignore"`, `"ignore"`\] \| readonly \[`"overlapped"`, `"overlapped"`, `"overlapped"`\]\>; `stdout`: `string`; `timedOut`: `boolean`; \}\>

Defined in: [packages/run/src/index.ts:31](https://github.com/Xunnamius/exec-utils/blob/06735914ae278783fb4ee6a4cc1a3732191459ee/packages/run/src/index.ts#L31)

Runs (executes) `file` with the given `args` with respect to the given
`options`.

Note that, by default, this function:

1. Rejects on a non-zero exit code. Set `reject: false` to override this, or
   use [runNoRejectOnBadExit](runNoRejectOnBadExit.md).

2. Coerces output to a string. Set `coerceOutputToString: false` (or `lines:
   true`) to override this.

### Parameters

#### file

`string`

#### args?

`string`[]

#### options?

`undefined`

### Returns

`Promise`\<\{ `all`: `undefined`; `cause`: `unknown`; `code`: `undefined` \| `string`; `command`: `string`; `cwd`: `string`; `durationMs`: `number`; `escapedCommand`: `string`; `exitCode`: `number`; `failed`: `boolean`; `ipcOutput`: \[\] \| (`null` \| `string` \| `number` \| `boolean` \| `object` \| readonly `JsonMessage`[] \| \{\})[]; `isCanceled`: `boolean`; `isForcefullyTerminated`: `boolean`; `isGracefullyCanceled`: `boolean`; `isMaxBuffer`: `boolean`; `isTerminated`: `boolean`; `message`: `undefined` \| `string`; `name`: `undefined` \| `string`; `originalMessage`: `undefined` \| `string`; `pipedFrom`: `Result`\<`Options`\>[]; `shortMessage`: `undefined` \| `string`; `signal`: `Signals`; `signalDescription`: `string`; `stack`: `undefined` \| `string`; `stderr`: `string`; `stdio`: `MapResultStdio`\<readonly \[`StdinOptionCommon`\<`false`, `false`\>, `StdoutStderrOptionCommon`\<`false`, `false`\>, `StdoutStderrOptionCommon`\<`false`, `false`\>, `StdioExtraOptionCommon`\<`false`\>\] \| readonly \[`undefined`, `undefined`, `undefined`\] \| readonly \[`"pipe"`, `"pipe"`, `"pipe"`\] \| readonly \[`"inherit"`, `"inherit"`, `"inherit"`\] \| readonly \[`"ignore"`, `"ignore"`, `"ignore"`\] \| readonly \[`"overlapped"`, `"overlapped"`, `"overlapped"`\]\>; `stdout`: `string`; `timedOut`: `boolean`; \}\>

## Call Signature

> **run**\<`OptionsType`\>(`file`, `args`?, `options`?): `Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\[\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<OptionsType\> & \{ \[Key in (keyof Options) \| "useIntermediate" \| "coerceOutputToString" as Key extends keyof (...) ? never : Key\]: OmitIndexSignature\<(...)\>\[Key\] \} & OmitIndexSignature\<OptionsType\>)\[KeyType\] \}\] extends \[ReifiedOptionsType\] ? ReifiedOptionsType extends \{ lines: true \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<\{ stderr: ...; stdout: ... \} & ((...) extends (...) ? (...) : (...))\> & \{ \[Key in "stdout" \| "stderr" \| "all" \| "cwd" \| "stdio" \| "name" \| "message" \| "stack" \| "cause" \| "shortMessage" \| "originalMessage" \| "code" \| "ipcOutput" \| "pipedFrom" \| "command" \| "escapedCommand" \| "durationMs" \| "failed" \| "timedOut" \| "isCanceled" \| "isGracefullyCanceled" \| "isMaxBuffer" \| "isTerminated" \| "isForcefullyTerminated" \| "exitCode" \| "signal" \| "signalDescription" as Key extends keyof (...) ? never : Key\]: OmitIndexSignature\<(...)\>\[Key\] \} & OmitIndexSignature\<\{ stderr: ...; stdout: ... \} & ((...) extends (...) ? (...) : (...))\>)\[KeyType\] \} : ReifiedOptionsType extends \{ coerceOutputToString: true \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(...) & (...)\> & \{ \[Key in (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) as (...) extends (...) ? (...) : (...)\]: (...)\[(...)\] \} & OmitIndexSignature\<(...) & (...)\>)\[KeyType\] \} : Result\<ReifiedOptionsType\> : never)\[KeyType\] \}\>

Defined in: [packages/run/src/index.ts:36](https://github.com/Xunnamius/exec-utils/blob/06735914ae278783fb4ee6a4cc1a3732191459ee/packages/run/src/index.ts#L36)

Runs (executes) `file` with the given `args` with respect to the given
`options`.

Note that, by default, this function:

1. Rejects on a non-zero exit code. Set `reject: false` to override this, or
   use [runNoRejectOnBadExit](runNoRejectOnBadExit.md).

2. Coerces output to a string. Set `coerceOutputToString: false` (or `lines:
   true`) to override this.

### Type Parameters

• **OptionsType** *extends* [`RunOptions`](../../types/type-aliases/RunOptions.md)

### Parameters

#### file

`string`

#### args?

`string`[]

#### options?

`OptionsType`

### Returns

`Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\[\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<OptionsType\> & \{ \[Key in (keyof Options) \| "useIntermediate" \| "coerceOutputToString" as Key extends keyof (...) ? never : Key\]: OmitIndexSignature\<(...)\>\[Key\] \} & OmitIndexSignature\<OptionsType\>)\[KeyType\] \}\] extends \[ReifiedOptionsType\] ? ReifiedOptionsType extends \{ lines: true \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<\{ stderr: ...; stdout: ... \} & ((...) extends (...) ? (...) : (...))\> & \{ \[Key in "stdout" \| "stderr" \| "all" \| "cwd" \| "stdio" \| "name" \| "message" \| "stack" \| "cause" \| "shortMessage" \| "originalMessage" \| "code" \| "ipcOutput" \| "pipedFrom" \| "command" \| "escapedCommand" \| "durationMs" \| "failed" \| "timedOut" \| "isCanceled" \| "isGracefullyCanceled" \| "isMaxBuffer" \| "isTerminated" \| "isForcefullyTerminated" \| "exitCode" \| "signal" \| "signalDescription" as Key extends keyof (...) ? never : Key\]: OmitIndexSignature\<(...)\>\[Key\] \} & OmitIndexSignature\<\{ stderr: ...; stdout: ... \} & ((...) extends (...) ? (...) : (...))\>)\[KeyType\] \} : ReifiedOptionsType extends \{ coerceOutputToString: true \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(...) & (...)\> & \{ \[Key in (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) as (...) extends (...) ? (...) : (...)\]: (...)\[(...)\] \} & OmitIndexSignature\<(...) & (...)\>)\[KeyType\] \} : Result\<ReifiedOptionsType\> : never)\[KeyType\] \}\>
