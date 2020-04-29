import { LinkedList } from "./LinkedList";
import { defaultEquals } from "../../utils.js";

/**
 * A sorted linked list is a list that keeps its elements sorted.
 * To keep all elements sorted, instead of applying a sorting algorithm,
 *  we will insert the element at its correct position so as to keep the list always sorted.
 */

const compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? compare.LESS_THAN : compare.BIGGER_THAN;
}

export class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }
}
