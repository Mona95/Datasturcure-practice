import { defaultEquals } from "../../utils.js";
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
 */

//To Represent the head and other Elements we need a helper class
//linkedList contains a Node which has two parts (value,next poiner)
class Node {
  constructor(element) {
    this.element = element; //the value that we want to add in the list
    this.next = undefined; //the pointer that contains the link to the next Node in list
  }
}

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
  insert(element, position) {}
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
  remove(element) {}
  //find a specific element in the linkedList
  indexOf() {}
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
    return this.head == null;
  }
  size() {}
  // This method returns a string representation of the linked list. As the list uses a Node class as an element,
  // we need to overwrite the default toString method inherited from the JavaScript Object class to output only the element values.
  toString() {}
}
