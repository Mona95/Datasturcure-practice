/**
 * The Queue is an ordered collection of items that follows the first in, first out (FIFO),
 *  also known as the first come, first served, principle.
 *  The addition of new elements in a queue is at the tail, and the removal is from the front.
 *  The newest element added to the queue must wait at the end of the queue.
 */

export class Queue {
  constructor() {
    this.count = 0; //Control the size of queue
    this.lowestCount = 0; //because of FIFO we need to track the first element (always lowest index includes first element)
    this.items = {};
  }
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }
  dequeue() {
    // removes the first element from the queue,(the item that is in the front of the queue)
    if (this.isEmpty()) {
      return `Queue is Empty`;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  peek() {
    //returns the first element in the queue (which is also at the top of queue)
    if (this.isEmpty()) {
      return `Queue is Empty`;
    }
    return this.items[this.lowestCount];
  }
  toString() {
    if (this.isEmpty()) {
      return `Queue is Empty`;
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }
  size() {
    return this.count - this.lowestCount;
  }
  clear() {
    this.count = 0;
    this.items = {};
    this.lowestCount = 0;
  }
}
