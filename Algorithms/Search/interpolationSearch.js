/**
 * The Interpolation Search algorithm is an improved variation of the binary search. while the binary search always
 * checks the value in the `mid` position, the interpolation search might check different places of the array depending on the
 * value that is being searched.
 * to make the algorithm work, the data structure needs to be sorted first. steps are as follows :
 * 1- a `value` is selected using the position formula
 * 2- if the `value` is the one we are looking fore, we are done .
 * 3- if the `value` we are looking for is `lesser` than the selected one. then we will go back to step 1 using the left subarray(lesser)
 * 4- if the `value` we are looking for is `bigger` than the selected one. then we will go back to step 1 using the right subarray(higher)
 */

import { defaultCompare, defaultEquals } from "../../utils";

const DOES_NOT_EXIST = -1;

export const interpolationSearch = (
  array,
  value,
  compareFn = defaultCompare,
  equalsFn = defaultEquals,
  diffFn = defaultDiff
) => {
  const { length } = array;
  let low = 0,
    high = length - 1,
    position = -1,
    delta = -1;
  while (
    low <= high &&
    biggerEquals(value, array[low], compareFn) &&
    lesserEquals(value, array[high], compareFn)
  ) {
    //the idea of this formula is to find the higher value new the `position` if the searched value is closer to array[high] and
    //the lowest value near the position if the searched value is closer to array[low]
    delta = diffFn(value, array[low]) / diffFn[(array[high], array[low])];
    position = low + Math.floor((high - low) * delta); //calculating the position to compare the value with
    if (equalsFn(array[position], value)) {
      return position; //if value found, we return its index
    }
    //if the searched value is less than the `value` in the current position,we repeat the logic
    // using the left subarray or right subarray
    if (compareFn(array[position], value) === Compare.LESS_THAN) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }
  return DOES_NOT_EXIST;
};

const lesserEquals = (a, b, compareFn) => {
  const comp = compareFn(a, b);
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
};

function biggerEquals(a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
}
