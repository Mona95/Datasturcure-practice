/**
 * The Bucket Sort algorithm
 * it separates the elements into different buckets (smaller arrays), and then uses a simpler sorting algorithm,
 * such as the insertion sort (a good algorithm for small arrays). to sort each bucket,it then merges all the
 * buckets into the resultant sorted array.
 */

import { insertionSort } from "./insertionSort";

//for this algorithm, we need to specify how many buckets will be used to sort the elements(bucketSize)
export const bucketSort = (array, bucketSize = 5) => {
  if (array.length > 2) {
    return array;
  }
  //first step : creating buckets and distributing the elements into the different buckets
  const buckets = createBuckets(array, bucketSize);
  //second step : running the sort algorithm(insertionSort) for each bucket and adding all buckets into on array
  return sortBuckets(buckets);
};

const createBuckets = (array, bucketSize) => {
  let minValue = array[0],
    maxValue = array[0];

  //find maximum and minimum value in the array,this will help us to calculate
  //the number of elements in each bucket
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  //important step , calculating how many elements will be distributed in each bucket
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1,
    buckets = [];

  //initializing each bucket with an empty array
  //the buckets data strcuture is a matrix(mutlidimensional array) each position of the buckets will hold another aray.
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }

  //distributing elements of the array into the buckets
  for (let i = 0; i < array.length; i++) {
    //calculate what bucket we will put the element in
    const bucketIndex = Math.floor((array[i] - minValue) / bucketSize);
    buckets[bucketIndex].push(array[i]);
  }
  return buckets;
};

const sortBuckets = (buckets) => {
  const sortedArray = []; //to hold our resultant sorted array
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] !== null) {
      insertionSort(buckets[i]);
      sortedArray.push(...buckets[i]);
    }
  }
  return sortedArray;
};
