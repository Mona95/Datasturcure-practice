/**
 * The Insertion Sort algorithm builds the final sorted array one value at a time.it assumes that
 * the first element is already sorted,then a comparison with the second value is performed ( means should the second
 * value stays in its place or it should be inserted in the first value, if it is bigger than first value , it will be inserted to
 * first position) , the first two values will get sorted, then the comparison will take place with the third value( that is
 * it should be inserted in the first, second, third position? ) and so on.
 * {@link https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/ded3ffc7-a984-4c8e-acf9-2078d07bbb97.png}
 */

import { defaultCompare, compare } from "../../utils";

export const insertionSort = (array, compareFn = defaultCompare) => {
  let { length } = array,
    temp;

  //iterating the array to find the correct place for the value of i
  //started from the second position,while the first one already considered as sorted.
  for (let i = 1; i < length; i++) {
    let j = i;
    //storing the value of the i position of the array in a temporary variable so that
    //we can insert it in the correct position later.
    temp = array[i];
    while (j > 0 && compareFn(array[j - 1], temp) === compare.BIGGER_THAN) {
      //shift the previous value to the current position
      array[j] = array[j - 1];
      //decreasing the value of j, while we move backwards to find the correct position of current value in each iteration
      j--;
    }
    //inserting the value in its correct position
    array[j] = temp;
  }
  return array;
};
