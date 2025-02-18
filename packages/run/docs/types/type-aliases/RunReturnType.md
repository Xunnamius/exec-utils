[**@-xun/run**](../../README.md)

***

[@-xun/run](../../README.md) / [types](../README.md) / RunReturnType

# Type Alias: RunReturnType\<OptionsType\>

> **RunReturnType**\<`OptionsType`\>: `Simplify`\<\[`Merge`\<[`DefaultRunOptions`](DefaultRunOptions.md), `OptionsType`\>\] *extends* \[infer ReifiedOptionsType\] ? `ReifiedOptionsType` *extends* `object` ? `Merge`\<`ExecaResult`\<`ReifiedOptionsType`\>, `object` & `ReifiedOptionsType`\[`"all"`\] *extends* `true` ? `object` : `unknown`\> : `ReifiedOptionsType` *extends* `object` ? `Merge`\<`ExecaResult`\<`ReifiedOptionsType`\>, `object` & `ReifiedOptionsType`\[`"all"`\] *extends* `true` ? `object` : `unknown`\> : `ExecaResult`\<`ReifiedOptionsType`\> : `never`\>

Defined in: [packages/run/src/types.ts:47](https://github.com/Xunnamius/exec-utils/blob/06735914ae278783fb4ee6a4cc1a3732191459ee/packages/run/src/types.ts#L47)

## Type Parameters

• **OptionsType** *extends* [`RunOptions`](RunOptions.md) = [`DefaultRunOptions`](DefaultRunOptions.md)

## See

ExecaResult
