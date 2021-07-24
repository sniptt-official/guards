<p align="center">
  <a href="https://sniptt.com">
    <img src=".github/assets/guards-social-cover.svg" alt="Guards Logo" />
  </a>
</p>

<p align="right">
  <i>If you use this repo, star it ✨</i>
</p>

***

<p align="center">👻 <b>Comprehensive collection of type guards for JavaScript and TypeScript</b></p>

<p align="center">
  Inspired by <a href="https://hexdocs.pm/elixir/guards.html" target="_blank">Elixir guards</a>
</p>

***

<!-- ![Type safety for chained ops](./assets/type-safety-chained-operations.png) -->

## Install

### Node.js and the browser

```sh
npm install @sniptt/guards
```

### Deno

```typescript
import { ... } from 'https://deno.land/x/guards/mod.ts'

// TODO
```

## 📝 Usage

From <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures>:

The latest ECMAScript standard defines nine types:

-   Six **Data Types** that are primitives, checked by `typeof` operator:
    -   `undefined`: `typeof instance === "undefined"`
    -   `Boolean`: `typeof instance === "boolean"`
    -   `Number`: `typeof instance === "number"`
    -   `String`: `typeof instance === "string"`
    -   `BigInt`: `typeof instance === "bigint"`
    -   `Symbol`: `typeof instance === "symbol"`
- **Structural Types**:
    -   `Object`: `typeof instance === "object"`. Special non-data but structural type for any constructed object instance also used as data structures: new `Object`, new `Array`, new `Map`, new `Set`, new `WeakMap`, new `WeakSet`, new `Date` and almost everything made with `new` keyword;
    -   `Function` non data structure, though it also answers for `typeof` operator: `typeof instance === "function"`. This answer is done as a special shorthand for `Function`s, though every `Function` constructor is derived from `Object` constructor.
- **Structural Root** Primitive
    -   `null`: `typeof instance === "object"`. Special primitive type having additional usage for it's value: if object is not inherited, then `null` is shown;

### Primitives

#### `isBigInt`

#### `isBoolean`

```typescript
let val: boolean | number

if (isBoolean(val)) {
  // TypeScript will infer val: boolean
} else {
  // TypeScript will infer val: number
}
```

#### `isNumber`

**⚠️ NOTE:** Also answers `true` to `NaN`!

See also:

-   [isValidNumber](#isvalidnumber)
-   [isInteger](#isinteger)

```typescript
let val: number | string

if (isNumber(val)) {
  // TypeScript will infer val: number
} else {
  // TypeScript will infer val: string
}
```

#### `isString`

```typescript
let val: string | number

if (isString(val)) {
  // TypeScript will infer val: string
} else {
  // TypeScript will infer val: number
}
```

#### `isSymbol`

```typescript
let val: symbol | string

if (isSymbol(val)) {
  // TypeScript will infer val: symbol
} else {
  // TypeScript will infer val: string
}
```

#### `isUndefined`

```typescript
let val: undefined | null

if (isUndefined(val)) {
  // TypeScript will infer val: undefined
} else {
  // TypeScript will infer val: null
}
```

### Special

#### `isNull`

Answers `true` if and only if `value === null`.

Full TypeScript (type inference) support.

#### `isFunction`

Answers `true` if and only if `typeof value === "function"`.

Full TypeScript (type inference) support.

#### `isObject`

**⚠️ NOTE:** This is a _strict_ check, see details below.

Answers `true` if and only if:

-   `isNull(value) === false`; and
-   `typeof value === "object"`

To check for "plain" object (excluding array):

```typescript
isObject(term) && !isArray(term)
```

To check for array:

```typescript
isArray(term)
```

Full TypeScript (type inference) support.

#### `isArray`

Answers `true` if and only if `Array.isArray(value) === true`.

Full TypeScript (type inference) support.

#### `isMap`

Answers `true` if and only if `(value instanceof Map) === true`.

Full TypeScript (type inference) support.

#### `isSet`

Answers `true` if and only if `(value instanceof Set) === true`.

Full TypeScript (type inference) support.

#### `isWeakMap`

Answers `true` if and only if `(value instanceof WeakMap) === true`.

Full TypeScript (type inference) support.

#### `isWeakSet`

Answers `true` if and only if `(value instanceof WeakSet) === true`.

Full TypeScript (type inference) support.

#### `isDate`

Answers `true` if and only if `(value instanceof Date) === true`.

Full TypeScript (type inference) support.

### Convenience

#### `isNonEmptyArray`

```typescript
test("isNonEmptyArray", (t) => {
  t.is(convenience.isNonEmptyArray([1, 2]), true);
  t.is(convenience.isNonEmptyArray([1]), true);
  t.is(convenience.isNonEmptyArray([]), false);
});
```

Full TypeScript (type inference) support.

#### `isNonEmptyString`

```typescript
test("isNonEmptyString", (t) => {
  t.is(convenience.isNonEmptyString("a"), true);
  t.is(convenience.isNonEmptyString(""), false);
});
```

Full TypeScript (type inference) support.

#### `isValidNumber`

```typescript
test("isValidNumber", (t) => {
  t.is(convenience.isValidNumber(0), true);
  t.is(convenience.isValidNumber(42), true);
  t.is(convenience.isValidNumber(-42), true);
  t.is(convenience.isValidNumber(3.14), true);
  t.is(convenience.isValidNumber(-3.14), true);
  t.is(convenience.isValidNumber(Infinity), true);
  t.is(convenience.isValidNumber(-Infinity), true);
  t.is(convenience.isValidNumber(Number.MAX_SAFE_INTEGER), true);
  t.is(convenience.isValidNumber(-Number.MAX_SAFE_INTEGER), true);
  t.is(convenience.isValidNumber(NaN), false);
});
```

Full TypeScript (type inference) support.

#### `isInteger`

```typescript
test("isInteger", (t) => {
  t.is(convenience.isInteger(0), true);
  t.is(convenience.isInteger(42), true);
  t.is(convenience.isInteger(-42), true);
  t.is(convenience.isInteger(3.14), false);
  t.is(convenience.isInteger(-3.14), false);
  t.is(convenience.isInteger(Infinity), false);
  t.is(convenience.isInteger(-Infinity), false);
  t.is(convenience.isInteger(Number.MAX_SAFE_INTEGER), true);
  t.is(convenience.isInteger(-Number.MAX_SAFE_INTEGER), true);
  t.is(convenience.isInteger(NaN), false);
});
```

Full TypeScript (type inference) support.

#### `isPositiveInteger`

```typescript
test("isPositiveInteger", (t) => {
  t.is(convenience.isPositiveInteger(0), false);
  t.is(convenience.isPositiveInteger(42), true);
  t.is(convenience.isPositiveInteger(-42), false);
  t.is(convenience.isPositiveInteger(3.14), false);
  t.is(convenience.isPositiveInteger(-3.14), false);
  t.is(convenience.isPositiveInteger(Infinity), false);
  t.is(convenience.isPositiveInteger(-Infinity), false);
  t.is(convenience.isPositiveInteger(Number.MAX_SAFE_INTEGER), true);
  t.is(convenience.isPositiveInteger(-Number.MAX_SAFE_INTEGER), false);
  t.is(convenience.isPositiveInteger(NaN), false);
});
```

Full TypeScript (type inference) support.

#### `isNonNegativeInteger`

```typescript
test("isNonNegativeInteger", (t) => {
  t.is(convenience.isNonNegativeInteger(0), true);
  t.is(convenience.isNonNegativeInteger(42), true);
  t.is(convenience.isNonNegativeInteger(-42), false);
  t.is(convenience.isNonNegativeInteger(3.14), false);
  t.is(convenience.isNonNegativeInteger(-3.14), false);
  t.is(convenience.isNonNegativeInteger(Infinity), false);
  t.is(convenience.isNonNegativeInteger(-Infinity), false);
  t.is(convenience.isNonNegativeInteger(Number.MAX_SAFE_INTEGER), true);
  t.is(convenience.isNonNegativeInteger(-Number.MAX_SAFE_INTEGER), false);
  t.is(convenience.isNonNegativeInteger(NaN), false);
});
```

Full TypeScript (type inference) support.

#### `isNegativeInteger`

```typescript
test("isNegativeInteger", (t) => {
  t.is(convenience.isNegativeInteger(0), false);
  t.is(convenience.isNegativeInteger(42), false);
  t.is(convenience.isNegativeInteger(-42), true);
  t.is(convenience.isNegativeInteger(3.14), false);
  t.is(convenience.isNegativeInteger(-3.14), false);
  t.is(convenience.isNegativeInteger(Infinity), false);
  t.is(convenience.isNegativeInteger(-Infinity), false);
  t.is(convenience.isNegativeInteger(Number.MAX_SAFE_INTEGER), false);
  t.is(convenience.isNegativeInteger(-Number.MAX_SAFE_INTEGER), true);
  t.is(convenience.isNegativeInteger(NaN), false);
});
```

Full TypeScript (type inference) support.

## API Docs

[Full API Documentation](docs/README.md).

## License

See [LICENSE](LICENSE)
