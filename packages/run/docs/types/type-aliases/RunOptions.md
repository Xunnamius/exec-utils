[**@-xun/run**](../../README.md)

***

[@-xun/run](../../README.md) / [types](../README.md) / RunOptions

# Type Alias: RunOptions

> **RunOptions**: `ExecaOptions` & `object`

Defined in: [packages/run/src/types.ts:12](https://github.com/Xunnamius/exec-utils/blob/bf5e65a2582e7e8aeaba89dc9f922437cbff4809/packages/run/src/types.ts#L12)

## Type declaration

### coerceOutputToString?

> `optional` **coerceOutputToString**: `boolean`

If `true`, RunReturnType.stdout and RunReturnType.stderr
will be coerced to string values. If they are `undefined`, they will be
coerced to empty strings.

Defaults to `true` unless RunOptions.lines is `true`, in which case
output will be coerced to an array of strings regardless of this option.

### useIntermediate()?

> `optional` **useIntermediate**: (`intermediateResult`) => `Promisable`\<`void`\>

Access the [RunIntermediateReturnType](RunIntermediateReturnType.md) object, a thin wrapper around
execa's ExecaResultPromise, via this callback function.

#### Parameters

##### intermediateResult

[`RunIntermediateReturnType`](RunIntermediateReturnType.md)

#### Returns

`Promisable`\<`void`\>

## See

ExecaOptions
