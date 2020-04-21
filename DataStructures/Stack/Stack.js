/**
 * The Stack is an ordered collection of items that follows the last in, first out (LIFO) principle.
 *  The addition of new items or the removal of existing items takes place at the same end.
 *  The end of the stack is known as the top, and the opposite side is known as the base.
 *  The newest elements are near the top, and the oldest elements are near the base.
 */

//Array-Based Stack
export class StackArray {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
}
