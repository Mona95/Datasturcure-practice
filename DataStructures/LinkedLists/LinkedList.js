import { defaultEquals } from "../../utils.js";
import { Node } from "./node/Node.js";
/**
 * Linked lists store a sequential collection of elements but, unlike arrays,
 *  in linked lists the elements are not placed contiguously in memory.
 *  Each element consists of a node that stores the element itself and also a reference (also known as a pointer or link) that points to the next element.
 * One of the benefits of a linked list over a conventional array is that we do not need to shift elements over when adding or removing them. However,
 * we need to use pointers when working with a linked list and, because of this,
 *  we need to pay some extra attention when implementing a linked list. In the array, we can directly access any element at any position;
 *  in the linked list,
 *  if we want to access an element from the middle,
 *  we need to start from the beginning (head) and iterate the list until we find the desired element.
 *
 * linkedlist node: [element,next]
 * next points to next node
 */

export class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0; //number of elements in the linkedList
    this.head = undefined; //to store the first element
    this.equalsFn = equalsFn; //to compare equality between the elements of the linkedList
  }
  /**
   *adds new element to the end of the list, there can be two scenarios:
   *one where the list is empty and we are adding its first element,
   *or one where the list is not empty and we are appending elements to it.
   */
  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        //get the last item (to add element to the end of the list, first we need to find the last item)
        current = current.next;
      }
      current.next = node; //assign next to new element
    }
    this.count++;
  }
  //This method inserts a new element at a specified position in the list.
  //It is very important to have variables referencing the nodes
  //we need to control so that we do not lose the link between the nodes.
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      //add on first position
      if (index === 0) {
        let current = this.head;
        //because the first element is head , and if we wanna add
        //new item in head, so first we have to assign the next of node to this.head
        //in this case node will be positioned before head (will be first element)
        node.next = current;
        this.head = node;
      } else {
        //inserted node should be between two node, the current one and the previous one
        let previous = this.getElementAt(index - 1);
        let current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
  //This method returns the element of a specific position in the list. If the element does not exist in the list, it returns undefined.
  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      for (let i = 0; i < index && current != null; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }
  remove(element) {
    let elementIndex = this.indexOf(element);
    return this.removeAt(elementIndex);
  }
  //find a specific element in the linkedList
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
  /**
   *we need to variable for this method
   *current = holds the current node
   *previous = holds one node before the current
   *for removing, the logic is, assiging previous.next to current.next
   *This way, the current node will be lost in the computer memory and will be available for cleaning by the garbage collector.
   * @param {*} index
   */
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      //removing first item
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.count;
  }
  getHead() {
    return this.head;
  }
  // This method returns a string representation of the linked list.
  //As the list uses a Node class as an element,
  // we need to overwrite the default toString method inherited from the JavaScript Object class to output only the element values.
  toString() {
    if (this.head == null) {
      return ``;
    }
    let objString = `${this.head.element}`,
      current = this.head.next;
    for (let i = 0; i < this.size() && current != null; i++) {
      objString = `${objString}, ${current.element}`;
      current = current.next;
    }
    return objString;
  }
}
