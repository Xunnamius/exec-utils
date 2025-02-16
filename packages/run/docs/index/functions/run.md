[**@-xun/run**](../../README.md)

***

[@-xun/run](../../README.md) / [index](../README.md) / run

# Function: run()

## Call Signature

> **run**\<`OptionsType`\>(`file`, `args`, `options`): `Promise`\<\{ `all`: `ResultAllProperty`\<`Options` & `object` & `OptionsType`\[`"all"`\]\>; `cause`: `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `code`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `command`: `string`; `cwd`: `string`; `durationMs`: `number`; `escapedCommand`: `string`; `exitCode`: `number`; `failed`: `boolean`; `ipcOutput`: `ResultIpcAsync`\<`FdSpecificOption`\<`Options` & `object` & `OptionsType`\[`"buffer"`\], `"ipc"`\>, `HasIpcOption`\<`StricterOptions`\<`Options` & `object` & `OptionsType`, `Options`\>\[`"ipc"`\], `"ipcInput"` *extends* keyof `StricterOptions`\<`Options` & `object` & `OptionsType`, `Options`\> ? `StricterOptions`\<`Options` & `object` & `OptionsType`, `Options`\>\[`"ipcInput"`\] : `undefined`, `"gracefulCancel"` *extends* keyof `StricterOptions`\<`Options` & `object` & `OptionsType`, `Options`\> ? `StricterOptions`\<`Options` & `object` & `OptionsType`, `Options`\>\[`"gracefulCancel"`\] : `undefined`\>\>; `isCanceled`: `boolean`; `isForcefullyTerminated`: `boolean`; `isGracefullyCanceled`: `boolean`; `isMaxBuffer`: `boolean`; `isTerminated`: `boolean`; `message`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `name`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `originalMessage`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `pipedFrom`: `Result`\<`Options`\>[]; `shortMessage`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `signal`: `Signals`; `signalDescription`: `string`; `stack`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `stderr`: `string`[]; `stdio`: `MapResultStdio`\<`StdioOptionNormalized`\<`Options` & `object` & `OptionsType`\[`"stdio"`\]\>\>; `stdout`: `string`[]; `timedOut`: `boolean`; \}\>

Defined in: [packages/run/src/index.ts:56](https://github.com/Xunnamius/exec-utils/blob/0eed4afa7b460d45a119056087c61813546141ce/packages/run/src/index.ts#L56)

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

`Promise`\<\{ `all`: `ResultAllProperty`\<`Options` & `object` & `OptionsType`\[`"all"`\]\>; `cause`: `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `code`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `command`: `string`; `cwd`: `string`; `durationMs`: `number`; `escapedCommand`: `string`; `exitCode`: `number`; `failed`: `boolean`; `ipcOutput`: `ResultIpcAsync`\<`FdSpecificOption`\<`Options` & `object` & `OptionsType`\[`"buffer"`\], `"ipc"`\>, `HasIpcOption`\<`StricterOptions`\<`Options` & `object` & `OptionsType`, `Options`\>\[`"ipc"`\], `"ipcInput"` *extends* keyof `StricterOptions`\<`Options` & `object` & `OptionsType`, `Options`\> ? `StricterOptions`\<`Options` & `object` & `OptionsType`, `Options`\>\[`"ipcInput"`\] : `undefined`, `"gracefulCancel"` *extends* keyof `StricterOptions`\<`Options` & `object` & `OptionsType`, `Options`\> ? `StricterOptions`\<`Options` & `object` & `OptionsType`, `Options`\>\[`"gracefulCancel"`\] : `undefined`\>\>; `isCanceled`: `boolean`; `isForcefullyTerminated`: `boolean`; `isGracefullyCanceled`: `boolean`; `isMaxBuffer`: `boolean`; `isTerminated`: `boolean`; `message`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `name`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `originalMessage`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `pipedFrom`: `Result`\<`Options`\>[]; `shortMessage`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `signal`: `Signals`; `signalDescription`: `string`; `stack`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `stderr`: `string`[]; `stdio`: `MapResultStdio`\<`StdioOptionNormalized`\<`Options` & `object` & `OptionsType`\[`"stdio"`\]\>\>; `stdout`: `string`[]; `timedOut`: `boolean`; \}\>

## Call Signature

> **run**\<`OptionsType`\>(`file`, `args`, `options`): `Promise`\<`Result`\<`Options` & `object` & `OptionsType`\>\>

Defined in: [packages/run/src/index.ts:68](https://github.com/Xunnamius/exec-utils/blob/0eed4afa7b460d45a119056087c61813546141ce/packages/run/src/index.ts#L68)

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

`Promise`\<`Result`\<`Options` & `object` & `OptionsType`\>\>

## Call Signature

> **run**\<`OptionsType`\>(`file`, `args`?, `options`?): `Promise`\<\{ `all`: `ResultAllProperty`\<`Options` & `object` & `OptionsType`\[`"all"`\]\>; `cause`: `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `code`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `command`: `string`; `cwd`: `string`; `durationMs`: `number`; `escapedCommand`: `string`; `exitCode`: `number`; `failed`: `boolean`; `ipcOutput`: `ResultIpcAsync`\<`FdSpecificOption`\<`Options` & `object` & `OptionsType`\[`"buffer"`\], `"ipc"`\>, `HasIpcOption`\<`StricterOptions`\<`Options` & `object` & `OptionsType`, `Options`\>\[`"ipc"`\], `"ipcInput"` *extends* keyof `StricterOptions`\<`Options` & `object` & `OptionsType`, `Options`\> ? `StricterOptions`\<`Options` & `object` & `OptionsType`, `Options`\>\[`"ipcInput"`\] : `undefined`, `"gracefulCancel"` *extends* keyof `StricterOptions`\<`Options` & `object` & `OptionsType`, `Options`\> ? `StricterOptions`\<`Options` & `object` & `OptionsType`, `Options`\>\[`"gracefulCancel"`\] : `undefined`\>\>; `isCanceled`: `boolean`; `isForcefullyTerminated`: `boolean`; `isGracefullyCanceled`: `boolean`; `isMaxBuffer`: `boolean`; `isTerminated`: `boolean`; `message`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `name`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `originalMessage`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `pipedFrom`: `Result`\<`Options`\>[]; `shortMessage`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `signal`: `Signals`; `signalDescription`: `string`; `stack`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `stderr`: `string`; `stdio`: `MapResultStdio`\<`StdioOptionNormalized`\<`Options` & `object` & `OptionsType`\[`"stdio"`\]\>\>; `stdout`: `string`; `timedOut`: `boolean`; \}\>

Defined in: [packages/run/src/index.ts:85](https://github.com/Xunnamius/exec-utils/blob/0eed4afa7b460d45a119056087c61813546141ce/packages/run/src/index.ts#L85)

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

`Promise`\<\{ `all`: `ResultAllProperty`\<`Options` & `object` & `OptionsType`\[`"all"`\]\>; `cause`: `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `code`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `command`: `string`; `cwd`: `string`; `durationMs`: `number`; `escapedCommand`: `string`; `exitCode`: `number`; `failed`: `boolean`; `ipcOutput`: `ResultIpcAsync`\<`FdSpecificOption`\<`Options` & `object` & `OptionsType`\[`"buffer"`\], `"ipc"`\>, `HasIpcOption`\<`StricterOptions`\<`Options` & `object` & `OptionsType`, `Options`\>\[`"ipc"`\], `"ipcInput"` *extends* keyof `StricterOptions`\<`Options` & `object` & `OptionsType`, `Options`\> ? `StricterOptions`\<`Options` & `object` & `OptionsType`, `Options`\>\[`"ipcInput"`\] : `undefined`, `"gracefulCancel"` *extends* keyof `StricterOptions`\<`Options` & `object` & `OptionsType`, `Options`\> ? `StricterOptions`\<`Options` & `object` & `OptionsType`, `Options`\>\[`"gracefulCancel"`\] : `undefined`\>\>; `isCanceled`: `boolean`; `isForcefullyTerminated`: `boolean`; `isGracefullyCanceled`: `boolean`; `isMaxBuffer`: `boolean`; `isTerminated`: `boolean`; `message`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `name`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `originalMessage`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `pipedFrom`: `Result`\<`Options`\>[]; `shortMessage`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `signal`: `Signals`; `signalDescription`: `string`; `stack`: `undefined` \| `string` & `Options` & `object` & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `stderr`: `string`; `stdio`: `MapResultStdio`\<`StdioOptionNormalized`\<`Options` & `object` & `OptionsType`\[`"stdio"`\]\>\>; `stdout`: `string`; `timedOut`: `boolean`; \}\>
