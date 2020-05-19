/**
 * The Heap Sort Algorithm
 * consists of three steps:
 * 1- create a max heap using the array to be sorted as the source .
 * 2- after creating the max heap, the largest value will be sorted in the first index of the heap.we will replace the first value with the last
 * value of the heap, decreasing the size of the heap by 1.
 * 3- finally we heapify(siftDown) the root of the heap and repeat step 2 until the size of the heap is equal to 1.
 *
 * we can use the max heap results in an array sorted in ascendin order(from smallest to biggest). if we want the array to be sorted in
 * descending order, we can use the min heap.
 *
 * heapify function won't be executed on leaf level
 * array.length/2 => the place where you can start heapifying
 * having heap size (array size) is important because we need to check if the indexes are not passing the actual size of the array.
 */

function heapSort(array, compareFn = defaultCompare) {
  let heapSize = array.length;
  buildMaxHeap(array, compareFn);
  while (heapSize > 1) {
    swap(array, 0, --heapSize);
    heapify(array, 0, heapSize, compareFn);
  }
  return array;
}

function buildMaxHeap(array, compareFn) {
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heapify(array, i, array.length, compareFn);
  }
  return array;
}
