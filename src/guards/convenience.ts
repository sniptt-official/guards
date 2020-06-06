import { isNumber, isString } from "./primitives";
import { isArray } from "./special";

export const isNonEmptyArray = <T, U>(term: Array<T> | U): term is Array<T> => {
  return isArray(term) && term.length > 0;
};

export const isNonEmptyString = <U>(term: string | U): term is string => {
  return isString(term) && term.length > 0;
};

export const isValidNumber = <U>(term: number | U): term is number => {
  return isNumber(term) && !Number.isNaN(term);
};

export const isInteger = <U>(term: number | U): term is number => {
  return isValidNumber(term) && Number.isInteger(term);
};

export const isPositiveInteger = <U>(term: number | U): term is number => {
  return isInteger(term) && term > 0;
};

export const isNonNegativeInteger = <U>(term: number | U): term is number => {
  return isInteger(term) && term >= 0;
};

export const isNegativeInteger = <U>(term: number | U): term is number => {
  return isInteger(term) && term < 0;
};
