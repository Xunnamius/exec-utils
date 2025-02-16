[**@-xun/run**](../../README.md)

***

[@-xun/run](../../README.md) / [index](../README.md) / RunReturnType

# Type Alias: RunReturnType\<OptionsType, CoerceOutputTo\>

> **RunReturnType**\<`OptionsType`, `CoerceOutputTo`\>: `CoerceOutputTo` *extends* `"string"` ? `Merge`\<`ExecaResult`\<`OptionsType`\>, \{ `stderr`: `string`; `stdout`: `string`; \}\> : `CoerceOutputTo` *extends* `"array"` ? `Merge`\<`ExecaResult`\<`OptionsType`\>, \{ `stderr`: `string`[]; `stdout`: `string`[]; \}\> : `ExecaResult`\<`OptionsType`\>

Defined in: [packages/run/src/index.ts:35](https://github.com/Xunnamius/exec-utils/blob/1d301924c61bd522d2363c0dc0b2b266cbb947bc/packages/run/src/index.ts#L35)

## Type Parameters

• **OptionsType** *extends* [`RunOptions`](RunOptions.md) = [`RunOptions`](RunOptions.md)

• **CoerceOutputTo** *extends* `"string"` \| `"array"` \| `"n/a"` = `"string"`
