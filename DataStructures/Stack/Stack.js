/**
 * The Stack is an ordered collection of items that follows the last in, first out (LIFO) principle.
 *  The addition of new items or the removal of existing items takes place at the same end.
 *  The end of the stack is known as the top, and the opposite side is known as the base.
 *  The newest elements are near the top, and the oldest elements are near the base.
 *  we are only able to execute the actions for the item at top of the stack (ILFO)
 */

//Array-Based Stack
export class StackArray {
  constructor() {
    this.items = [];
    this.top = 0; //points to the top element index
  }
  push(element) {
    this.items[this.top] = element;
    this.top++;
  }
  pop() {
    if (!this.isEmpty()) {
      this.top--;
      return this.items.pop();
    } else {
      return `Stack is Empty,You can not remove`;
    }
  }
  peek() {
    return this.items[this.top - 1];
  }
  isEmpty() {
    return this.top === 0;
  }
  size() {
    return this.top;
  }
  clear() {
    this.items = [];
  }
  print() {
    let top = this.top - 1; // because top points to index where new element to be inserted
    while (top >= 0) {
      console.log(this.items[top]);
      top--;
    }
  }
}
