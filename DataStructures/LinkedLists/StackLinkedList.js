import { DoublyLinkedList } from "./DoublyLinkedList.js";
/**
 * We can also use the LinkedList class and its variations as internal data structures
 *  to create other data structures such as stack, queue, and deque.
 */

export class StackLinkedList {
  constructor() {
    /**
     * for `StackLinkedList` instead of using object or array, we use `DoublyLinkedList`
     * the reason for using doublylinkedlist is that for the stack,we will be inserting elements at the
     * end of the list,and removing them from the end too (LIFO), in doublylinkedlist we have a direct
     * referene to last element(this.tail) so we don't need to interate all over the list to reach it.
     * keeping the cost at O(1)
     */
    this.items = new DoublyLinkedList();
  }
  push(element) {
    return this.items.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return false;
    }
    return this.items.removeAt(this.size() - 1);
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    //we can't simply use `this.items.getTail()` while for insertion in this stack
    //we didn't use insert method.(in insert method we set this.tail and update the last element)
    //but here in stacklinkedlist we simply are using push method
    return this.items.getElementAt(this.size() - 1).element;
  }
  isEmpty() {
    return this.items.isEmpty();
  }
  size() {
    return this.items.size();
  }
  clear() {
    this.items.clear();
  }
  toString() {
    return this.items.toString();
  }
}
