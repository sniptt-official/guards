[@sniptt/guards](../README.md) / convenience

# Namespace: convenience

## Table of contents

### Functions

- [isInteger](convenience.md#isinteger)
- [isNegativeInteger](convenience.md#isnegativeinteger)
- [isNonEmptyArray](convenience.md#isnonemptyarray)
- [isNonEmptyString](convenience.md#isnonemptystring)
- [isNonNegativeInteger](convenience.md#isnonnegativeinteger)
- [isNumberOrNan](convenience.md#isnumberornan)
- [isObjectOrNull](convenience.md#isobjectornull)
- [isPositiveInteger](convenience.md#ispositiveinteger)

## Functions

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

[guards/convenience.ts:20](https://github.com/sniptt-official/guards/blob/799f812/lib/guards/convenience.ts#L20)

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

[guards/convenience.ts:32](https://github.com/sniptt-official/guards/blob/799f812/lib/guards/convenience.ts#L32)

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

[guards/convenience.ts:8](https://github.com/sniptt-official/guards/blob/799f812/lib/guards/convenience.ts#L8)

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

[guards/convenience.ts:12](https://github.com/sniptt-official/guards/blob/799f812/lib/guards/convenience.ts#L12)

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

[guards/convenience.ts:28](https://github.com/sniptt-official/guards/blob/799f812/lib/guards/convenience.ts#L28)

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

[guards/convenience.ts:16](https://github.com/sniptt-official/guards/blob/799f812/lib/guards/convenience.ts#L16)

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

[guards/convenience.ts:4](https://github.com/sniptt-official/guards/blob/799f812/lib/guards/convenience.ts#L4)

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

[guards/convenience.ts:24](https://github.com/sniptt-official/guards/blob/799f812/lib/guards/convenience.ts#L24)
