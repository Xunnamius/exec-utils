[**@-xun/run**](../../README.md)

***

[@-xun/run](../../README.md) / [index](../README.md) / runnerFactory

# Function: runnerFactory()

> **runnerFactory**\<`FactoryOptionsType`\>(`file`, `args`?, `options`?): \<`LocalOptionsType`\>(`args`, `options`) => `Promise`\<\{ `all`: `ResultAllProperty`\<`Options` & `object` & `LocalOptionsType`\[`"all"`\]\>; `cause`: `Options` & `object` & `LocalOptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `code`: `undefined` \| `string` & `Options` & `object` & `LocalOptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `command`: `string`; `cwd`: `string`; `durationMs`: `number`; `escapedCommand`: `string`; `exitCode`: `number`; `failed`: `boolean`; `ipcOutput`: `ResultIpcAsync`\<`FdSpecificOption`\<`Options` & `object` & `LocalOptionsType`\[`"buffer"`\], `"ipc"`\>, `HasIpcOption`\<`StricterOptions`\<`Options` & `object` & `LocalOptionsType`, `Options`\>\[`"ipc"`\], `"ipcInput"` *extends* keyof `StricterOptions`\<`Options` & `object` & `LocalOptionsType`, `Options`\> ? `StricterOptions`\<`Options` & `object` & `LocalOptionsType`, `Options`\>\[`"ipcInput"`\] : `undefined`, `"gracefulCancel"` *extends* keyof `StricterOptions`\<`Options` & `object` & `LocalOptionsType`, `Options`\> ? `StricterOptions`\<`Options` & `object` & `LocalOptionsType`, `Options`\>\[`"gracefulCancel"`\] : `undefined`\>\>; `isCanceled`: `boolean`; `isForcefullyTerminated`: `boolean`; `isGracefullyCanceled`: `boolean`; `isMaxBuffer`: `boolean`; `isTerminated`: `boolean`; `message`: `undefined` \| `string` & `Options` & `object` & `LocalOptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `name`: `undefined` \| `string` & `Options` & `object` & `LocalOptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `originalMessage`: `undefined` \| `string` & `Options` & `object` & `LocalOptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `pipedFrom`: `Result`\<`Options`\>[]; `shortMessage`: `undefined` \| `string` & `Options` & `object` & `LocalOptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `signal`: `Signals`; `signalDescription`: `string`; `stack`: `undefined` \| `string` & `Options` & `object` & `LocalOptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `stderr`: `string`[]; `stdio`: `MapResultStdio`\<`StdioOptionNormalized`\<`Options` & `object` & `LocalOptionsType`\[`"stdio"`\]\>\>; `stdout`: `string`[]; `timedOut`: `boolean`; \}\>\<`LocalOptionsType`\>(`args`, `options`) => `Promise`\<`Result`\<`Options` & `object` & `LocalOptionsType`\>\>\<`LocalOptionsType`\>(`args`?, `options`?) => `Promise`\<\{ \[KeyType in string \| number \| symbol\]: (FactoryOptionsType extends Options & \{ coerceOutputToString?: boolean; useIntermediate?: (intermediateResult: RunIntermediateReturnType) =\> Promisable\<void\> \} & \{ lines: true \} ? \{ all: ResultAllProperty\<(Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & FactoryOptionsType\<FactoryOptionsType\> & LocalOptionsType)\["all"\]\>; cause: (Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & FactoryOptionsType\<FactoryOptionsType\> & LocalOptionsType)\["reject"\] extends false ? unknown : never; code: (undefined \| string) & ((Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & FactoryOptionsType\<(...)\> & LocalOptionsType)\["reject"\] extends false ? unknown : never); command: string; cwd: string; durationMs: number; escapedCommand: string; exitCode?: number; failed: boolean; ipcOutput: ResultIpcAsync\<FdSpecificOption\<(Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & FactoryOptionsType\<(...)\> & LocalOptionsType)\["buffer"\], "ipc"\>, HasIpcOption\<StricterOptions\<(...) & (...) & (...) & (...), Options\>\["ipc"\], "ipcInput" extends keyof StricterOptions\<(...), (...)\> ? StricterOptions\<(...), (...)\>\["ipcInput"\] : undefined, "gracefulCancel" extends keyof StricterOptions\<(...), (...)\> ? StricterOptions\<(...), (...)\>\["gracefulCancel"\] : undefined\>\>; isCanceled: boolean; isForcefullyTerminated: boolean; isGracefullyCanceled: boolean; isMaxBuffer: boolean; isTerminated: boolean; message: (undefined \| string) & ((Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & FactoryOptionsType\<(...)\> & LocalOptionsType)\["reject"\] extends false ? unknown : never); name: (undefined \| string) & ((Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & FactoryOptionsType\<(...)\> & LocalOptionsType)\["reject"\] extends false ? unknown : never); originalMessage: (undefined \| string) & ((Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & FactoryOptionsType\<(...)\> & LocalOptionsType)\["reject"\] extends false ? unknown : never); pipedFrom: Result\<Options\>\[\]; shortMessage: (undefined \| string) & ((Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & FactoryOptionsType\<(...)\> & LocalOptionsType)\["reject"\] extends false ? unknown : never); signal?: Signals; signalDescription?: string; stack: (undefined \| string) & ((Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & FactoryOptionsType\<(...)\> & LocalOptionsType)\["reject"\] extends false ? unknown : never); stderr: string\[\]; stdio: MapResultStdio\<StdioOptionNormalized\<(Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & FactoryOptionsType\<(...)\> & LocalOptionsType)\["stdio"\]\>\>; stdout: string\[\]; timedOut: boolean \} : FactoryOptionsType extends Options & \{ coerceOutputToString?: boolean; useIntermediate?: (intermediateResult: RunIntermediateReturnType) =\> Promisable\<(...)\> \} & \{ coerceOutputToString: false \} ? Result\<Options & \{ coerceOutputToString?: boolean; useIntermediate?: (intermediateResult: ...) =\> ... \} & FactoryOptionsType\<FactoryOptionsType\> & LocalOptionsType\> : \{ all: ResultAllProperty\<(Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & FactoryOptionsType & LocalOptionsType)\["all"\]\>; cause: (Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & FactoryOptionsType & LocalOptionsType)\["reject"\] extends false ? unknown : never; code: (undefined \| string) & (((...) & (...) & (...) & (...))\["reject"\] extends false ? unknown : never); command: string; cwd: string; durationMs: number; escapedCommand: string; exitCode?: number; failed: boolean; ipcOutput: ResultIpcAsync\<FdSpecificOption\<((...) & (...) & (...) & (...))\["buffer"\], "ipc"\>, HasIpcOption\<StricterOptions\<(...), (...)\>\["ipc"\], "ipcInput" extends keyof (...) ? (...)\[(...)\] : undefined, "gracefulCancel" extends keyof (...) ? (...)\[(...)\] : undefined\>\>; isCanceled: boolean; isForcefullyTerminated: boolean; isGracefullyCanceled: boolean; isMaxBuffer: boolean; isTerminated: boolean; message: (undefined \| string) & (((...) & (...) & (...) & (...))\["reject"\] extends false ? unknown : never); name: (undefined \| string) & (((...) & (...) & (...) & (...))\["reject"\] extends false ? unknown : never); originalMessage: (undefined \| string) & (((...) & (...) & (...) & (...))\["reject"\] extends false ? unknown : never); pipedFrom: Result\<Options\>\[\]; shortMessage: (undefined \| string) & (((...) & (...) & (...) & (...))\["reject"\] extends false ? unknown : never); signal?: Signals; signalDescription?: string; stack: (undefined \| string) & (((...) & (...) & (...) & (...))\["reject"\] extends false ? unknown : never); stderr: string; stdio: MapResultStdio\<StdioOptionNormalized\<((...) & (...) & (...) & (...))\["stdio"\]\>\>; stdout: string; timedOut: boolean \})\[KeyType\] \}\>

Defined in: [packages/run/src/index.ts:204](https://github.com/Xunnamius/exec-utils/blob/0eed4afa7b460d45a119056087c61813546141ce/packages/run/src/index.ts#L204)

Returns a function that, when called, runs (executes) `file` with the given
`args` with respect to the given `options`. These parameters can be
overridden during individual invocations.

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
`reject: false` to override this, or use [runNoRejectOnBadExit](runNoRejectOnBadExit.md).

### Type Parameters

• **LocalOptionsType** *extends* `Options` & `object` & `object`

### Parameters

#### args

`string`[]

#### options

`LocalOptionsType`

### Returns

`Promise`\<\{ `all`: `ResultAllProperty`\<`Options` & `object` & `LocalOptionsType`\[`"all"`\]\>; `cause`: `Options` & `object` & `LocalOptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `code`: `undefined` \| `string` & `Options` & `object` & `LocalOptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `command`: `string`; `cwd`: `string`; `durationMs`: `number`; `escapedCommand`: `string`; `exitCode`: `number`; `failed`: `boolean`; `ipcOutput`: `ResultIpcAsync`\<`FdSpecificOption`\<`Options` & `object` & `LocalOptionsType`\[`"buffer"`\], `"ipc"`\>, `HasIpcOption`\<`StricterOptions`\<`Options` & `object` & `LocalOptionsType`, `Options`\>\[`"ipc"`\], `"ipcInput"` *extends* keyof `StricterOptions`\<`Options` & `object` & `LocalOptionsType`, `Options`\> ? `StricterOptions`\<`Options` & `object` & `LocalOptionsType`, `Options`\>\[`"ipcInput"`\] : `undefined`, `"gracefulCancel"` *extends* keyof `StricterOptions`\<`Options` & `object` & `LocalOptionsType`, `Options`\> ? `StricterOptions`\<`Options` & `object` & `LocalOptionsType`, `Options`\>\[`"gracefulCancel"`\] : `undefined`\>\>; `isCanceled`: `boolean`; `isForcefullyTerminated`: `boolean`; `isGracefullyCanceled`: `boolean`; `isMaxBuffer`: `boolean`; `isTerminated`: `boolean`; `message`: `undefined` \| `string` & `Options` & `object` & `LocalOptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `name`: `undefined` \| `string` & `Options` & `object` & `LocalOptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `originalMessage`: `undefined` \| `string` & `Options` & `object` & `LocalOptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `pipedFrom`: `Result`\<`Options`\>[]; `shortMessage`: `undefined` \| `string` & `Options` & `object` & `LocalOptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `signal`: `Signals`; `signalDescription`: `string`; `stack`: `undefined` \| `string` & `Options` & `object` & `LocalOptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `stderr`: `string`[]; `stdio`: `MapResultStdio`\<`StdioOptionNormalized`\<`Options` & `object` & `LocalOptionsType`\[`"stdio"`\]\>\>; `stdout`: `string`[]; `timedOut`: `boolean`; \}\>

Runs (executes) `file` with the given `args` with respect to the given
`options`.

Note that, by default, this function rejects on a non-zero exit code. Set
`reject: false` to override this, or use [runNoRejectOnBadExit](runNoRejectOnBadExit.md).

### Type Parameters

• **LocalOptionsType** *extends* `Options` & `object` & `object`

### Parameters

#### args

`string`[]

#### options

`LocalOptionsType`

### Returns

`Promise`\<`Result`\<`Options` & `object` & `LocalOptionsType`\>\>

Runs (executes) `file` with the given `args` with respect to the given
`options`.

With this call signature, `stdout` and `stderr` will be coerced to type
`string`.

Note that, by default, this function rejects on a non-zero exit code. Set
`reject: false` to override this, or use [runNoRejectOnBadExit](runNoRejectOnBadExit.md).

### Type Parameters

• **LocalOptionsType** *extends* [`RunOptions`](../type-aliases/RunOptions.md)

### Parameters

#### args?

`string`[]

#### options?

`LocalOptionsType`

### Returns

`Promise`\<\{ \[KeyType in string \| number \| symbol\]: (FactoryOptionsType extends Options & \{ coerceOutputToString?: boolean; useIntermediate?: (intermediateResult: RunIntermediateReturnType) =\> Promisable\<void\> \} & \{ lines: true \} ? \{ all: ResultAllProperty\<(Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & FactoryOptionsType\<FactoryOptionsType\> & LocalOptionsType)\["all"\]\>; cause: (Options & \{ coerceOutputToString?: (...) \| (...) \| (...); useIntermediate?: (...) \| (...) \} & FactoryOptionsType\<FactoryOptionsType\> & LocalOptionsType)\["reject"\] extends false ? unknown : never; code: (undefined \| string) & ((Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & FactoryOptionsType\<(...)\> & LocalOptionsType)\["reject"\] extends false ? unknown : never); command: string; cwd: string; durationMs: number; escapedCommand: string; exitCode?: number; failed: boolean; ipcOutput: ResultIpcAsync\<FdSpecificOption\<(Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & FactoryOptionsType\<(...)\> & LocalOptionsType)\["buffer"\], "ipc"\>, HasIpcOption\<StricterOptions\<(...) & (...) & (...) & (...), Options\>\["ipc"\], "ipcInput" extends keyof StricterOptions\<(...), (...)\> ? StricterOptions\<(...), (...)\>\["ipcInput"\] : undefined, "gracefulCancel" extends keyof StricterOptions\<(...), (...)\> ? StricterOptions\<(...), (...)\>\["gracefulCancel"\] : undefined\>\>; isCanceled: boolean; isForcefullyTerminated: boolean; isGracefullyCanceled: boolean; isMaxBuffer: boolean; isTerminated: boolean; message: (undefined \| string) & ((Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & FactoryOptionsType\<(...)\> & LocalOptionsType)\["reject"\] extends false ? unknown : never); name: (undefined \| string) & ((Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & FactoryOptionsType\<(...)\> & LocalOptionsType)\["reject"\] extends false ? unknown : never); originalMessage: (undefined \| string) & ((Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & FactoryOptionsType\<(...)\> & LocalOptionsType)\["reject"\] extends false ? unknown : never); pipedFrom: Result\<Options\>\[\]; shortMessage: (undefined \| string) & ((Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & FactoryOptionsType\<(...)\> & LocalOptionsType)\["reject"\] extends false ? unknown : never); signal?: Signals; signalDescription?: string; stack: (undefined \| string) & ((Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & FactoryOptionsType\<(...)\> & LocalOptionsType)\["reject"\] extends false ? unknown : never); stderr: string\[\]; stdio: MapResultStdio\<StdioOptionNormalized\<(Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & FactoryOptionsType\<(...)\> & LocalOptionsType)\["stdio"\]\>\>; stdout: string\[\]; timedOut: boolean \} : FactoryOptionsType extends Options & \{ coerceOutputToString?: boolean; useIntermediate?: (intermediateResult: RunIntermediateReturnType) =\> Promisable\<(...)\> \} & \{ coerceOutputToString: false \} ? Result\<Options & \{ coerceOutputToString?: boolean; useIntermediate?: (intermediateResult: ...) =\> ... \} & FactoryOptionsType\<FactoryOptionsType\> & LocalOptionsType\> : \{ all: ResultAllProperty\<(Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & FactoryOptionsType & LocalOptionsType)\["all"\]\>; cause: (Options & \{ coerceOutputToString?: ...; useIntermediate?: ... \} & FactoryOptionsType & LocalOptionsType)\["reject"\] extends false ? unknown : never; code: (undefined \| string) & (((...) & (...) & (...) & (...))\["reject"\] extends false ? unknown : never); command: string; cwd: string; durationMs: number; escapedCommand: string; exitCode?: number; failed: boolean; ipcOutput: ResultIpcAsync\<FdSpecificOption\<((...) & (...) & (...) & (...))\["buffer"\], "ipc"\>, HasIpcOption\<StricterOptions\<(...), (...)\>\["ipc"\], "ipcInput" extends keyof (...) ? (...)\[(...)\] : undefined, "gracefulCancel" extends keyof (...) ? (...)\[(...)\] : undefined\>\>; isCanceled: boolean; isForcefullyTerminated: boolean; isGracefullyCanceled: boolean; isMaxBuffer: boolean; isTerminated: boolean; message: (undefined \| string) & (((...) & (...) & (...) & (...))\["reject"\] extends false ? unknown : never); name: (undefined \| string) & (((...) & (...) & (...) & (...))\["reject"\] extends false ? unknown : never); originalMessage: (undefined \| string) & (((...) & (...) & (...) & (...))\["reject"\] extends false ? unknown : never); pipedFrom: Result\<Options\>\[\]; shortMessage: (undefined \| string) & (((...) & (...) & (...) & (...))\["reject"\] extends false ? unknown : never); signal?: Signals; signalDescription?: string; stack: (undefined \| string) & (((...) & (...) & (...) & (...))\["reject"\] extends false ? unknown : never); stderr: string; stdio: MapResultStdio\<StdioOptionNormalized\<((...) & (...) & (...) & (...))\["stdio"\]\>\>; stdout: string; timedOut: boolean \})\[KeyType\] \}\>
