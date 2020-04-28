//To Represent the head and other Elements we need a helper class
//linkedList contains a Node which has two parts (value,next poiner)
export class Node {
  constructor(element) {
    this.element = element; //the value that we want to add in the list
    this.next = undefined; //the pointer that contains the link to the next Node in list
  }
}
