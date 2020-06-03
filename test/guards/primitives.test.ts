import test from "ava";

import * as primitives from "../../src/guards/primitives";

const getUndefined = () => {
  return undefined;
};

const getBoolean = () => {
  const values = [true, false, Boolean(0), Boolean(1)];
  const index = Math.floor(Math.random() * values.length);
  return values[index];
};

const getNumber = () => {
  const values = [42, 3.14, Infinity, NaN, Number("42")];
  const index = Math.floor(Math.random() * values.length);
  return values[index];
};

const getString = () => {
  const values = ["str", String(42)];
  const index = Math.floor(Math.random() * values.length);
  return values[index];
};

// const getBigInt = () => {
//   const values = [42n, BigInt("42")]
//   const index = Math.floor(Math.random()*values.length)
//   return values[index]
// }

const getSymbol = () => {
  return Symbol("symbol");
};

test("isUndefined", (t) => {
  t.is(primitives.isUndefined(getUndefined()), true);
  t.is(primitives.isUndefined(getBoolean()), false);
  t.is(primitives.isUndefined(getNumber()), false);
  t.is(primitives.isUndefined(getString()), false);
  // t.is(primitives.isUndefined(getBigInt()), false)
  t.is(primitives.isUndefined(getSymbol()), false);
});

test("isBoolean", (t) => {
  t.is(primitives.isBoolean(getUndefined()), false);
  t.is(primitives.isBoolean(getBoolean()), true);
  t.is(primitives.isBoolean(getNumber()), false);
  t.is(primitives.isBoolean(getString()), false);
  // t.is(primitives.isBoolean(getBigInt()), false)
  t.is(primitives.isBoolean(getSymbol()), false);
});

test("isNumber", (t) => {
  t.is(primitives.isNumber(getUndefined()), false);
  t.is(primitives.isNumber(getBoolean()), false);
  t.is(primitives.isNumber(getNumber()), true);
  t.is(primitives.isNumber(getString()), false);
  // t.is(primitives.isNumber(getBigInt()), false)
  t.is(primitives.isNumber(getSymbol()), false);
});

test("isString", (t) => {
  t.is(primitives.isString(getUndefined()), false);
  t.is(primitives.isString(getBoolean()), false);
  t.is(primitives.isString(getNumber()), false);
  t.is(primitives.isString(getString()), true);
  // t.is(primitives.isString(getBigInt()), false)
  t.is(primitives.isString(getSymbol()), false);
});

// test("isBigInt", t => {
// t.is(primitives.isBigInt(getUndefined()), false)
// t.is(primitives.isBigInt(getBoolean()), false)
// t.is(primitives.isBigInt(getNumber()), false)
// t.is(primitives.isBigInt(getString()), false)
// t.is(primitives.isBigInt(getBigInt()), true)
// t.is(primitives.isBigInt(getSymbol()), false)
// })

test("isSymbol", (t) => {
  t.is(primitives.isSymbol(getUndefined()), false);
  t.is(primitives.isSymbol(getBoolean()), false);
  t.is(primitives.isSymbol(getNumber()), false);
  t.is(primitives.isSymbol(getString()), false);
  // t.is(primitives.isSymbol(getBigInt()), false)
  t.is(primitives.isSymbol(getSymbol()), true);
});
