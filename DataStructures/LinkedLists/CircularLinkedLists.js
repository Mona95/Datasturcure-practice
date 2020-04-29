import { LinkedList } from "./LinkedList";
import { defaultEquals } from "../../utils";
import { Node } from "./node/Node.js";

/**
 * A circular linked list can have only one reference direction (as with a linked list) or a double reference (as with a doubly linked li
 * The only difference between a circular linked list and a linked list is that
 *  the last element's next (tail.next) pointer does not make a reference to undefined,
 * but to the first element (head).
 * A doubly circular linked list has tail.next pointing to the head element, and head.prev pointing to the tail element:
 */

//CircularLinkedList doesn't need any additional properties,
//we can simply extend LinkedList
export class CircularLinkedList extends LinkedList {
  constructor(head, count, equalsFn = defaultEquals) {
    super(head, count, equalsFn);
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          node.next = this.head; //its a circular linkedlist and we have only one element, so node.next should point to itself
        } else {
          node.next = current;
          current = this.getElementAt(this.size()); //need to update the last item as well
          this.head = node;
          current.next = this.head; //last element pointed to head
        }
      } else {
        previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          const removed = this.head;
          current = this.getElementAt(this.size()); //last element
          this.head = this.head.next;
          current.next = this.head;
          current = removed; //update the reference of the current variable
        }
      } else {
        // no need to update last element for circular list
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return false;
  }
}
