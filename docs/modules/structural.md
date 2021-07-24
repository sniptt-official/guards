[@sniptt/guards](../README.md) / structural

# Namespace: structural

## Table of contents

### Functions

- [isArray](structural.md#isarray)
- [isDate](structural.md#isdate)
- [isFunction](structural.md#isfunction)
- [isMap](structural.md#ismap)
- [isNull](structural.md#isnull)
- [isObject](structural.md#isobject)
- [isSet](structural.md#isset)
- [isWeakMap](structural.md#isweakmap)
- [isWeakSet](structural.md#isweakset)

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

[guards/structural.ts:17](https://github.com/sniptt-official/guards/blob/799f812/lib/guards/structural.ts#L17)

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

[guards/structural.ts:41](https://github.com/sniptt-official/guards/blob/799f812/lib/guards/structural.ts#L41)

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

[guards/structural.ts:7](https://github.com/sniptt-official/guards/blob/799f812/lib/guards/structural.ts#L7)

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

[guards/structural.ts:21](https://github.com/sniptt-official/guards/blob/799f812/lib/guards/structural.ts#L21)

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

[guards/structural.ts:3](https://github.com/sniptt-official/guards/blob/799f812/lib/guards/structural.ts#L3)

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

[guards/structural.ts:11](https://github.com/sniptt-official/guards/blob/799f812/lib/guards/structural.ts#L11)

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

[guards/structural.ts:25](https://github.com/sniptt-official/guards/blob/799f812/lib/guards/structural.ts#L25)

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

[guards/structural.ts:29](https://github.com/sniptt-official/guards/blob/799f812/lib/guards/structural.ts#L29)

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

[guards/structural.ts:35](https://github.com/sniptt-official/guards/blob/799f812/lib/guards/structural.ts#L35)
