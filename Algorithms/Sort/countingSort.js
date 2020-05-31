/**
 * The Counting sort
 * uses a temporary array that will store how many times each element appears in the original array.
 * after all the elements are counted, the temprorary array is sorted and it can be iterated to construct the
 * resultant sorted array.
 * it is a good algorithm to sort integers .
 * complexity of algorithm => O(n+k) which k is the size of the temporary counting array
 */

export const countingSort = (array) => {
  //no need to sort an array with single/none element
  if (array.length < 2) {
    return array;
  }
  const maxValue = findMaxValue(array);

  //for this algorithm we need to create the counts array, starting from index 0 until the maximum value+1
  const counts = new Array(maxValue + 1);

  //iterate each position of the array and will increment the counting of the element in the counts array
  array.forEach((element) => {
    //just to make sure initializing each count with 0
    if (!counts[element]) {
      counts[element] = 0;
    }
    counts[element]++;
  });

  //to assign values to their correct index
  let sortedIndex = 0;
  counts.forEach((count, i) => {
    while (count > 0) {
      array[sortedIndex++] = i;
      i--;
    }
  });
  return array;
};

//finding max value of the array (the k value)
const findMaxValue = (array) => {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};
