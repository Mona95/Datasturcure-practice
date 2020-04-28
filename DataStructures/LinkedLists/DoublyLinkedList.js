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
}
