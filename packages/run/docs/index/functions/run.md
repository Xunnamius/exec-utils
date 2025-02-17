[**@-xun/run**](../../README.md)

***

[@-xun/run](../../README.md) / [index](../README.md) / run

# Function: run()

## Call Signature

> **run**\<`OptionsType`\>(`file`, `args`, `options`): `Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<\{ stderr: string\[\]; stdout: string\[\] \} & ((Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & OptionsType)\["all"\] extends true ? \{ all: string\[\] \} : \{ all: undefined \})\> & \{ \[Key in "stdout" \| "stderr" \| "all" \| "stdio" \| "exitCode" \| "cwd" \| "name" \| "message" \| "stack" \| "cause" \| "shortMessage" \| "originalMessage" \| "code" \| "ipcOutput" \| "pipedFrom" \| "command" \| "escapedCommand" \| "durationMs" \| "failed" \| "timedOut" \| "isCanceled" \| "isGracefullyCanceled" \| "isMaxBuffer" \| "isTerminated" \| "isForcefullyTerminated" \| "signal" \| "signalDescription" as Key extends keyof OmitIndexSignature\<\{ stderr: (...)\[\]; stdout: (...)\[\] \} & ((...)\[(...)\] extends true ? \{ all: ... \} : \{ all: ... \})\> ? never : Key\]: OmitIndexSignature\<Result\<Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & OptionsType\>\>\[Key\] \} & OmitIndexSignature\<\{ stderr: string\[\]; stdout: string\[\] \} & ((Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & OptionsType)\["all"\] extends true ? \{ all: string\[\] \} : \{ all: undefined \})\>)\[KeyType\] \}\>

Defined in: [packages/run/src/index.ts:71](https://github.com/Xunnamius/exec-utils/blob/99f80c9423153055098aa3bf7b6f903f3ee1b65f/packages/run/src/index.ts#L71)

Runs (executes) `file` with the given `args` with respect to the given
`options`.

With this call signature, `stdout` and `stderr` will be of type `string[]`.

Note that, by default, this function rejects on a non-zero exit code. Set
`reject: false` to override this, or use [runNoRejectOnBadExit](runNoRejectOnBadExit.md).

### Type Parameters

• **OptionsType** *extends* `Options` & `object` & `object`

### Parameters

#### file

`string`

#### args

`string`[]

#### options

`OptionsType`

### Returns

`Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<\{ stderr: string\[\]; stdout: string\[\] \} & ((Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & OptionsType)\["all"\] extends true ? \{ all: string\[\] \} : \{ all: undefined \})\> & \{ \[Key in "stdout" \| "stderr" \| "all" \| "stdio" \| "exitCode" \| "cwd" \| "name" \| "message" \| "stack" \| "cause" \| "shortMessage" \| "originalMessage" \| "code" \| "ipcOutput" \| "pipedFrom" \| "command" \| "escapedCommand" \| "durationMs" \| "failed" \| "timedOut" \| "isCanceled" \| "isGracefullyCanceled" \| "isMaxBuffer" \| "isTerminated" \| "isForcefullyTerminated" \| "signal" \| "signalDescription" as Key extends keyof OmitIndexSignature\<\{ stderr: (...)\[\]; stdout: (...)\[\] \} & ((...)\[(...)\] extends true ? \{ all: ... \} : \{ all: ... \})\> ? never : Key\]: OmitIndexSignature\<Result\<Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & OptionsType\>\>\[Key\] \} & OmitIndexSignature\<\{ stderr: string\[\]; stdout: string\[\] \} & ((Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & OptionsType)\["all"\] extends true ? \{ all: string\[\] \} : \{ all: undefined \})\>)\[KeyType\] \}\>

## Call Signature

> **run**\<`OptionsType`\>(`file`, `args`, `options`): `Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(Options & \{ coerceOutputToString?: boolean; useIntermediate?: (intermediateResult: ...) =\> ... \} & OptionsType)\["all"\] extends true ? Pick\<Result\<Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & OptionsType\>, "all"\> : \{ all: undefined \}\> & \{ \[Key in "stdout" \| "stderr" \| "all" \| "stdio" \| "exitCode" \| "cwd" \| "name" \| "message" \| "stack" \| "cause" \| "shortMessage" \| "originalMessage" \| "code" \| "ipcOutput" \| "pipedFrom" \| "command" \| "escapedCommand" \| "durationMs" \| "failed" \| "timedOut" \| "isCanceled" \| "isGracefullyCanceled" \| "isMaxBuffer" \| "isTerminated" \| "isForcefullyTerminated" \| "signal" \| "signalDescription" as Key extends keyof OmitIndexSignature\<((...) & (...) & (...))\["all"\] extends true ? Pick\<Result\<(...)\>, "all"\> : \{ all: undefined \}\> ? never : Key\]: OmitIndexSignature\<Result\<Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & OptionsType\>\>\[Key\] \} & OmitIndexSignature\<(Options & \{ coerceOutputToString?: boolean; useIntermediate?: (intermediateResult: ...) =\> ... \} & OptionsType)\["all"\] extends true ? Pick\<Result\<Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & OptionsType\>, "all"\> : \{ all: undefined \}\>)\[KeyType\] \}\>

Defined in: [packages/run/src/index.ts:83](https://github.com/Xunnamius/exec-utils/blob/99f80c9423153055098aa3bf7b6f903f3ee1b65f/packages/run/src/index.ts#L83)

Runs (executes) `file` with the given `args` with respect to the given
`options`.

Note that, by default, this function rejects on a non-zero exit code. Set
`reject: false` to override this, or use [runNoRejectOnBadExit](runNoRejectOnBadExit.md).

### Type Parameters

• **OptionsType** *extends* `Options` & `object` & `object`

### Parameters

#### file

`string`

#### args

`string`[]

#### options

`OptionsType`

### Returns

`Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(Options & \{ coerceOutputToString?: boolean; useIntermediate?: (intermediateResult: ...) =\> ... \} & OptionsType)\["all"\] extends true ? Pick\<Result\<Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & OptionsType\>, "all"\> : \{ all: undefined \}\> & \{ \[Key in "stdout" \| "stderr" \| "all" \| "stdio" \| "exitCode" \| "cwd" \| "name" \| "message" \| "stack" \| "cause" \| "shortMessage" \| "originalMessage" \| "code" \| "ipcOutput" \| "pipedFrom" \| "command" \| "escapedCommand" \| "durationMs" \| "failed" \| "timedOut" \| "isCanceled" \| "isGracefullyCanceled" \| "isMaxBuffer" \| "isTerminated" \| "isForcefullyTerminated" \| "signal" \| "signalDescription" as Key extends keyof OmitIndexSignature\<((...) & (...) & (...))\["all"\] extends true ? Pick\<Result\<(...)\>, "all"\> : \{ all: undefined \}\> ? never : Key\]: OmitIndexSignature\<Result\<Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & OptionsType\>\>\[Key\] \} & OmitIndexSignature\<(Options & \{ coerceOutputToString?: boolean; useIntermediate?: (intermediateResult: ...) =\> ... \} & OptionsType)\["all"\] extends true ? Pick\<Result\<Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & OptionsType\>, "all"\> : \{ all: undefined \}\>)\[KeyType\] \}\>

## Call Signature

> **run**\<`OptionsType`\>(`file`, `args`?, `options`?): `Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<\{ stderr: string; stdout: string \} & ((Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & OptionsType)\["all"\] extends true ? \{ all: string \} : \{ all: undefined \})\> & \{ \[Key in "stdout" \| "stderr" \| "all" \| "stdio" \| "exitCode" \| "cwd" \| "name" \| "message" \| "stack" \| "cause" \| "shortMessage" \| "originalMessage" \| "code" \| "ipcOutput" \| "pipedFrom" \| "command" \| "escapedCommand" \| "durationMs" \| "failed" \| "timedOut" \| "isCanceled" \| "isGracefullyCanceled" \| "isMaxBuffer" \| "isTerminated" \| "isForcefullyTerminated" \| "signal" \| "signalDescription" as Key extends keyof OmitIndexSignature\<\{ stderr: string; stdout: string \} & ((...)\[(...)\] extends true ? \{ all: ... \} : \{ all: ... \})\> ? never : Key\]: OmitIndexSignature\<Result\<Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & OptionsType\>\>\[Key\] \} & OmitIndexSignature\<\{ stderr: string; stdout: string \} & ((Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & OptionsType)\["all"\] extends true ? \{ all: string \} : \{ all: undefined \})\>)\[KeyType\] \}\>

Defined in: [packages/run/src/index.ts:100](https://github.com/Xunnamius/exec-utils/blob/99f80c9423153055098aa3bf7b6f903f3ee1b65f/packages/run/src/index.ts#L100)

Runs (executes) `file` with the given `args` with respect to the given
`options`.

With this call signature, `stdout` and `stderr` will be coerced to type
`string`.

Note that, by default, this function rejects on a non-zero exit code. Set
`reject: false` to override this, or use [runNoRejectOnBadExit](runNoRejectOnBadExit.md).

### Type Parameters

• **OptionsType** *extends* [`RunOptions`](../type-aliases/RunOptions.md)

### Parameters

#### file

`string`

#### args?

`string`[]

#### options?

`OptionsType`

### Returns

`Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<\{ stderr: string; stdout: string \} & ((Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & OptionsType)\["all"\] extends true ? \{ all: string \} : \{ all: undefined \})\> & \{ \[Key in "stdout" \| "stderr" \| "all" \| "stdio" \| "exitCode" \| "cwd" \| "name" \| "message" \| "stack" \| "cause" \| "shortMessage" \| "originalMessage" \| "code" \| "ipcOutput" \| "pipedFrom" \| "command" \| "escapedCommand" \| "durationMs" \| "failed" \| "timedOut" \| "isCanceled" \| "isGracefullyCanceled" \| "isMaxBuffer" \| "isTerminated" \| "isForcefullyTerminated" \| "signal" \| "signalDescription" as Key extends keyof OmitIndexSignature\<\{ stderr: string; stdout: string \} & ((...)\[(...)\] extends true ? \{ all: ... \} : \{ all: ... \})\> ? never : Key\]: OmitIndexSignature\<Result\<Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & OptionsType\>\>\[Key\] \} & OmitIndexSignature\<\{ stderr: string; stdout: string \} & ((Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & OptionsType)\["all"\] extends true ? \{ all: string \} : \{ all: undefined \})\>)\[KeyType\] \}\>
