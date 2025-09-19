[**@-xun/run**](../../README.md)

***

[@-xun/run](../../README.md) / [types](../README.md) / RunOptions

# Type Alias: RunOptions

> **RunOptions** = `ExecaOptions` & `object`

Defined in: [src/types.ts:12](https://github.com/Xunnamius/exec-utils/blob/3bb00a84b928ff5f4b317e16762258ce31d78968/packages/run/src/types.ts#L12)

## Type Declaration

### coerceOutputToString?

> `optional` **coerceOutputToString**: `boolean`

If `true`, RunReturnType.stdout and RunReturnType.stderr
will be coerced to string values. If they are `undefined`, they will be
coerced to empty strings.

Defaults to `true` unless RunOptions.lines is `true`, in which case
output will be coerced to an array of strings regardless of this option.

### elideNodeDebuggerStringsFromStderr?

> `optional` **elideNodeDebuggerStringsFromStderr**: `boolean`

When attaching a debugger to a Node.js process, such as when using the
`--inspect*` flags, Node will add it's own "debugger attached" lines to
stderr. Set `elideNodeDebuggerStringsFromStderr` to `true` to remove them
automatically, or `false` to do nothing.

#### Default

```ts
true
```

#### See

https://github.com/nodejs/node/issues/34799

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
