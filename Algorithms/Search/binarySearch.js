/**
 * The Binary Search
 * to make the algorithm works, the data structure needs to be sorted first, these are the steps that the algorithm follows
 * 1- a `value` is selected in the middle of the array.
 * 2- if the `value` is the one we are looking for, we are done.
 * 3- if the `value` we are looking for is less than the selected one, then we will go back to step 1 using left subarray(lower).
 * 4- if the `value` we are looking for is bigger than the selected one, then we will go back to step 1 using right subarray(higher).
 */

import { defaultCompare, compare } from "../../utils";
import { quickSort } from "../Sort/quickSort";

export const binarySearch = (array, value, compareFn = defaultCompare) => {
  const sortedArray = quickSort(array); //first thing is to sort the array
  let low = 0, //set the low pointer
    high = sortedArray.length - 1; //set the high pointer

  //while `low` is lower than `high`
  while (lesserOrEquals(low, high, compareFn)) {
    const middle = Math.floor((low + high) / 2), //finding the middle index
      element = sortedArray[middle];
    if (compareFn(element, value) === compare.LESS_THAN) {
      low = middle + 1;
    } else if (compareFn(element, value) === compare.BIGGER_THAN) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  return DOES_NOT_EXIST;
};

const lesserOrEquals = (a, b, compareFn) => {
  const comp = compareFn(a, b);
  return comp === compare.LESS_THAN || comp === compare.BIGGER_THAN;
};
