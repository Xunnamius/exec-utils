[**@-xun/run**](../../README.md)

***

[@-xun/run](../../README.md) / [index](../README.md) / runWithInheritedIo

# Function: runWithInheritedIo()

> **runWithInheritedIo**(`file`, `args`?, `options`?): `Promise`\<`Omit`\<\{ `all`: `undefined` \| `string` \| `string`[] \| `unknown`[] \| `Uint8Array`\<`ArrayBufferLike`\>; `cause`: `unknown`; `code`: `undefined` \| `string`; `command`: `string`; `cwd`: `string`; `durationMs`: `number`; `escapedCommand`: `string`; `exitCode`: `number`; `failed`: `boolean`; `ipcOutput`: \[\] \| (`null` \| `string` \| `number` \| `boolean` \| `object` \| readonly `JsonMessage`[] \| \{\})[]; `isCanceled`: `boolean`; `isForcefullyTerminated`: `boolean`; `isGracefullyCanceled`: `boolean`; `isMaxBuffer`: `boolean`; `isTerminated`: `boolean`; `message`: `undefined` \| `string`; `name`: `undefined` \| `string`; `originalMessage`: `undefined` \| `string`; `pipedFrom`: `Result`\<`Options`\>[]; `shortMessage`: `undefined` \| `string`; `signal`: `Signals`; `signalDescription`: `string`; `stack`: `undefined` \| `string`; `stderr`: `string`; `stdio`: `MapResultStdio`\<readonly \[`StdinOptionCommon`\<`false`, `false`\>, `StdoutStderrOptionCommon`\<`false`, `false`\>, `StdoutStderrOptionCommon`\<`false`, `false`\>, `StdioExtraOptionCommon`\<`false`\>\] \| readonly \[`"pipe"`, `"pipe"`, `"pipe"`\] \| readonly \[`undefined`, `undefined`, `undefined`\] \| readonly \[`"inherit"`, `"inherit"`, `"inherit"`\] \| readonly \[`"ignore"`, `"ignore"`, `"ignore"`\] \| readonly \[`"overlapped"`, `"overlapped"`, `"overlapped"`\]\>; `stdout`: `string`; `timedOut`: `boolean`; \}, `"stdout"` \| `"stderr"` \| `"all"` \| `"stdio"`\>\>

Defined in: [packages/run/src/index.ts:127](https://github.com/Xunnamius/exec-utils/blob/1d301924c61bd522d2363c0dc0b2b266cbb947bc/packages/run/src/index.ts#L127)

Runs (executes) `file` with the given `args` with respect to the given
`options` (merged with `{ stdout: 'inherit', stderr: 'inherit' }`).

Note that, by default, this function rejects on a non-zero exit code.
Set `reject: false` to override this, or use [runNoRejectOnBadExit](runNoRejectOnBadExit.md).

## Parameters

### file

`string`

### args?

`string`[]

### options?

`Omit`\<[`RunOptions`](../type-aliases/RunOptions.md), `"stdout"` \| `"stderr"` \| `"all"` \| `"stdio"` \| `"lines"`\>

## Returns

`Promise`\<`Omit`\<\{ `all`: `undefined` \| `string` \| `string`[] \| `unknown`[] \| `Uint8Array`\<`ArrayBufferLike`\>; `cause`: `unknown`; `code`: `undefined` \| `string`; `command`: `string`; `cwd`: `string`; `durationMs`: `number`; `escapedCommand`: `string`; `exitCode`: `number`; `failed`: `boolean`; `ipcOutput`: \[\] \| (`null` \| `string` \| `number` \| `boolean` \| `object` \| readonly `JsonMessage`[] \| \{\})[]; `isCanceled`: `boolean`; `isForcefullyTerminated`: `boolean`; `isGracefullyCanceled`: `boolean`; `isMaxBuffer`: `boolean`; `isTerminated`: `boolean`; `message`: `undefined` \| `string`; `name`: `undefined` \| `string`; `originalMessage`: `undefined` \| `string`; `pipedFrom`: `Result`\<`Options`\>[]; `shortMessage`: `undefined` \| `string`; `signal`: `Signals`; `signalDescription`: `string`; `stack`: `undefined` \| `string`; `stderr`: `string`; `stdio`: `MapResultStdio`\<readonly \[`StdinOptionCommon`\<`false`, `false`\>, `StdoutStderrOptionCommon`\<`false`, `false`\>, `StdoutStderrOptionCommon`\<`false`, `false`\>, `StdioExtraOptionCommon`\<`false`\>\] \| readonly \[`"pipe"`, `"pipe"`, `"pipe"`\] \| readonly \[`undefined`, `undefined`, `undefined`\] \| readonly \[`"inherit"`, `"inherit"`, `"inherit"`\] \| readonly \[`"ignore"`, `"ignore"`, `"ignore"`\] \| readonly \[`"overlapped"`, `"overlapped"`, `"overlapped"`\]\>; `stdout`: `string`; `timedOut`: `boolean`; \}, `"stdout"` \| `"stderr"` \| `"all"` \| `"stdio"`\>\>

## See

[run](run.md)
