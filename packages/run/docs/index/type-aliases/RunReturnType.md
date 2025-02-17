[**@-xun/run**](../../README.md)

***

[@-xun/run](../../README.md) / [index](../README.md) / RunReturnType

# Type Alias: RunReturnType\<OptionsType, CoerceOutputTo\>

> **RunReturnType**\<`OptionsType`, `CoerceOutputTo`\>: `CoerceOutputTo` *extends* `"string"` ? `Merge`\<`ExecaResult`\<`OptionsType`\>, `object` & `OptionsType`\[`"all"`\] *extends* `true` ? `object` : `object`\> : `CoerceOutputTo` *extends* `"array"` ? `Merge`\<`ExecaResult`\<`OptionsType`\>, `object` & `OptionsType`\[`"all"`\] *extends* `true` ? `object` : `object`\> : `Merge`\<`ExecaResult`\<`OptionsType`\>, `OptionsType`\[`"all"`\] *extends* `true` ? `Pick`\<`ExecaResult`\<`OptionsType`\>, `"all"`\> : `object`\>

Defined in: [packages/run/src/index.ts:35](https://github.com/Xunnamius/exec-utils/blob/24e04f73027fc1c0874e587fe74999c2394ba6f8/packages/run/src/index.ts#L35)

## Type Parameters

• **OptionsType** *extends* [`RunOptions`](RunOptions.md) = [`RunOptions`](RunOptions.md)

• **CoerceOutputTo** *extends* `"string"` \| `"array"` \| `"n/a"` = `"string"`
