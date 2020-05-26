/**
 * The Quick Sort is probably the most used sorting algorithm .
 * complexity of the algorithm => O(nlogn)
 *
 * the steps of this algorithm is as follows :
 * 1- we need to select a value from the array called `pivot`, which will be the value at the middle of the array.
 * 2- we will create two pointers(references), the left-hand side one will point to the first value of the array and
 * the right-hand side one will point to the last value of the array.
 * we will move the left pointer until we find a value that is bigger than the pivot, and we also move the right pointer
 * until we find a value that is less than the pivot and swap them.
 * we repeat this process until the left pointer passes the right pointer .
 * this step helps us to have the values lesser than pivot before the pivot and the values bigger than pivot on the right side
 * of the pivot, (this is called the `partition` operation)
 * 3- next the algorithm repeats the previous two steps for the smaller arrays(subarrays with smaller values and subarrays
 * with greater values) until the arrays are completely sorted
 */

import { defaultCompare, compare, swap } from "../utils";

export const quickSort = (array, compareFn = defaultCompare) => {
  return quick(array, 0, array.length - 1, compareFn);
};

const quick = (array, leftPointer, rightPointer, compareFn) => {
  //index variable will help us separate the subarray with smaller and greater values so that
  //we can recrusively call the quick funcion again
  let index;
  if (array.length > 1) {
    //first call here passes the complete array,after the first call,here subarrays will be passed
    index = partition(array, leftPointer, rightPointer, compareFn);
    if (leftPointer < index - 1) {
      //subarray with smaller values exists
      quick(array, leftPointer, index - 1, compareFn);
    }
    if (index < rightPointer) {
      //subarray with greater values exists
      quick(array, index, rightPointer, compareFn);
    }
  }
  return array;
};

const partition = (array, left, right, compareFn) => {
  const pivot = Math.floor((right + left) / 2), //the middle element of the array
    i = left, //initializing the left pointer
    j = right; //initializing the right pointer

  //while the left and right pointers do not cross each other, we will execute the partition process
  while (i <= j) {
    while (compareFn(array[i], pivot) === compare.LESS_THAN) {
      //shifting left pointer until finding an element that is greater than the pivot
      i++;
    }
    while (compareFn(array[j], pivot) === compare.BIGGER_THAN) {
      //shifting right pointer untill finding an element that is lesser than the pivot
      j--;
    }
    //when the left pointer is greater than the pivot and the right pointer is smaller than the pivot
    //we will check whether the left pointer index is bigger than the right pointer index.meaning whether the left value
    //is greater than the right value, we will swap these values and shifting the pointers
    if (i <= j) {
      swap(array, i, j);
      i++;
      j++;
    }
  }
  //we return the index of the left pointer that will be used to create the subarrays in line
  return i;
};
