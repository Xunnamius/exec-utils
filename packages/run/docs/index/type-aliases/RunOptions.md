[**@-xun/run**](../../README.md)

***

[@-xun/run](../../README.md) / [index](../README.md) / RunOptions

# Type Alias: RunOptions

> **RunOptions**: `ExecaOptions` & `object`

Defined in: [packages/run/src/index.ts:18](https://github.com/Xunnamius/exec-utils/blob/24e04f73027fc1c0874e587fe74999c2394ba6f8/packages/run/src/index.ts#L18)

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
