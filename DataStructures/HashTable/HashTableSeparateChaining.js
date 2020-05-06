import { defaultToString } from "../../utils.js";
import { LinkedList, HashTable } from "../../all.js";
import { ValuePair } from "../Dictionary/Dictionary.js";

/**
 * Handling collisions between hashtables,
 * sometimes ,different keys can have same hash value, this is called a collision.
 * since we are trying to set different key-value pairs to same position of the HashTable instance,
 * need to find a way of handling collisions.
 * without handling collisions, when hash values are same, only and only the last element inserted will be saved and stayed in hashtable.
 *
 * Separate Chaining : is a technique consists of creating a linked list for each position of the table and storing elements in it,
 * however it requires additional memory outside the HashTable instance.
 * https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/f552c4d1-925e-4c3d-b379-b605174ed10f.png
 */

export class HashTableSeparateChaining extends HashTable {
  constructor(toStrFn = defaultToString) {
    super();
    this.toStrFn = toStrFn;
    this.table = {};
  }
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        //we will initialize each element with an instance of LinkedList
        this.table[position] = new LinkedList();
      }
      this.table[position].push(new ValuePair(key, value));
      return true;
    }
    return false;
  }
  get(key) {
    const position = this.hashCode(key),
      linkedList = this.table[position];
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      //we need to iterate through the whole list, and in the linked list the last cuurent.next points to null
      //so when current is null means iterating is finished.
      while (current != null) {
        //node of the linkedlist contains element and next pointer , element also contains a value pair(key,value)
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }
    return undefined;
  }
  remove(key) {
    const position = this.hashCode(key),
      linkedList = this.table[position];
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while (current != null) {
        //first we need to find the exact element for removing
        if (current.element.key === key) {
          linkedList.remove(current.element);
          //if after removing the element, linkedlist got empty , we will delete that position in hashtable
          if (linkedList.isEmpty()) {
            delete this.table[position];
          }
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }
}
