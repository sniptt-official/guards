import test from 'ava';

import * as structural from '../../lib/guards/structural';

test('isNull', (t) => {
  t.is(structural.isNull(null), true);
  t.is(structural.isNull(undefined), false);
  t.is(structural.isNull(0), false);
  t.is(structural.isNull(false), false);
});

test('isFunction', (t) => {
  t.is(structural.isFunction({}), false);
  t.is(structural.isFunction(new (class C {})()), false);
  t.is(structural.isFunction(new Function()), true);
  t.is(structural.isFunction(new Map()), false);
  t.is(structural.isFunction(new Set()), false);
  t.is(structural.isFunction(new WeakMap()), false);
  t.is(structural.isFunction(new WeakSet()), false);
  t.is(structural.isFunction(new Date()), false);
  t.is(
    structural.isFunction(() => {}),
    true,
  );
  t.is(
    structural.isFunction(function () {}),
    true,
  );
  t.is(structural.isFunction(class C {}), true);
  t.is(structural.isFunction(parseInt), true);
  t.is(structural.isFunction(null), false);
  t.is(structural.isFunction(undefined), false);
  t.is(structural.isFunction('str'), false);
  t.is(structural.isFunction(42), false);
  t.is(structural.isFunction([]), false);
  t.is(structural.isFunction(Symbol('symbol')), false);
});

test('isObject', (t) => {
  t.is(structural.isObject({}), true);
  t.is(structural.isObject(new (class C {})()), true);
  t.is(structural.isObject(new Function()), false);
  t.is(structural.isObject(new Map()), true);
  t.is(structural.isObject(new Set()), true);
  t.is(structural.isObject(new WeakMap()), true);
  t.is(structural.isObject(new WeakSet()), true);
  t.is(structural.isObject(new Date()), true);
  t.is(
    structural.isObject(() => {}),
    false,
  );
  t.is(
    structural.isObject(function () {}),
    false,
  );
  t.is(structural.isObject(class C {}), false);
  t.is(structural.isObject(parseInt), false);
  t.is(structural.isObject(null), false);
  t.is(structural.isObject(undefined), false);
  t.is(structural.isObject('str'), false);
  t.is(structural.isObject(42), false);
  t.is(structural.isObject([]), true);
  t.is(structural.isObject(Symbol('symbol')), false);
});

test('isArray', (t) => {
  t.is(structural.isArray([]), true);
  t.is(structural.isArray(class C {}), false);
  t.is(structural.isArray(new Map()), false);
  t.is(structural.isArray(new Set()), false);
  t.is(structural.isArray(new WeakMap()), false);
  t.is(structural.isArray(new WeakSet()), false);
  t.is(structural.isArray(new Date()), false);
  t.is(
    structural.isArray(() => {}),
    false,
  );
  t.is(
    structural.isArray(function () {}),
    false,
  );
  t.is(structural.isArray(class C {}), false);
  t.is(structural.isArray(parseInt), false);
  t.is(structural.isArray(null), false);
  t.is(structural.isArray(undefined), false);
  t.is(structural.isArray('str'), false);
  t.is(structural.isArray(42), false);
  t.is(structural.isArray(Symbol('symbol')), false);
});

test('isMap', (t) => {
  t.is(structural.isMap({}), false);
  t.is(structural.isMap(new (class C {})()), false);
  t.is(structural.isMap(new Map()), true);
  t.is(structural.isMap(new Set()), false);
  t.is(structural.isMap(new WeakMap()), false);
  t.is(structural.isMap(new WeakSet()), false);
  t.is(structural.isMap(new Date()), false);
  t.is(
    structural.isMap(() => {}),
    false,
  );
  t.is(
    structural.isMap(function () {}),
    false,
  );
  t.is(structural.isMap(class C {}), false);
  t.is(structural.isMap(parseInt), false);
  t.is(structural.isMap(null), false);
  t.is(structural.isMap(undefined), false);
  t.is(structural.isMap('str'), false);
  t.is(structural.isMap(42), false);
  t.is(structural.isMap([]), false);
  t.is(structural.isMap(Symbol('symbol')), false);
});

test('isSet', (t) => {
  t.is(structural.isSet({}), false);
  t.is(structural.isSet(new (class C {})()), false);
  t.is(structural.isSet(new Map()), false);
  t.is(structural.isSet(new Set()), true);
  t.is(structural.isSet(new WeakMap()), false);
  t.is(structural.isSet(new WeakSet()), false);
  t.is(structural.isSet(new Date()), false);
  t.is(
    structural.isSet(() => {}),
    false,
  );
  t.is(
    structural.isSet(function () {}),
    false,
  );
  t.is(structural.isSet(class C {}), false);
  t.is(structural.isSet(parseInt), false);
  t.is(structural.isSet(null), false);
  t.is(structural.isSet(undefined), false);
  t.is(structural.isSet('str'), false);
  t.is(structural.isSet(42), false);
  t.is(structural.isSet([]), false);
  t.is(structural.isSet(Symbol('symbol')), false);
});

test('isWeakMap', (t) => {
  t.is(structural.isWeakMap({}), false);
  t.is(structural.isWeakMap(new (class C {})()), false);
  t.is(structural.isWeakMap(new Map()), false);
  t.is(structural.isWeakMap(new Set()), false);
  t.is(structural.isWeakMap(new WeakMap()), true);
  t.is(structural.isWeakMap(new WeakSet()), false);
  t.is(structural.isWeakMap(new Date()), false);
  t.is(
    structural.isWeakMap(() => {}),
    false,
  );
  t.is(
    structural.isWeakMap(function () {}),
    false,
  );
  t.is(structural.isWeakMap(class C {}), false);
  t.is(structural.isWeakMap(parseInt), false);
  t.is(structural.isWeakMap(null), false);
  t.is(structural.isWeakMap(undefined), false);
  t.is(structural.isWeakMap('str'), false);
  t.is(structural.isWeakMap(42), false);
  t.is(structural.isWeakMap([]), false);
  t.is(structural.isWeakMap(Symbol('symbol')), false);
});

test('isWeakSet', (t) => {
  t.is(structural.isWeakSet({}), false);
  t.is(structural.isWeakSet(new (class C {})()), false);
  t.is(structural.isWeakSet(new Map()), false);
  t.is(structural.isWeakSet(new Set()), false);
  t.is(structural.isWeakSet(new WeakMap()), false);
  t.is(structural.isWeakSet(new WeakSet()), true);
  t.is(structural.isWeakSet(new Date()), false);
  t.is(
    structural.isWeakSet(() => {}),
    false,
  );
  t.is(
    structural.isWeakSet(function () {}),
    false,
  );
  t.is(structural.isWeakSet(class C {}), false);
  t.is(structural.isWeakSet(parseInt), false);
  t.is(structural.isWeakSet(null), false);
  t.is(structural.isWeakSet(undefined), false);
  t.is(structural.isWeakSet('str'), false);
  t.is(structural.isWeakSet(42), false);
  t.is(structural.isWeakSet([]), false);
  t.is(structural.isWeakSet(Symbol('symbol')), false);
});

test('isDate', (t) => {
  t.is(structural.isDate({}), false);
  t.is(structural.isDate(new (class C {})()), false);
  t.is(structural.isDate(new Map()), false);
  t.is(structural.isDate(new Set()), false);
  t.is(structural.isDate(new WeakMap()), false);
  t.is(structural.isDate(new WeakSet()), false);
  t.is(structural.isDate(new Date()), true);
  t.is(
    structural.isDate(() => {}),
    false,
  );
  t.is(
    structural.isDate(function () {}),
    false,
  );
  t.is(structural.isDate(class C {}), false);
  t.is(structural.isDate(parseInt), false);
  t.is(structural.isDate(null), false);
  t.is(structural.isDate(undefined), false);
  t.is(structural.isDate('str'), false);
  t.is(structural.isDate(42), false);
  t.is(structural.isDate([]), false);
  t.is(structural.isDate(Symbol('symbol')), false);
});
