import { LinkedList } from "./LinkedList.js";
import { defaultCompare, defaultEquals } from "../../utils.js";

/**
 * A sorted linked list is a list that keeps its elements sorted.
 * To keep all elements sorted, instead of applying a sorting algorithm,
 *  we will insert the element at its correct position so as to keep the list always sorted.
 */

const compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

//All the methods are similar to LinkedList. just in insertion
//we need to override it becase the list should be sorted and inserting in any place is not allowed.
export class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }
  /**
   * `index = 0` because we don't want to allow inserting elements at any index
   * the position to insert the element will be controlled internally.
   * @param {*} element
   * @param {*} index
   */
  insert(element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    }
    //we need to retrieve the correct index to insert
    const pos = this.getIndexNextSortedElement(element);
    return super.insert(element, pos);
  }
  //we iterate through the list,until we find a a position to insert the element
  //or until all the elements have been interated
  getIndexNextSortedElement(element) {
    let current = this.head,
      i = 0;
    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element);
      // When the element we want to insert in the list is less than the element of the current list,
      // we have found the position to insert
      if (comp === compare.LESS_THAN) {
        return i;
      } else {
        current = current.next;
      }
    }
    return i;
  }
}
