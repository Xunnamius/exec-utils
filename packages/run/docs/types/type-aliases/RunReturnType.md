[**@-xun/run**](../../README.md)

***

[@-xun/run](../../README.md) / [types](../README.md) / RunReturnType

# Type Alias: RunReturnType\<OptionsType\>

> **RunReturnType**\<`OptionsType`\> = `Simplify`\<\[`Merge`\<[`DefaultRunOptions`](DefaultRunOptions.md), `OptionsType`\>\] *extends* \[infer ReifiedOptionsType\] ? `ReifiedOptionsType` *extends* `object` ? `Merge`\<`ExecaResult`\<`ReifiedOptionsType`\>, `object` & `ReifiedOptionsType`\[`"all"`\] *extends* `true` ? `object` : `unknown`\> : `ReifiedOptionsType` *extends* `object` ? `Merge`\<`ExecaResult`\<`ReifiedOptionsType`\>, `object` & `ReifiedOptionsType`\[`"all"`\] *extends* `true` ? `object` : `unknown`\> : `ExecaResult`\<`ReifiedOptionsType`\> : `never`\>

Defined in: [src/types.ts:58](https://github.com/Xunnamius/exec-utils/blob/3bb00a84b928ff5f4b317e16762258ce31d78968/packages/run/src/types.ts#L58)

## Type Parameters

### OptionsType

`OptionsType` *extends* [`RunOptions`](RunOptions.md) = [`DefaultRunOptions`](DefaultRunOptions.md)

## See

ExecaResult
