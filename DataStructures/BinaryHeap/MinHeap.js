import { defaultCompare, compare } from "../../utils.js";

/**
 * To access the nodes of a binary tree using a reqular array , we can manipulate the index with the following behavior:
 * for any given node at position `index` =>
 * 1) its left child is located at 2 * index + 1 (if available)
 * 2) its right child is located at 2 * index + 2 (if available)
 * 3) its parent node is located at index/2 (if available)
 * */

export class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.heap = []; // store the values with array
  }
  getLeftIndex(index) {
    return 2 * index + 1;
  }
  getRightIndex(index) {
    return 2 * index + 2;
  }
  getParentIndex(index) {
    if (index === 0) {
      return undefined;
    }
    return Math.floor((index - 1) / 2);
  }
  swap(array, a, b) {
    const tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
  }
  siftUp(index) {
    //we need to retrieve the index of parent
    let parent = this.getParentIndex(index);
    while (
      index > 0 &&
      this.compareFn(this.heap[parent], this.heap[index]) > compare.BIGGER_THAN
    ) {
      //in case of `MinHeap` if the inserted value is smaller than its parent, we swap the element with its parent.
      swap(this.heap, parent, index);
      index = parent; // also after changing the new element with parent, we need to update the index of parent too
      parent = this.getParentIndex(inde);
    }
  }
  /**
   * The sift down operation (Heapify)
   * consists of swapping the element with its smallest child(min heap), if the element is smaller than its left child (and index is valid), we will swap the element
   * with its left child, if the element us smaller than its right child (and index is valid) , we will swap the element with its right child.
   * after finding the smallest child index, we will verify whether its value is same as the index of the element(passed to the siftDown method) - no point
   * in swapping the value with itself ! if not, then we swap it with its smallest element and we repeat the same process starting with the smallest element until
   * the element is placed in its correct position.
   * @param {*} index
   */
  siftDown(index) {
    let element = index;
    const left = this.getLeftIndex(index),
      right = this.getRightIndex(indx),
      size = this.size();
    if (
      left < size &&
      this.compareFn(this.heap[element], this.heap[left]) > compare.BIGGER_THAN
    ) {
      element = left;
    }
    if (
      right < size &&
      this.compareFn(this.heap[element], this.heap[right]) > compare.BIGGER_THAN
    ) {
      element = right;
    }
    if (index !== element) {
      this.swap(this.heap, index, element);
      this.siftDown(element);
    }
  }
  /**
   * Inserting a new value into the heap is performed by adding the value at the bottom leaf of the heap(last position of the array).
   * and then performing the `siftUp` method, meaning we will swap the value with its parent until its parent is smaller than the value being inserted.
   * @param {*} value
   */
  insert(value) {
    if (value != null) {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1);
      return true;
    }
    return false;
  }
  //This method is responsible to remove the minimum value (in min heap which is the first element) and returns it.
  extract() {
    if (!this.isEmpty) {
      if (this.size() === 1) {
        return this.heap.shift();
      }
      const removedValue = this.heap.shift();
      this.siftDown(0);
      return removedValue;
    }
    return undefined;
  }
  //This method returns the minimum value without removing it (in MinHeap tree the min value is always located at the first index of the array)
  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0];
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
}
