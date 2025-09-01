[**@-xun/run**](../../README.md)

***

[@-xun/run](../../README.md) / [types](../README.md) / RunReturnType

# Type Alias: RunReturnType\<OptionsType\>

> **RunReturnType**\<`OptionsType`\> = `Simplify`\<\[`Merge`\<[`DefaultRunOptions`](DefaultRunOptions.md), `OptionsType`\>\] *extends* \[infer ReifiedOptionsType\] ? `ReifiedOptionsType` *extends* `object` ? `Merge`\<`ExecaResult`\<`ReifiedOptionsType`\>, `object` & `ReifiedOptionsType`\[`"all"`\] *extends* `true` ? `object` : `unknown`\> : `ReifiedOptionsType` *extends* `object` ? `Merge`\<`ExecaResult`\<`ReifiedOptionsType`\>, `object` & `ReifiedOptionsType`\[`"all"`\] *extends* `true` ? `object` : `unknown`\> : `ExecaResult`\<`ReifiedOptionsType`\> : `never`\>

Defined in: [packages/run/src/types.ts:58](https://github.com/Xunnamius/exec-utils/blob/e4fc4234f5ee2e08c53563e96d123577dfd5f204/packages/run/src/types.ts#L58)

## Type Parameters

### OptionsType

`OptionsType` *extends* [`RunOptions`](RunOptions.md) = [`DefaultRunOptions`](DefaultRunOptions.md)

## See

ExecaResult
