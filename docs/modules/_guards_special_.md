[@hqoss/guards](../README.md) › [Globals](../globals.md) › ["guards/special"](_guards_special_.md)

# Module: "guards/special"

## Index

### Functions

* [isArray](_guards_special_.md#const-isarray)
* [isDate](_guards_special_.md#const-isdate)
* [isFunction](_guards_special_.md#const-isfunction)
* [isMap](_guards_special_.md#const-ismap)
* [isNull](_guards_special_.md#const-isnull)
* [isObject](_guards_special_.md#const-isobject)
* [isSet](_guards_special_.md#const-isset)
* [isWeakMap](_guards_special_.md#const-isweakmap)
* [isWeakSet](_guards_special_.md#const-isweakset)

## Functions

### `Const` isArray

▸ **isArray**‹**T**, **U**›(`term`: Array‹T› | U): *term is Array<T>*

*Defined in [guards/special.ts:17](https://github.com/hqoss/guards/blob/6f679f8/src/guards/special.ts#L17)*

**Type parameters:**

▪ **T**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`term` | Array‹T› &#124; U |

**Returns:** *term is Array<T>*

___

### `Const` isDate

▸ **isDate**‹**U**›(`term`: Date | U): *term is Date*

*Defined in [guards/special.ts:41](https://github.com/hqoss/guards/blob/6f679f8/src/guards/special.ts#L41)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`term` | Date &#124; U |

**Returns:** *term is Date*

___

### `Const` isFunction

▸ **isFunction**‹**T**, **U**›(`term`: T | U): *term is T*

*Defined in [guards/special.ts:7](https://github.com/hqoss/guards/blob/6f679f8/src/guards/special.ts#L7)*

**Type parameters:**

▪ **T**: *Function*

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`term` | T &#124; U |

**Returns:** *term is T*

___

### `Const` isMap

▸ **isMap**‹**K**, **V**, **U**›(`term`: Map‹K, V› | U): *term is Map<K, V>*

*Defined in [guards/special.ts:21](https://github.com/hqoss/guards/blob/6f679f8/src/guards/special.ts#L21)*

**Type parameters:**

▪ **K**

▪ **V**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`term` | Map‹K, V› &#124; U |

**Returns:** *term is Map<K, V>*

___

### `Const` isNull

▸ **isNull**‹**T**›(`term`: T | null): *term is null*

*Defined in [guards/special.ts:3](https://github.com/hqoss/guards/blob/6f679f8/src/guards/special.ts#L3)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`term` | T &#124; null |

**Returns:** *term is null*

___

### `Const` isObject

▸ **isObject**‹**T**, **U**›(`term`: T | U): *term is NonNullable<T>*

*Defined in [guards/special.ts:11](https://github.com/hqoss/guards/blob/6f679f8/src/guards/special.ts#L11)*

**Type parameters:**

▪ **T**: *object*

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`term` | T &#124; U |

**Returns:** *term is NonNullable<T>*

___

### `Const` isSet

▸ **isSet**‹**T**, **U**›(`term`: Set‹T› | U): *term is Set<T>*

*Defined in [guards/special.ts:25](https://github.com/hqoss/guards/blob/6f679f8/src/guards/special.ts#L25)*

**Type parameters:**

▪ **T**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`term` | Set‹T› &#124; U |

**Returns:** *term is Set<T>*

___

### `Const` isWeakMap

▸ **isWeakMap**‹**K**, **V**, **U**›(`term`: WeakMap‹K, V› | U): *term is WeakMap<K, V>*

*Defined in [guards/special.ts:29](https://github.com/hqoss/guards/blob/6f679f8/src/guards/special.ts#L29)*

**Type parameters:**

▪ **K**: *object*

▪ **V**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`term` | WeakMap‹K, V› &#124; U |

**Returns:** *term is WeakMap<K, V>*

___

### `Const` isWeakSet

▸ **isWeakSet**‹**T**, **U**›(`term`: WeakSet‹T› | U): *term is WeakSet<T>*

*Defined in [guards/special.ts:35](https://github.com/hqoss/guards/blob/6f679f8/src/guards/special.ts#L35)*

**Type parameters:**

▪ **T**: *object*

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`term` | WeakSet‹T› &#124; U |

**Returns:** *term is WeakSet<T>*
