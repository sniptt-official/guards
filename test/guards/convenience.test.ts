import test from 'ava';

import * as convenience from '../../lib/guards/convenience';

test('isObjectOrNull', (t) => {
  t.is(convenience.isObjectOrNull({}), true);
  t.is(convenience.isObjectOrNull(null), true);
  t.is(convenience.isObjectOrNull(new Set()), true);
  t.is(
    convenience.isObjectOrNull(() => {}),
    false,
  );
  t.is(convenience.isObjectOrNull(new Function()), false);
});

test('isNonEmptyArray', (t) => {
  t.is(convenience.isNonEmptyArray([1, 2]), true);
  t.is(convenience.isNonEmptyArray([1]), true);
  t.is(convenience.isNonEmptyArray([]), false);
});

test('isNonEmptyString', (t) => {
  t.is(convenience.isNonEmptyString('a'), true);
  t.is(convenience.isNonEmptyString(''), false);
});

test('isNumberOrNaN', (t) => {
  t.is(convenience.isNumberOrNaN(0), true);
  t.is(convenience.isNumberOrNaN(42), true);
  t.is(convenience.isNumberOrNaN(-42), true);
  t.is(convenience.isNumberOrNaN(3.14), true);
  t.is(convenience.isNumberOrNaN(-3.14), true);
  t.is(convenience.isNumberOrNaN(Infinity), true);
  t.is(convenience.isNumberOrNaN(-Infinity), true);
  t.is(convenience.isNumberOrNaN(Number.MAX_SAFE_INTEGER), true);
  t.is(convenience.isNumberOrNaN(-Number.MAX_SAFE_INTEGER), true);
  t.is(convenience.isNumberOrNaN(NaN), true);
  t.is(convenience.isNumberOrNaN(BigInt(0)), false);
});

test('isInteger', (t) => {
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

test('isPositiveInteger', (t) => {
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

test('isNonNegativeInteger', (t) => {
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

test('isNegativeInteger', (t) => {
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
