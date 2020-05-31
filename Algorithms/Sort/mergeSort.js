/**
 * The Merge Sort is a divide-and-conquer algorithm. the idea behind it is to divide the original array into smaller arrays
 * until each small array has only one position.and then merge these smaller arrays into bigger ones until we have a single
 * big array at the end that is sorted .
 * complexity of this algorithm => O(n log n)
 *
 * because of the divide-and-conquer approach, the merge sort algorithm is also recrusive.
 * we will divide the algorithm in two funcions : the first one will be responsible for dividing the array into smaller ones
 * and evoking the helper function that will perform the sort.
 */

import { defaultCompare, compare } from "../utils";

export const mergeSort = (array, compareFn = defaultCompare) => {
  //as the algorithm uses a recrusive approach, we need a stop point
  //which is if the length of array is less than 1
  if (array.length > 1) {
    let { length } = array,
      //we split the array into two smaller arrays
      middle = Math.floor(length / 2),
      //the left array is composed of elements from index 0 to middle index
      left = mergeSort(array.slice(0, middle), compareFn),
      //the right array is composed of elements from index middle to the end of array
      right = mergeSort(array.slice(middle, length), compareFn);
    //merge function is responsible for merging and sorting the smaller arrays into bigger ones
    array = merge(left, right, compareFn);
  }
  return array;
};

//sorting happens during the merge
const merge = (left, right, compareFn) => {
  let i = 0, //to iterate the left array
    j = 0, //to interate the right array
    result = []; //this array is created for the merge
  while (i < left.length && j < right.length) {
    result.push(
      compareFn(left[i], right[j]) === compare.LESS_THAN
        ? left[i] && i++
        : right[j] && j++
    );
  }
  // because sometimes there is a possibility that elements in left array/right array will be finished by merging them into result
  // we will add every remaining value from the left array to the merged result array and will do the same for the remaining values from the right array.
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
};
