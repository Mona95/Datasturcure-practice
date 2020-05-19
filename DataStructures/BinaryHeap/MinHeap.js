import { defaultCompare } from "../../utils.js";

export class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.heap = []; // store the values with array
  }
}
