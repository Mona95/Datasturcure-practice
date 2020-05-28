/**
 * The Selection sort algorithm is an in-place comparison sort algorithm.
 * (in-place means sorting without any extra space requirement.)
 * the general idea of the selection sort is to find the minimum value in the data structure, place it in the first position,
 * then find the second minimum value,place it in the second position ,and so on.
 * complexity of this algorithm => O(n^2)
 */

import { defaultCompare, compare, swap } from "../utils";

export const selectionSort = (array, compareFn = defaultCompare) => {
  let { length } = array,
    indexMin;
  //outer loop that iterates the array and controls the passes
  for (let i = 0; i < length - 1; i++) {
    //assume the the first value in the first pass is the minimum value of array
    indexMin = i;
    //then starting from the current i value to the end of the array
    for (let j = i; j < length; j++) {
      if (compareFn(array[indexMin], array[j]) === compare.BIGGER_THAN) {
        //if indexMin which is our current minimum value was bigger than the next value, then we need to change the index of minimum value
        indexMin = j;
      }
    }
    //when we got out of the inner loop,we will have the nth minimum value of the array
    //if the minimum value is different from the original minimum value, we will swap them
    if (i !== indexMin) {
      swap(array, i, indexMin);
    }
  }
  return array;
};
