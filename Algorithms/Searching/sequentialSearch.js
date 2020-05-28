/**
 * The Sequential Search or Linear Search
 * is the most basic search algorithm, it consists of comparing each element of the data structure with the one
 * that we are looking for . it is also the most inefficient one.
 */

import { defaultEquals } from "../../utils";

const DOES_NOT_EXIST = -1;

export const sequentialSearch = (array, value, equalsFn = defaultEquals) => {
  //iterates through the array and compare each item with the value we are looking for
  for (let i = 0; i < array.length; i++) {
    if (equalsFn(value, array[i])) {
      return i;
    }
  }
  return DOES_NOT_EXIST;
};
