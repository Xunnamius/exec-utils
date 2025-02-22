[**@-xun/run**](../../README.md)

***

[@-xun/run](../../README.md) / [types](../README.md) / RunReturnType

# Type Alias: RunReturnType\<OptionsType\>

> **RunReturnType**\<`OptionsType`\>: `Simplify`\<\[`Merge`\<[`DefaultRunOptions`](DefaultRunOptions.md), `OptionsType`\>\] *extends* \[infer ReifiedOptionsType\] ? `ReifiedOptionsType` *extends* `object` ? `Merge`\<`ExecaResult`\<`ReifiedOptionsType`\>, `object` & `ReifiedOptionsType`\[`"all"`\] *extends* `true` ? `object` : `unknown`\> : `ReifiedOptionsType` *extends* `object` ? `Merge`\<`ExecaResult`\<`ReifiedOptionsType`\>, `object` & `ReifiedOptionsType`\[`"all"`\] *extends* `true` ? `object` : `unknown`\> : `ExecaResult`\<`ReifiedOptionsType`\> : `never`\>

Defined in: [packages/run/src/types.ts:47](https://github.com/Xunnamius/exec-utils/blob/bf5e65a2582e7e8aeaba89dc9f922437cbff4809/packages/run/src/types.ts#L47)

## Type Parameters

• **OptionsType** *extends* [`RunOptions`](RunOptions.md) = [`DefaultRunOptions`](DefaultRunOptions.md)

## See

ExecaResult
