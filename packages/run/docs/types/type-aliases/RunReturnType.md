[**@-xun/run**](../../README.md)

***

[@-xun/run](../../README.md) / [types](../README.md) / RunReturnType

# Type Alias: RunReturnType\<OptionsType\>

> **RunReturnType**\<`OptionsType`\>: `Simplify`\<\[`Merge`\<[`DefaultRunOptions`](DefaultRunOptions.md), `OptionsType`\>\] *extends* \[infer ReifiedOptionsType\] ? `ReifiedOptionsType` *extends* `object` ? `Merge`\<`ExecaResult`\<`ReifiedOptionsType`\>, `object` & `ReifiedOptionsType`\[`"all"`\] *extends* `true` ? `object` : `unknown`\> : `ReifiedOptionsType` *extends* `object` ? `Merge`\<`ExecaResult`\<`ReifiedOptionsType`\>, `object` & `ReifiedOptionsType`\[`"all"`\] *extends* `true` ? `object` : `unknown`\> : `ExecaResult`\<`ReifiedOptionsType`\> : `never`\>

Defined in: [packages/run/src/types.ts:58](https://github.com/Xunnamius/exec-utils/blob/49a686926412eee8a176a3c8893c62abf78eaebf/packages/run/src/types.ts#L58)

## Type Parameters

• **OptionsType** *extends* [`RunOptions`](RunOptions.md) = [`DefaultRunOptions`](DefaultRunOptions.md)

## See

ExecaResult
