import { defaultEquals } from "../../utils.js";
import { Node } from "./node/Node.js";
import { LinkedList } from "./LinkedList.js";

/**
 * There are different types of linked list. In this section, we are going to cover the doubly linked list.
 * The difference between a doubly linked list and a normal linked list is that in a linked list we make the link from one node to the next one only,
 *  while in a doubly linked list, we have a double link:
 * one for the next element and one for the previous element
 * The doubly linked list provides us with two ways to iterate the list: from the beginning to its end or vice versa.
 * In the singly linked list, when you are iterating the list and you miss the desired element,
 *  you need to go back to the beginning of the list and start iterating it again.
 *  This is one of the advantages of the doubly linked list.
 *
 * DoublyLinkedList node: [previous,element,next]
 * next points to next node and prev points to previous node
 */

class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev; //create the difference between linkedList and DoublyLinkedList
  }
}

export class DoublyLinkedList extends LinkedList {
  constructor(count, head, equalsFn = defaultEquals) {
    super(count, head, equalsFn);
    this.tail = undefined; //keep refrence to track last element
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        //if head is undefined, both head and tail should be node
        if (current == null) {
          this.head = node;
          this.tail = node;
        } else {
          //if head is defined, node.next should point to head
          //so this means the current head will be moved and node goes to first position
          node.next = this.head;
          current.prev = node;
          this.head = node;
        }
      } else if (index === this.count) {
        //if node wants to be inserted as the last item of list
        //this means the tail should go to one node before and tail.next should point the new node
        const current = this.getElementAt(this.count - 1);
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        current.prev = node;
        node.prev = previous;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
  removeAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
        //if there is only one item, we need to update tail as well
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current.prev;
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.count--;
      return current.element;
    }
    return false;
  }
}
