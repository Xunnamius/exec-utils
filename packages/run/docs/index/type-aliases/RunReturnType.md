[**@-xun/run**](../../README.md)

***

[@-xun/run](../../README.md) / [index](../README.md) / RunReturnType

# Type Alias: RunReturnType\<OptionsType, CoerceOutputTo\>

> **RunReturnType**\<`OptionsType`, `CoerceOutputTo`\>: `CoerceOutputTo` *extends* `"string"` ? `Merge`\<`ExecaResult`\<`OptionsType`\>, \{ `stderr`: `string`; `stdout`: `string`; \}\> : `CoerceOutputTo` *extends* `"array"` ? `Merge`\<`ExecaResult`\<`OptionsType`\>, \{ `stderr`: `string`[]; `stdout`: `string`[]; \}\> : `ExecaResult`\<`OptionsType`\>

Defined in: [packages/run/src/index.ts:35](https://github.com/Xunnamius/exec-utils/blob/0eed4afa7b460d45a119056087c61813546141ce/packages/run/src/index.ts#L35)

## Type Parameters

• **OptionsType** *extends* [`RunOptions`](RunOptions.md) = [`RunOptions`](RunOptions.md)

• **CoerceOutputTo** *extends* `"string"` \| `"array"` \| `"n/a"` = `"string"`
