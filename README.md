![Node.js CI](https://github.com/hqoss/guards/workflows/Node.js%20CI/badge.svg)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/91944e21e00f485a94e1916e19d1e8b9)](https://www.codacy.com/gh/hqoss/guards?utm_source=github.com&utm_medium=referral&utm_content=hqoss/guards&utm_campaign=Badge_Grade)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/91944e21e00f485a94e1916e19d1e8b9)](https://www.codacy.com/gh/hqoss/guards?utm_source=github.com&utm_medium=referral&utm_content=hqoss/guards&utm_campaign=Badge_Coverage)
[![GuardRails badge](https://badges.guardrails.io/hqoss/guards.svg?token=61bb319d41721f2d7f8be534c8d3a144a774359be2cdb40a74e67863e5c74042&provider=github)](https://dashboard.guardrails.io/gh/hqoss/41489)
![npm](https://img.shields.io/npm/v/@hqoss/guards)

# 🛡 Type Guards

A comprehensive, platform-agnostic collection of type guards for TypeScript and JavaScript.

Inspired by [Elixir/Erlang Guards](https://hexdocs.pm/elixir/guards.html).

![Type safety for chained ops](./assets/type-safety-chained-operations.png)

## Table of contents

-   [⏳ Install](#-install)

-   [📝 Usage](#-usage)

    -   [Primitives](#primitives)

        -   [`isBigInt`](#isbigint)
        -   [`isBoolean`](#isboolean)
        -   [`isNumber`](#isnumber)
        -   [`isString`](#isstring)
        -   [`isSymbol`](#issymbol)
        -   [`isUndefined`](#isundefined)

    -   [Special](#special)

        -   [`isNull`](#isnull)
        -   [`isFunction`](#isfunction)
        -   [`isObject`](#isobject)
        -   [`isArray`](#isarray)
        -   [`isMap`](#ismap)
        -   [`isSet`](#isset)
        -   [`isWeakMap`](#isweakmap)
        -   [`isWeakSet`](#isweakset)
        -   [`isDate`](#isdate)

    -   [Convenience](#convenience)

        -   [`isNonEmptyArray`](#isnonemptyarray)
        -   [`isNonEmptyString`](#isnonemptystring)
        -   [`isValidNumber`](#isvalidnumber)
        -   [`isInteger`](#isinteger)
        -   [`isPositiveInteger`](#ispositiveinteger)
        -   [`isNonNegativeInteger`](#isnonnegativeinteger)
        -   [`isNegativeInteger`](#isnegativeinteger)

    -   [API Docs](#api-docs)

-   [Core design principles](#core-design-principles)

-   [Node version support](#node-version-support)

    -   [Why ES2018](#why-es2018)

-   [Testing](#testing)

-   [TODO](#todo)

## ⏳ Install

```bash
npm install @hqoss/guards
```

**⚠️ NOTE:** The project is configured to target `ES2018` and the library uses `commonjs` module resolution. Read more in the [Node version support](#node-version-support) section.

## 📝 Usage

From <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures>:

The latest ECMAScript standard defines nine types:

-   Six Data Types that are primitives, checked by `typeof` operator:
    -   `undefined`: `typeof instance === "undefined"`
    -   `Boolean`: `typeof instance === "boolean"`
    -   `Number`: `typeof instance === "number"`
    -   `String`: `typeof instance === "string"`
    -   `BigInt`: `typeof instance === "bigint"`
    -   `Symbol`: `typeof instance === "symbol"`
-   `null`: `typeof instance === "object"`. Special primitive type having additional usage for it's value: if object is not inherited, then `null` is shown;
-   `Object`: `typeof instance === "object"`. Special non-data but structural type for any constructed object instance also used as data structures: new `Object`, new `Array`, new `Map`, new `Set`, new `WeakMap`, new `WeakSet`, new `Date` and almost everything made with `new` keyword;
-   `Function` non data structure, though it also answers for `typeof` operator: `typeof instance === "function"`. This answer is done as a special shorthand for `Function`s, though every `Function` constructor is derived from `Object` constructor.

### Primitives

#### `isBigInt`

**⚠️ NOTE:** Currently not exposed because `BigInt` support requires targeting ES2020.

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

### API Docs

[See full API Documentation here](docs/globals.md).

## Core design principles

-   **Code quality**; This package may end up being used in mission-critical software, so it's important that the code is performant, secure, and battle-tested.

-   **Developer experience**; Developers must be able to use this package with no significant barriers to entry. It has to be easy-to-find, well-documented, and pleasant to use.

-   **Modularity & Configurability**; It's important that users can compose and easily change the ways in which they consume and work with this package.

## Node version support

The project is configured to target ES2018. In practice, this means consumers should run on Node 12 or higher, unless additional compilation/transpilation steps are in place to ensure compatibility with the target runtime.

Please see <https://node.green/#ES2018> for reference.

### Why ES2018

Firstly, according to the official [Node release schedule](https://github.com/nodejs/Release), Node 12.x entered LTS on 2019-10-21 and is scheduled to enter Maintenance on 2020-10-20. With the End-of-Life scheduled for April 2022, we are confident that most users will now be running 12.x or higher.

Secondly, the [7.3 release of V8](https://v8.dev/blog/v8-release-73) (ships with Node 12.x or higher) includes "zero-cost async stack traces".

From the release notes:

> We are turning on the --async-stack-traces flag by default. Zero-cost async stack traces make it easier to diagnose problems in production with heavily asynchronous code, as the error.stack property that is usually sent to log files/services now provides more insight into what caused the problem.

## Testing

[Ava](https://github.com/avajs/ava), [Jest](https://jestjs.io/), and [Tape](https://github.com/substack/tape) were considered. Ava was chosen as it balances simplicity, speed, and modernity very well.

## TODO

A quick and dirty tech debt tracker before we move to Issues.

-   [ ] Write a **Contributing** guide
-   [ ] Describe scripts and usage, add best practices
-   [ ] Describe security best practices, e.g. `npm doctor`, `npm audit`, `npm outdated`, `ignore-scripts` in `.npmrc`, etc.
-   [ ] Add "Why should I use this" section
