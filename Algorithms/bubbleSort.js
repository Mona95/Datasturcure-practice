/**
 * The `bubble sort` algorithm compares every two adjacent values and swaps them if the
 * first one is bigger than the second one.
 * complexity of this algorithm => O(n^2)
 */
import { defaultCompare, compare } from "../utils.js";

/**
 * Each different pass(section) in the whole array made by the outer loop and
 * each comparison between adjacent values is made by the inner loop.
 * @param {*} array
 * @param {*} compareFn
 */
export const bubbleSort = (array, compareFn = defaultCompare) => {
  let me = this,
    { length } = array;
  //first we have an outer loop that will iterate the array from its first position to the last one
  //controlling how many passes are done in the array
  for (let i = 0; i < length; i++) {
    //then, we have an inner loop that will iterate the array, starting from its first position to the second to last value that
    //will actually do the comparison between current value and next one.
    //if we subtract the number of passes from the inner loop, we will avoid all the unnecessary comparisons made by inner loop
    for (let j = 0; j < length - 1 - i; j++) {
      if (compareFn(array[j], array[j + 1]) === compare.BIGGER_THAN) {
        //if the current value is bigger than the next value , we will swap them
        swap(array, j, j + 1);
      }
    }
  }
  return array;
};

const swap = (array, a, b) => ([array[a], array[b]] = [array[b], array[a]]);
