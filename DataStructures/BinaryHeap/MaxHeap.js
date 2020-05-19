import { MinHeap } from "../../all.js";
import { defaultCompare, reverseCompare } from "../../utils.js";

/**
 * The only difference between `MinHeap` and `MaxHeap` is that whenever we perform a > (more than) comparison, we will change it to use the < (less than) comparison.
 * we can extend the MinHeap class to inherit all the code we created ,just need to reverse the comparison instead of duplicating the whole code ,
 * means instead of comparing a with be, we can compare b with a .
 */
export class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = reverseCompare(compareFn);
  }
}
