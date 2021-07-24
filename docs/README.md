@sniptt/guards

# @sniptt/guards

## Table of contents

### Functions

- [isArray](README.md#isarray)
- [isBigInt](README.md#isbigint)
- [isBoolean](README.md#isboolean)
- [isDate](README.md#isdate)
- [isFunction](README.md#isfunction)
- [isInteger](README.md#isinteger)
- [isMap](README.md#ismap)
- [isNegativeInteger](README.md#isnegativeinteger)
- [isNonEmptyArray](README.md#isnonemptyarray)
- [isNonEmptyString](README.md#isnonemptystring)
- [isNonNegativeInteger](README.md#isnonnegativeinteger)
- [isNull](README.md#isnull)
- [isNumber](README.md#isnumber)
- [isNumberOrNan](README.md#isnumberornan)
- [isObject](README.md#isobject)
- [isObjectOrNull](README.md#isobjectornull)
- [isPositiveInteger](README.md#ispositiveinteger)
- [isSet](README.md#isset)
- [isString](README.md#isstring)
- [isSymbol](README.md#issymbol)
- [isUndefined](README.md#isundefined)
- [isWeakMap](README.md#isweakmap)
- [isWeakSet](README.md#isweakset)

## Functions

### isArray

▸ `Const` **isArray**<`T`, `U`\>(`term`): term is T[]

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `U` \| `T`[] |

#### Returns

term is T[]

#### Defined in

[guards/structural.ts:17](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/structural.ts#L17)

___

### isBigInt

▸ `Const` **isBigInt**<`U`\>(`term`): term is bigint

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `bigint` \| `U` |

#### Returns

term is bigint

#### Defined in

[guards/primitives.ts:19](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/primitives.ts#L19)

___

### isBoolean

▸ `Const` **isBoolean**<`U`\>(`term`): term is boolean

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `boolean` \| `U` |

#### Returns

term is boolean

#### Defined in

[guards/primitives.ts:7](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/primitives.ts#L7)

___

### isDate

▸ `Const` **isDate**<`U`\>(`term`): term is Date

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `U` \| `Date` |

#### Returns

term is Date

#### Defined in

[guards/structural.ts:41](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/structural.ts#L41)

___

### isFunction

▸ `Const` **isFunction**<`T`, `U`\>(`term`): term is T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |
| `U` | `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `T` \| `U` |

#### Returns

term is T

#### Defined in

[guards/structural.ts:7](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/structural.ts#L7)

___

### isInteger

▸ `Const` **isInteger**<`U`\>(`term`): term is number

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `number` \| `U` |

#### Returns

term is number

#### Defined in

[guards/convenience.ts:20](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/convenience.ts#L20)

___

### isMap

▸ `Const` **isMap**<`K`, `V`, `U`\>(`term`): term is Map<K, V\>

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `U` \| `Map`<`K`, `V`\> |

#### Returns

term is Map<K, V\>

#### Defined in

[guards/structural.ts:21](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/structural.ts#L21)

___

### isNegativeInteger

▸ `Const` **isNegativeInteger**<`U`\>(`term`): term is number

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `number` \| `U` |

#### Returns

term is number

#### Defined in

[guards/convenience.ts:32](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/convenience.ts#L32)

___

### isNonEmptyArray

▸ `Const` **isNonEmptyArray**<`T`, `U`\>(`term`): term is T[]

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `U` \| `T`[] |

#### Returns

term is T[]

#### Defined in

[guards/convenience.ts:8](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/convenience.ts#L8)

___

### isNonEmptyString

▸ `Const` **isNonEmptyString**<`U`\>(`term`): term is string

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `string` \| `U` |

#### Returns

term is string

#### Defined in

[guards/convenience.ts:12](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/convenience.ts#L12)

___

### isNonNegativeInteger

▸ `Const` **isNonNegativeInteger**<`U`\>(`term`): term is number

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `number` \| `U` |

#### Returns

term is number

#### Defined in

[guards/convenience.ts:28](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/convenience.ts#L28)

___

### isNull

▸ `Const` **isNull**<`T`\>(`term`): term is null

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | ``null`` \| `T` |

#### Returns

term is null

#### Defined in

[guards/structural.ts:3](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/structural.ts#L3)

___

### isNumber

▸ `Const` **isNumber**<`U`\>(`term`): term is number

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `number` \| `U` |

#### Returns

term is number

#### Defined in

[guards/primitives.ts:11](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/primitives.ts#L11)

___

### isNumberOrNan

▸ `Const` **isNumberOrNan**<`U`\>(`term`): term is number

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `number` \| `U` |

#### Returns

term is number

#### Defined in

[guards/convenience.ts:16](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/convenience.ts#L16)

___

### isObject

▸ `Const` **isObject**<`T`, `U`\>(`term`): term is NonNullable<T\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `U` | `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `T` \| `U` |

#### Returns

term is NonNullable<T\>

#### Defined in

[guards/structural.ts:11](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/structural.ts#L11)

___

### isObjectOrNull

▸ `Const` **isObjectOrNull**<`T`, `U`\>(`term`): term is T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `U` | `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `T` \| `U` |

#### Returns

term is T

#### Defined in

[guards/convenience.ts:4](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/convenience.ts#L4)

___

### isPositiveInteger

▸ `Const` **isPositiveInteger**<`U`\>(`term`): term is number

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `number` \| `U` |

#### Returns

term is number

#### Defined in

[guards/convenience.ts:24](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/convenience.ts#L24)

___

### isSet

▸ `Const` **isSet**<`T`, `U`\>(`term`): term is Set<T\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `U` \| `Set`<`T`\> |

#### Returns

term is Set<T\>

#### Defined in

[guards/structural.ts:25](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/structural.ts#L25)

___

### isString

▸ `Const` **isString**<`U`\>(`term`): term is string

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `string` \| `U` |

#### Returns

term is string

#### Defined in

[guards/primitives.ts:15](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/primitives.ts#L15)

___

### isSymbol

▸ `Const` **isSymbol**<`U`\>(`term`): term is symbol

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `symbol` \| `U` |

#### Returns

term is symbol

#### Defined in

[guards/primitives.ts:23](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/primitives.ts#L23)

___

### isUndefined

▸ `Const` **isUndefined**<`T`\>(`term`): term is undefined

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `undefined` \| `T` |

#### Returns

term is undefined

#### Defined in

[guards/primitives.ts:3](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/primitives.ts#L3)

___

### isWeakMap

▸ `Const` **isWeakMap**<`K`, `V`, `U`\>(`term`): term is WeakMap<K, V\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `object` |
| `V` | `V` |
| `U` | `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `U` \| `WeakMap`<`K`, `V`\> |

#### Returns

term is WeakMap<K, V\>

#### Defined in

[guards/structural.ts:29](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/structural.ts#L29)

___

### isWeakSet

▸ `Const` **isWeakSet**<`T`, `U`\>(`term`): term is WeakSet<T\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `U` | `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `U` \| `WeakSet`<`T`\> |

#### Returns

term is WeakSet<T\>

#### Defined in

[guards/structural.ts:35](https://github.com/sniptt-official/guards/blob/dc5950f/lib/guards/structural.ts#L35)
