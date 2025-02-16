[**@-xun/run**](../../README.md)

***

[@-xun/run](../../README.md) / [index](../README.md) / runNoRejectOnBadExit

# Function: runNoRejectOnBadExit()

## Call Signature

> **runNoRejectOnBadExit**\<`OptionsType`\>(`file`, `args`, `options`): `Promise`\<\{ `all`: `ResultAllProperty`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"all"`\]\>; `cause`: `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `code`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `command`: `string`; `cwd`: `string`; `durationMs`: `number`; `escapedCommand`: `string`; `exitCode`: `number`; `failed`: `boolean`; `ipcOutput`: `ResultIpcAsync`\<`FdSpecificOption`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"buffer"`\], `"ipc"`\>, `HasIpcOption`\<`StricterOptions`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`, `Options`\>\[`"ipc"`\], `"ipcInput"` *extends* keyof `StricterOptions`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`, `Options`\> ? `StricterOptions`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`, `Options`\>\[`"ipcInput"`\] : `undefined`, `"gracefulCancel"` *extends* keyof `StricterOptions`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`, `Options`\> ? `StricterOptions`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`, `Options`\>\[`"gracefulCancel"`\] : `undefined`\>\>; `isCanceled`: `boolean`; `isForcefullyTerminated`: `boolean`; `isGracefullyCanceled`: `boolean`; `isMaxBuffer`: `boolean`; `isTerminated`: `boolean`; `message`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `name`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `originalMessage`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `pipedFrom`: `Result`\<`Options`\>[]; `shortMessage`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `signal`: `Signals`; `signalDescription`: `string`; `stack`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `stderr`: `string`[]; `stdio`: `MapResultStdio`\<`StdioOptionNormalized`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"stdio"`\]\>\>; `stdout`: `string`[]; `timedOut`: `boolean`; \}\>

Defined in: [packages/run/src/index.ts:149](https://github.com/Xunnamius/exec-utils/blob/0eed4afa7b460d45a119056087c61813546141ce/packages/run/src/index.ts#L149)

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

`Promise`\<\{ `all`: `ResultAllProperty`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"all"`\]\>; `cause`: `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `code`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `command`: `string`; `cwd`: `string`; `durationMs`: `number`; `escapedCommand`: `string`; `exitCode`: `number`; `failed`: `boolean`; `ipcOutput`: `ResultIpcAsync`\<`FdSpecificOption`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"buffer"`\], `"ipc"`\>, `HasIpcOption`\<`StricterOptions`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`, `Options`\>\[`"ipc"`\], `"ipcInput"` *extends* keyof `StricterOptions`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`, `Options`\> ? `StricterOptions`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`, `Options`\>\[`"ipcInput"`\] : `undefined`, `"gracefulCancel"` *extends* keyof `StricterOptions`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`, `Options`\> ? `StricterOptions`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`, `Options`\>\[`"gracefulCancel"`\] : `undefined`\>\>; `isCanceled`: `boolean`; `isForcefullyTerminated`: `boolean`; `isGracefullyCanceled`: `boolean`; `isMaxBuffer`: `boolean`; `isTerminated`: `boolean`; `message`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `name`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `originalMessage`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `pipedFrom`: `Result`\<`Options`\>[]; `shortMessage`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `signal`: `Signals`; `signalDescription`: `string`; `stack`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `stderr`: `string`[]; `stdio`: `MapResultStdio`\<`StdioOptionNormalized`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"stdio"`\]\>\>; `stdout`: `string`[]; `timedOut`: `boolean`; \}\>

### See

[run](run.md)

## Call Signature

> **runNoRejectOnBadExit**\<`OptionsType`\>(`file`, `args`, `options`): `Promise`\<`Result`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\>\>

Defined in: [packages/run/src/index.ts:164](https://github.com/Xunnamius/exec-utils/blob/0eed4afa7b460d45a119056087c61813546141ce/packages/run/src/index.ts#L164)

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

`Promise`\<`Result`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\>\>

### See

[run](run.md)

## Call Signature

> **runNoRejectOnBadExit**\<`OptionsType`\>(`file`, `args`?, `options`?): `Promise`\<\{ `all`: `ResultAllProperty`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"all"`\]\>; `cause`: `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `code`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `command`: `string`; `cwd`: `string`; `durationMs`: `number`; `escapedCommand`: `string`; `exitCode`: `number`; `failed`: `boolean`; `ipcOutput`: `ResultIpcAsync`\<`FdSpecificOption`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"buffer"`\], `"ipc"`\>, `HasIpcOption`\<`StricterOptions`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`, `Options`\>\[`"ipc"`\], `"ipcInput"` *extends* keyof `StricterOptions`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`, `Options`\> ? `StricterOptions`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`, `Options`\>\[`"ipcInput"`\] : `undefined`, `"gracefulCancel"` *extends* keyof `StricterOptions`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`, `Options`\> ? `StricterOptions`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`, `Options`\>\[`"gracefulCancel"`\] : `undefined`\>\>; `isCanceled`: `boolean`; `isForcefullyTerminated`: `boolean`; `isGracefullyCanceled`: `boolean`; `isMaxBuffer`: `boolean`; `isTerminated`: `boolean`; `message`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `name`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `originalMessage`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `pipedFrom`: `Result`\<`Options`\>[]; `shortMessage`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `signal`: `Signals`; `signalDescription`: `string`; `stack`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `stderr`: `string`; `stdio`: `MapResultStdio`\<`StdioOptionNormalized`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"stdio"`\]\>\>; `stdout`: `string`; `timedOut`: `boolean`; \}\>

Defined in: [packages/run/src/index.ts:184](https://github.com/Xunnamius/exec-utils/blob/0eed4afa7b460d45a119056087c61813546141ce/packages/run/src/index.ts#L184)

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

`Promise`\<\{ `all`: `ResultAllProperty`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"all"`\]\>; `cause`: `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `code`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `command`: `string`; `cwd`: `string`; `durationMs`: `number`; `escapedCommand`: `string`; `exitCode`: `number`; `failed`: `boolean`; `ipcOutput`: `ResultIpcAsync`\<`FdSpecificOption`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"buffer"`\], `"ipc"`\>, `HasIpcOption`\<`StricterOptions`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`, `Options`\>\[`"ipc"`\], `"ipcInput"` *extends* keyof `StricterOptions`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`, `Options`\> ? `StricterOptions`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`, `Options`\>\[`"ipcInput"`\] : `undefined`, `"gracefulCancel"` *extends* keyof `StricterOptions`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`, `Options`\> ? `StricterOptions`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`, `Options`\>\[`"gracefulCancel"`\] : `undefined`\>\>; `isCanceled`: `boolean`; `isForcefullyTerminated`: `boolean`; `isGracefullyCanceled`: `boolean`; `isMaxBuffer`: `boolean`; `isTerminated`: `boolean`; `message`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `name`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `originalMessage`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `pipedFrom`: `Result`\<`Options`\>[]; `shortMessage`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `signal`: `Signals`; `signalDescription`: `string`; `stack`: `undefined` \| `string` & `Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"reject"`\] *extends* `false` ? `unknown` : `never`; `stderr`: `string`; `stdio`: `MapResultStdio`\<`StdioOptionNormalized`\<`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"reject"`\> & `OptionsType`\[`"stdio"`\]\>\>; `stdout`: `string`; `timedOut`: `boolean`; \}\>

### See

[run](run.md)
