[**@-xun/run**](../../README.md)

***

[@-xun/run](../../README.md) / [index](../README.md) / runnerFactory

# Function: runnerFactory()

> **runnerFactory**\<`FactoryOptionsType`\>(`file`, `args`?, `options`?): \<`LocalOptionsType`\>(`args`, `options`) => `Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<\{ stderr: string\[\]; stdout: string\[\] \} & ((Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & \{ \[KeyType in (...)\]: (...) \})\["all"\] extends true ? \{ all: string\[\] \} : \{ all: undefined \})\> & \{ \[Key in "stdout" \| "stderr" \| "all" \| "stdio" \| "exitCode" \| "cwd" \| "name" \| "message" \| "stack" \| "cause" \| "shortMessage" \| "originalMessage" \| "code" \| "ipcOutput" \| "pipedFrom" \| "command" \| "escapedCommand" \| "durationMs" \| "failed" \| "timedOut" \| "isCanceled" \| "isGracefullyCanceled" \| "isMaxBuffer" \| "isTerminated" \| "isForcefullyTerminated" \| "signal" \| "signalDescription" as Key extends keyof OmitIndexSignature\<\{ stderr: ...; stdout: ... \} & ((...) extends (...) ? (...) : (...))\> ? never : Key\]: OmitIndexSignature\<Result\<Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & \{ \[KeyType in (...)\]: (...) \}\>\>\[Key\] \} & OmitIndexSignature\<\{ stderr: string\[\]; stdout: string\[\] \} & ((Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & \{ \[KeyType in (...)\]: (...) \})\["all"\] extends true ? \{ all: string\[\] \} : \{ all: undefined \})\>)\[KeyType\] \}\>\<`LocalOptionsType`\>(`args`, `options`) => `Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & \{ \[KeyType in (...) \| (...) \| (...)\]: (...)\[(...)\] \})\["all"\] extends true ? Pick\<Result\<Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & \{ \[KeyType in (...)\]: (...) \}\>, "all"\> : \{ all: undefined \}\> & \{ \[Key in "stdout" \| "stderr" \| "all" \| "stdio" \| "exitCode" \| "cwd" \| "name" \| "message" \| "stack" \| "cause" \| "shortMessage" \| "originalMessage" \| "code" \| "ipcOutput" \| "pipedFrom" \| "command" \| "escapedCommand" \| "durationMs" \| "failed" \| "timedOut" \| "isCanceled" \| "isGracefullyCanceled" \| "isMaxBuffer" \| "isTerminated" \| "isForcefullyTerminated" \| "signal" \| "signalDescription" as Key extends keyof OmitIndexSignature\<(...)\[(...)\] extends true ? Pick\<(...), (...)\> : \{ all: ... \}\> ? never : Key\]: OmitIndexSignature\<Result\<Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & \{ \[KeyType in (...)\]: (...) \}\>\>\[Key\] \} & OmitIndexSignature\<(Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & \{ \[KeyType in (...) \| (...) \| (...)\]: (...)\[(...)\] \})\["all"\] extends true ? Pick\<Result\<Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & \{ \[KeyType in (...)\]: (...) \}\>, "all"\> : \{ all: undefined \}\>)\[KeyType\] \}\>\<`LocalOptionsType`\>(`args`?, `options`?) => `Promise`\<\{ \[KeyType in string \| number \| symbol\]: (FactoryOptionsType extends Options & \{ coerceOutputToString?: boolean; useIntermediate?: (intermediateResult: RunIntermediateReturnType) =\> Promisable\<void\> \} & \{ lines: true \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<\{ stderr: ...; stdout: ... \} & ((...) extends (...) ? (...) : (...))\> & \{ \[Key in "stdout" \| "stderr" \| "all" \| "stdio" \| "exitCode" \| "cwd" \| "name" \| "message" \| "stack" \| "cause" \| "shortMessage" \| "originalMessage" \| "code" \| "ipcOutput" \| "pipedFrom" \| "command" \| "escapedCommand" \| "durationMs" \| "failed" \| "timedOut" \| "isCanceled" \| "isGracefullyCanceled" \| "isMaxBuffer" \| "isTerminated" \| "isForcefullyTerminated" \| "signal" \| "signalDescription" as Key extends keyof (...) ? never : Key\]: OmitIndexSignature\<(...)\>\[Key\] \} & OmitIndexSignature\<\{ stderr: ...; stdout: ... \} & ((...) extends (...) ? (...) : (...))\>)\[KeyType\] \} : FactoryOptionsType extends Options & \{ coerceOutputToString?: boolean; useIntermediate?: (intermediateResult: RunIntermediateReturnType) =\> Promisable\<(...)\> \} & \{ coerceOutputToString: false \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(...) extends (...) ? (...) : (...)\> & \{ \[Key in (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) as (...) extends (...) ? (...) : (...)\]: (...)\[(...)\] \} & OmitIndexSignature\<(...) extends (...) ? (...) : (...)\>)\[KeyType\] \} : \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(...) & (...)\> & \{ \[Key in (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) as (...) extends (...) ? (...) : (...)\]: (...)\[(...)\] \} & OmitIndexSignature\<(...) & (...)\>)\[KeyType\] \})\[KeyType\] \}\>

Defined in: [packages/run/src/index.ts:226](https://github.com/Xunnamius/exec-utils/blob/24e04f73027fc1c0874e587fe74999c2394ba6f8/packages/run/src/index.ts#L226)

Returns a [run](run.md) function that, when called, runs (executes) `file` with
the given `args` with respect to the given `options`.

Additional arguments specified via the returned [run](run.md) function will be
appended to `args`. Additional options specified via the returned [run](run.md)
function will overwrite existing options in `options` (via `Object.assign`).

## Type Parameters

• **FactoryOptionsType** *extends* [`RunOptions`](../type-aliases/RunOptions.md)

## Parameters

### file

`string`

### args?

`string`[]

### options?

`FactoryOptionsType`

## Returns

`Function`

Runs (executes) `file` with the given `args` with respect to the given
`options`.

With this call signature, `stdout` and `stderr` will be of type `string[]`.

Note that, by default, this function rejects on a non-zero exit code. Set
`reject: false` to override this.

### Type Parameters

• **LocalOptionsType** *extends* `Options` & `object` & `object`

### Parameters

#### args

`string`[]

#### options

`LocalOptionsType`

### Returns

`Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<\{ stderr: string\[\]; stdout: string\[\] \} & ((Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & \{ \[KeyType in (...)\]: (...) \})\["all"\] extends true ? \{ all: string\[\] \} : \{ all: undefined \})\> & \{ \[Key in "stdout" \| "stderr" \| "all" \| "stdio" \| "exitCode" \| "cwd" \| "name" \| "message" \| "stack" \| "cause" \| "shortMessage" \| "originalMessage" \| "code" \| "ipcOutput" \| "pipedFrom" \| "command" \| "escapedCommand" \| "durationMs" \| "failed" \| "timedOut" \| "isCanceled" \| "isGracefullyCanceled" \| "isMaxBuffer" \| "isTerminated" \| "isForcefullyTerminated" \| "signal" \| "signalDescription" as Key extends keyof OmitIndexSignature\<\{ stderr: ...; stdout: ... \} & ((...) extends (...) ? (...) : (...))\> ? never : Key\]: OmitIndexSignature\<Result\<Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & \{ \[KeyType in (...)\]: (...) \}\>\>\[Key\] \} & OmitIndexSignature\<\{ stderr: string\[\]; stdout: string\[\] \} & ((Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & \{ \[KeyType in (...)\]: (...) \})\["all"\] extends true ? \{ all: string\[\] \} : \{ all: undefined \})\>)\[KeyType\] \}\>

Runs (executes) `file` with the given `args` with respect to the given
`options`.

Note that, by default, this function rejects on a non-zero exit code. Set
`reject: false` to override this.

### Type Parameters

• **LocalOptionsType** *extends* `Options` & `object` & `object`

### Parameters

#### args

`string`[]

#### options

`LocalOptionsType`

### Returns

`Promise`\<\{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & \{ \[KeyType in (...) \| (...) \| (...)\]: (...)\[(...)\] \})\["all"\] extends true ? Pick\<Result\<Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & \{ \[KeyType in (...)\]: (...) \}\>, "all"\> : \{ all: undefined \}\> & \{ \[Key in "stdout" \| "stderr" \| "all" \| "stdio" \| "exitCode" \| "cwd" \| "name" \| "message" \| "stack" \| "cause" \| "shortMessage" \| "originalMessage" \| "code" \| "ipcOutput" \| "pipedFrom" \| "command" \| "escapedCommand" \| "durationMs" \| "failed" \| "timedOut" \| "isCanceled" \| "isGracefullyCanceled" \| "isMaxBuffer" \| "isTerminated" \| "isForcefullyTerminated" \| "signal" \| "signalDescription" as Key extends keyof OmitIndexSignature\<(...)\[(...)\] extends true ? Pick\<(...), (...)\> : \{ all: ... \}\> ? never : Key\]: OmitIndexSignature\<Result\<Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & \{ \[KeyType in (...)\]: (...) \}\>\>\[Key\] \} & OmitIndexSignature\<(Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & \{ \[KeyType in (...) \| (...) \| (...)\]: (...)\[(...)\] \})\["all"\] extends true ? Pick\<Result\<Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & \{ \[KeyType in (...)\]: (...) \}\>, "all"\> : \{ all: undefined \}\>)\[KeyType\] \}\>

Runs (executes) `file` with the given `args` with respect to the given
`options`.

Note that, by default, this function rejects on a non-zero exit code. Set
`reject: false` to override this.

### Type Parameters

• **LocalOptionsType** *extends* [`RunOptions`](../type-aliases/RunOptions.md)

### Parameters

#### args?

`string`[]

#### options?

`LocalOptionsType`

### Returns

`Promise`\<\{ \[KeyType in string \| number \| symbol\]: (FactoryOptionsType extends Options & \{ coerceOutputToString?: boolean; useIntermediate?: (intermediateResult: RunIntermediateReturnType) =\> Promisable\<void\> \} & \{ lines: true \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<\{ stderr: ...; stdout: ... \} & ((...) extends (...) ? (...) : (...))\> & \{ \[Key in "stdout" \| "stderr" \| "all" \| "stdio" \| "exitCode" \| "cwd" \| "name" \| "message" \| "stack" \| "cause" \| "shortMessage" \| "originalMessage" \| "code" \| "ipcOutput" \| "pipedFrom" \| "command" \| "escapedCommand" \| "durationMs" \| "failed" \| "timedOut" \| "isCanceled" \| "isGracefullyCanceled" \| "isMaxBuffer" \| "isTerminated" \| "isForcefullyTerminated" \| "signal" \| "signalDescription" as Key extends keyof (...) ? never : Key\]: OmitIndexSignature\<(...)\>\[Key\] \} & OmitIndexSignature\<\{ stderr: ...; stdout: ... \} & ((...) extends (...) ? (...) : (...))\>)\[KeyType\] \} : FactoryOptionsType extends Options & \{ coerceOutputToString?: boolean; useIntermediate?: (intermediateResult: RunIntermediateReturnType) =\> Promisable\<(...)\> \} & \{ coerceOutputToString: false \} ? \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(...) extends (...) ? (...) : (...)\> & \{ \[Key in (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) as (...) extends (...) ? (...) : (...)\]: (...)\[(...)\] \} & OmitIndexSignature\<(...) extends (...) ? (...) : (...)\>)\[KeyType\] \} : \{ \[KeyType in string \| number \| symbol\]: (\{\} & PickIndexSignature\<(...) & (...)\> & \{ \[Key in (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) \| (...) as (...) extends (...) ? (...) : (...)\]: (...)\[(...)\] \} & OmitIndexSignature\<(...) & (...)\>)\[KeyType\] \})\[KeyType\] \}\>
