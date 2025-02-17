[**@-xun/run**](../../README.md)

***

[@-xun/run](../../README.md) / [index](../README.md) / runNoRejectOnBadExit

# Function: runNoRejectOnBadExit()

## Call Signature

> **runNoRejectOnBadExit**\<`OptionsType`\>(`file`, `args`, `options`): `Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<\{ stderr: string\[\]; stdout: string\[\] \} & ((Omit\<RunOptions, "reject"\> & OptionsType)\["all"\] extends true ? \{ all: string\[\] \} : \{ all: undefined \})\> & \{ \[Key in "stdout" \| "stderr" \| "all" \| "stdio" \| "exitCode" \| "cwd" \| "name" \| "message" \| "stack" \| "cause" \| "shortMessage" \| "originalMessage" \| "code" \| "ipcOutput" \| "pipedFrom" \| "command" \| "escapedCommand" \| "durationMs" \| "failed" \| "timedOut" \| "isCanceled" \| "isGracefullyCanceled" \| "isMaxBuffer" \| "isTerminated" \| "isForcefullyTerminated" \| "signal" \| "signalDescription" as Key extends keyof OmitIndexSignature\<\{ stderr: (...)\[\]; stdout: (...)\[\] \} & ((...)\[(...)\] extends true ? \{ all: ... \} : \{ all: ... \})\> ? never : Key\]: OmitIndexSignature\<Result\<Omit\<RunOptions, "reject"\> & OptionsType\>\>\[Key\] \} & OmitIndexSignature\<\{ stderr: string\[\]; stdout: string\[\] \} & ((Omit\<RunOptions, "reject"\> & OptionsType)\["all"\] extends true ? \{ all: string\[\] \} : \{ all: undefined \})\>)\[KeyType\] \}\>

Defined in: [packages/run/src/index.ts:168](https://github.com/Xunnamius/exec-utils/blob/24e04f73027fc1c0874e587fe74999c2394ba6f8/packages/run/src/index.ts#L168)

Runs (executes) `file` with the given `args` with respect to the given
`options`.

Note that this function DOES NOT REJECT on a non-zero exit code.

### Type Parameters

• **OptionsType** *extends* `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `object`

### Parameters

#### file

`string`

#### args

`string`[]

#### options

`OptionsType`

### Returns

`Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<\{ stderr: string\[\]; stdout: string\[\] \} & ((Omit\<RunOptions, "reject"\> & OptionsType)\["all"\] extends true ? \{ all: string\[\] \} : \{ all: undefined \})\> & \{ \[Key in "stdout" \| "stderr" \| "all" \| "stdio" \| "exitCode" \| "cwd" \| "name" \| "message" \| "stack" \| "cause" \| "shortMessage" \| "originalMessage" \| "code" \| "ipcOutput" \| "pipedFrom" \| "command" \| "escapedCommand" \| "durationMs" \| "failed" \| "timedOut" \| "isCanceled" \| "isGracefullyCanceled" \| "isMaxBuffer" \| "isTerminated" \| "isForcefullyTerminated" \| "signal" \| "signalDescription" as Key extends keyof OmitIndexSignature\<\{ stderr: (...)\[\]; stdout: (...)\[\] \} & ((...)\[(...)\] extends true ? \{ all: ... \} : \{ all: ... \})\> ? never : Key\]: OmitIndexSignature\<Result\<Omit\<RunOptions, "reject"\> & OptionsType\>\>\[Key\] \} & OmitIndexSignature\<\{ stderr: string\[\]; stdout: string\[\] \} & ((Omit\<RunOptions, "reject"\> & OptionsType)\["all"\] extends true ? \{ all: string\[\] \} : \{ all: undefined \})\>)\[KeyType\] \}\>

### See

[run](run.md)

## Call Signature

> **runNoRejectOnBadExit**\<`OptionsType`\>(`file`, `args`, `options`): `Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(Omit\<RunOptions, "reject"\> & OptionsType)\["all"\] extends true ? Pick\<Result\<Omit\<RunOptions, "reject"\> & OptionsType\>, "all"\> : \{ all: undefined \}\> & \{ \[Key in "stdout" \| "stderr" \| "all" \| "stdio" \| "exitCode" \| "cwd" \| "name" \| "message" \| "stack" \| "cause" \| "shortMessage" \| "originalMessage" \| "code" \| "ipcOutput" \| "pipedFrom" \| "command" \| "escapedCommand" \| "durationMs" \| "failed" \| "timedOut" \| "isCanceled" \| "isGracefullyCanceled" \| "isMaxBuffer" \| "isTerminated" \| "isForcefullyTerminated" \| "signal" \| "signalDescription" as Key extends keyof OmitIndexSignature\<((...) & (...))\["all"\] extends true ? Pick\<Result\<(...)\>, "all"\> : \{ all: undefined \}\> ? never : Key\]: OmitIndexSignature\<Result\<Omit\<RunOptions, "reject"\> & OptionsType\>\>\[Key\] \} & OmitIndexSignature\<(Omit\<RunOptions, "reject"\> & OptionsType)\["all"\] extends true ? Pick\<Result\<Omit\<RunOptions, "reject"\> & OptionsType\>, "all"\> : \{ all: undefined \}\>)\[KeyType\] \}\>

Defined in: [packages/run/src/index.ts:183](https://github.com/Xunnamius/exec-utils/blob/24e04f73027fc1c0874e587fe74999c2394ba6f8/packages/run/src/index.ts#L183)

Runs (executes) `file` with the given `args` with respect to the given
`options`.

Note that this function DOES NOT REJECT on a non-zero exit code.

### Type Parameters

• **OptionsType** *extends* `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `object`

### Parameters

#### file

`string`

#### args

`string`[]

#### options

`OptionsType`

### Returns

`Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(Omit\<RunOptions, "reject"\> & OptionsType)\["all"\] extends true ? Pick\<Result\<Omit\<RunOptions, "reject"\> & OptionsType\>, "all"\> : \{ all: undefined \}\> & \{ \[Key in "stdout" \| "stderr" \| "all" \| "stdio" \| "exitCode" \| "cwd" \| "name" \| "message" \| "stack" \| "cause" \| "shortMessage" \| "originalMessage" \| "code" \| "ipcOutput" \| "pipedFrom" \| "command" \| "escapedCommand" \| "durationMs" \| "failed" \| "timedOut" \| "isCanceled" \| "isGracefullyCanceled" \| "isMaxBuffer" \| "isTerminated" \| "isForcefullyTerminated" \| "signal" \| "signalDescription" as Key extends keyof OmitIndexSignature\<((...) & (...))\["all"\] extends true ? Pick\<Result\<(...)\>, "all"\> : \{ all: undefined \}\> ? never : Key\]: OmitIndexSignature\<Result\<Omit\<RunOptions, "reject"\> & OptionsType\>\>\[Key\] \} & OmitIndexSignature\<(Omit\<RunOptions, "reject"\> & OptionsType)\["all"\] extends true ? Pick\<Result\<Omit\<RunOptions, "reject"\> & OptionsType\>, "all"\> : \{ all: undefined \}\>)\[KeyType\] \}\>

### See

[run](run.md)

## Call Signature

> **runNoRejectOnBadExit**\<`OptionsType`\>(`file`, `args`?, `options`?): `Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<\{ stderr: string; stdout: string \} & ((Omit\<RunOptions, "reject"\> & OptionsType)\["all"\] extends true ? \{ all: string \} : \{ all: undefined \})\> & \{ \[Key in "stdout" \| "stderr" \| "all" \| "stdio" \| "exitCode" \| "cwd" \| "name" \| "message" \| "stack" \| "cause" \| "shortMessage" \| "originalMessage" \| "code" \| "ipcOutput" \| "pipedFrom" \| "command" \| "escapedCommand" \| "durationMs" \| "failed" \| "timedOut" \| "isCanceled" \| "isGracefullyCanceled" \| "isMaxBuffer" \| "isTerminated" \| "isForcefullyTerminated" \| "signal" \| "signalDescription" as Key extends keyof OmitIndexSignature\<\{ stderr: string; stdout: string \} & ((...)\[(...)\] extends true ? \{ all: ... \} : \{ all: ... \})\> ? never : Key\]: OmitIndexSignature\<Result\<Omit\<RunOptions, "reject"\> & OptionsType\>\>\[Key\] \} & OmitIndexSignature\<\{ stderr: string; stdout: string \} & ((Omit\<RunOptions, "reject"\> & OptionsType)\["all"\] extends true ? \{ all: string \} : \{ all: undefined \})\>)\[KeyType\] \}\>

Defined in: [packages/run/src/index.ts:203](https://github.com/Xunnamius/exec-utils/blob/24e04f73027fc1c0874e587fe74999c2394ba6f8/packages/run/src/index.ts#L203)

Runs (executes) `file` with the given `args` with respect to the given
`options`.

With this call signature, `stdout` and `stderr` will be coerced to type
`string`.

Note that this function DOES NOT REJECT on a non-zero exit code.

### Type Parameters

• **OptionsType** *extends* `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\>

### Parameters

#### file

`string`

#### args?

`string`[]

#### options?

`OptionsType`

### Returns

`Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<\{ stderr: string; stdout: string \} & ((Omit\<RunOptions, "reject"\> & OptionsType)\["all"\] extends true ? \{ all: string \} : \{ all: undefined \})\> & \{ \[Key in "stdout" \| "stderr" \| "all" \| "stdio" \| "exitCode" \| "cwd" \| "name" \| "message" \| "stack" \| "cause" \| "shortMessage" \| "originalMessage" \| "code" \| "ipcOutput" \| "pipedFrom" \| "command" \| "escapedCommand" \| "durationMs" \| "failed" \| "timedOut" \| "isCanceled" \| "isGracefullyCanceled" \| "isMaxBuffer" \| "isTerminated" \| "isForcefullyTerminated" \| "signal" \| "signalDescription" as Key extends keyof OmitIndexSignature\<\{ stderr: string; stdout: string \} & ((...)\[(...)\] extends true ? \{ all: ... \} : \{ all: ... \})\> ? never : Key\]: OmitIndexSignature\<Result\<Omit\<RunOptions, "reject"\> & OptionsType\>\>\[Key\] \} & OmitIndexSignature\<\{ stderr: string; stdout: string \} & ((Omit\<RunOptions, "reject"\> & OptionsType)\["all"\] extends true ? \{ all: string \} : \{ all: undefined \})\>)\[KeyType\] \}\>

### See

[run](run.md)
