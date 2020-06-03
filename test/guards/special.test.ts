import test from "ava";

import * as special from "../../src/guards/special";

test("isNull", (t) => {
  t.is(special.isNull(null), true);
  t.is(special.isNull(undefined), false);
  t.is(special.isNull(0), false);
  t.is(special.isNull(false), false);
});

test("isFunction", (t) => {
  t.is(
    special.isFunction(() => {}),
    true,
  );
  t.is(
    special.isFunction(function () {}),
    true,
  );
  t.is(special.isFunction(class C {}), true);
  t.is(special.isFunction(parseInt), true);
  t.is(special.isFunction(null), false);
  t.is(special.isFunction(undefined), false);
  t.is(special.isFunction("str"), false);
  t.is(special.isFunction(42), false);
  t.is(special.isFunction({}), false);
  t.is(special.isFunction([]), false);
  t.is(special.isFunction(Symbol("symbol")), false);
});

test("isObject", (t) => {
  t.is(special.isObject({}), true);
  t.is(special.isObject(new (class C {})()), true);
  t.is(special.isObject(new Map()), true);
  t.is(special.isObject(new Set()), true);
  t.is(special.isObject(new WeakMap()), true);
  t.is(special.isObject(new WeakSet()), true);
  t.is(special.isObject(new Date()), true);
  t.is(
    special.isObject(() => {}),
    false,
  );
  t.is(
    special.isObject(function () {}),
    false,
  );
  t.is(special.isObject(class C {}), false);
  t.is(special.isObject(parseInt), false);
  t.is(special.isObject(null), false);
  t.is(special.isObject(undefined), false);
  t.is(special.isObject("str"), false);
  t.is(special.isObject(42), false);
  t.is(special.isObject([]), false);
  t.is(special.isObject(Symbol("symbol")), false);
});

test("isArray", (t) => {
  t.is(special.isArray([]), true);
  t.is(special.isArray(class C {}), false);
  t.is(special.isArray(new Map()), false);
  t.is(special.isArray(new Set()), false);
  t.is(special.isArray(new WeakMap()), false);
  t.is(special.isArray(new WeakSet()), false);
  t.is(special.isArray(new Date()), false);
  t.is(
    special.isArray(() => {}),
    false,
  );
  t.is(
    special.isArray(function () {}),
    false,
  );
  t.is(special.isArray(class C {}), false);
  t.is(special.isArray(parseInt), false);
  t.is(special.isArray(null), false);
  t.is(special.isArray(undefined), false);
  t.is(special.isArray("str"), false);
  t.is(special.isArray(42), false);
  t.is(special.isArray(Symbol("symbol")), false);
});

test("isMap", (t) => {
  t.is(special.isMap({}), false);
  t.is(special.isMap(new (class C {})()), false);
  t.is(special.isMap(new Map()), true);
  t.is(special.isMap(new Set()), false);
  t.is(special.isMap(new WeakMap()), false);
  t.is(special.isMap(new WeakSet()), false);
  t.is(special.isMap(new Date()), false);
  t.is(
    special.isMap(() => {}),
    false,
  );
  t.is(
    special.isMap(function () {}),
    false,
  );
  t.is(special.isMap(class C {}), false);
  t.is(special.isMap(parseInt), false);
  t.is(special.isMap(null), false);
  t.is(special.isMap(undefined), false);
  t.is(special.isMap("str"), false);
  t.is(special.isMap(42), false);
  t.is(special.isMap([]), false);
  t.is(special.isMap(Symbol("symbol")), false);
});

test("isSet", (t) => {
  t.is(special.isSet({}), false);
  t.is(special.isSet(new (class C {})()), false);
  t.is(special.isSet(new Map()), false);
  t.is(special.isSet(new Set()), true);
  t.is(special.isSet(new WeakMap()), false);
  t.is(special.isSet(new WeakSet()), false);
  t.is(special.isSet(new Date()), false);
  t.is(
    special.isSet(() => {}),
    false,
  );
  t.is(
    special.isSet(function () {}),
    false,
  );
  t.is(special.isSet(class C {}), false);
  t.is(special.isSet(parseInt), false);
  t.is(special.isSet(null), false);
  t.is(special.isSet(undefined), false);
  t.is(special.isSet("str"), false);
  t.is(special.isSet(42), false);
  t.is(special.isSet([]), false);
  t.is(special.isSet(Symbol("symbol")), false);
});

test("isWeakMap", (t) => {
  t.is(special.isWeakMap({}), false);
  t.is(special.isWeakMap(new (class C {})()), false);
  t.is(special.isWeakMap(new Map()), false);
  t.is(special.isWeakMap(new Set()), false);
  t.is(special.isWeakMap(new WeakMap()), true);
  t.is(special.isWeakMap(new WeakSet()), false);
  t.is(special.isWeakMap(new Date()), false);
  t.is(
    special.isWeakMap(() => {}),
    false,
  );
  t.is(
    special.isWeakMap(function () {}),
    false,
  );
  t.is(special.isWeakMap(class C {}), false);
  t.is(special.isWeakMap(parseInt), false);
  t.is(special.isWeakMap(null), false);
  t.is(special.isWeakMap(undefined), false);
  t.is(special.isWeakMap("str"), false);
  t.is(special.isWeakMap(42), false);
  t.is(special.isWeakMap([]), false);
  t.is(special.isWeakMap(Symbol("symbol")), false);
});

test("isWeakSet", (t) => {
  t.is(special.isWeakSet({}), false);
  t.is(special.isWeakSet(new (class C {})()), false);
  t.is(special.isWeakSet(new Map()), false);
  t.is(special.isWeakSet(new Set()), false);
  t.is(special.isWeakSet(new WeakMap()), false);
  t.is(special.isWeakSet(new WeakSet()), true);
  t.is(special.isWeakSet(new Date()), false);
  t.is(
    special.isWeakSet(() => {}),
    false,
  );
  t.is(
    special.isWeakSet(function () {}),
    false,
  );
  t.is(special.isWeakSet(class C {}), false);
  t.is(special.isWeakSet(parseInt), false);
  t.is(special.isWeakSet(null), false);
  t.is(special.isWeakSet(undefined), false);
  t.is(special.isWeakSet("str"), false);
  t.is(special.isWeakSet(42), false);
  t.is(special.isWeakSet([]), false);
  t.is(special.isWeakSet(Symbol("symbol")), false);
});

test("isDate", (t) => {
  t.is(special.isDate({}), false);
  t.is(special.isDate(new (class C {})()), false);
  t.is(special.isDate(new Map()), false);
  t.is(special.isDate(new Set()), false);
  t.is(special.isDate(new WeakMap()), false);
  t.is(special.isDate(new WeakSet()), false);
  t.is(special.isDate(new Date()), true);
  t.is(
    special.isDate(() => {}),
    false,
  );
  t.is(
    special.isDate(function () {}),
    false,
  );
  t.is(special.isDate(class C {}), false);
  t.is(special.isDate(parseInt), false);
  t.is(special.isDate(null), false);
  t.is(special.isDate(undefined), false);
  t.is(special.isDate("str"), false);
  t.is(special.isDate(42), false);
  t.is(special.isDate([]), false);
  t.is(special.isDate(Symbol("symbol")), false);
});
