import { defaultEquals } from "../../utils";
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
export class Node {
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
  //find a specific element in the linkedList
  indexOf() {}
}
