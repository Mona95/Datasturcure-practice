/**
 * The Deque data structure, also known as the double-ended queue,
 * is a special queue that allows us to insert and remove elements from the end or from the front of the queue.
 * the deque is a merger between the queue and the stack data structures.
 * example:
 * Deque => [ back , ... , front ] (Ability to have actions for both elements in back/front)
 * Queue => [ back , ... ] (Ability to have actions only for back(first element))
 * Stack => [ ... , front ] (Ability to have actions only for front(last element))
 * In computer science, a common application of a deque is storing a list of undo operations.
 *  Each time a user performs an operation in the software, the operation is pushed to the deque (just like in a stack).
 *  When the user clicks on the Undo button,
 * the operation is popped from the deque, meaning it is removed from the back. After a predefined number of operations,
 *  the older ones are removed from the front of the deque.
 *  Because the deque implements both principles, FIFO and LIFO
 */

export class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  addFront(element) {
    if (this.isEmpty()) {
      //The element will be added at the back of the deque, which, in this case, will also be the front of the deque.
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      //The second scenario is when an element is removed from the front of the deque,
      // meaning the lowestCount property will have value 1 or higher.
      // In this case, we simply need to decrease the lowestCount property and assign the element to that object key (position).
      this.items[this.lowestCount] = element;
    } else {
      //we need to move all elements to the next position to free the first index.
      // Because we do not want to lose any existing value,
      // we start to iterate the existing values of the items property by its last index,
      // assigning the element from index - 1. After all elements have been moved,
      // the first position will be free and we can overwrite any exiting value with the element we want to add to the deque
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }
  addBack(element) {
    //same as `enqueue` method from `Queue`
    this.items[this.count] = element;
    this.count++;
  }
  removeFront() {
    // same as `dequeue` method from `Queue`
    if (this.isEmpty()) {
      return `Deque is Empty`;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  removeBack() {
    // same as `pop` method from `Stack`
    if (this.isEmpty()) {
      return `Deque is Empty`;
    }
    this.count--;
    const result = this.items[thid.count];
    delete this.items[this.count];
    return result;
  }
  peekFront() {
    // same as `peek` method from `Queue`
    if (this.isEmpty()) {
      return `Queue is Empty`;
    }
    return this.items[this.lowestCount];
  }
  peekBack() {
    // same as `peek` method from `Stack`
    if (this.isEmpty()) {
      return `Stack is Empty`;
    }
    return this.items[this.count--];
  }
}
