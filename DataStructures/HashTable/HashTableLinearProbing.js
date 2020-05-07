import { defaultToString } from "../../utils.js";
import { HashTable } from "../../all.js";
import { ValuePair } from "../Dictionary/Dictionary.js";

/**
 * Another technique of collision resolution is linear probing.
 *  It is called linear because the collision is handled in a way the values will be stored directly in the table,
 *  not in a separate data structure.
 * When we try to add a new element, if the position of the hash is already occupied, then we will try position +1. If position +1 is occupied, then we will try position + 2, and so on, until we find a free position in the hash table.
 * Let's imagine we have a hash table with some values already in it and we want to add a new key and value.
 * We calculate the hash for this new key and we check whether the position for the hash is already occupied. If it is not occupied, we add the value in the correct position.
 * If it is occupied, then we iterate the hash until we find a free spot.
 * https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/ca0d229b-6827-40a6-8df1-7c6ee30137b1.png
 * in Linear Probing , we have two approach for removing an element.
 * lazy or soft deletion : We use a special value (flag) to indicate that the key-value was deleted.https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/11df56a0-2824-4efb-9167-02b9257f245d.png
 *  move one or more elements to a backward position, shifting (key,value) within the hash table. https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/5adf38dc-3075-448c-99e5-5fb3e269e2ee.png
 *
 * in this class we will implement the second approach:
 */

export class HashTableLinearProbing extends HashTable {
  constructor(toStrFn = defaultToString) {
    super();
    this.toStrFn = toStrFn;
    this.table = {};
  }
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key),
        element = this.table[position];
      if (element == null) {
        this.table[position] = new ValuePair(key, value);
      } else {
        let index = position + 1;
        while (this.table[index] != null) {
          index++;
        }
        this.table[index] = new ValuePair(key, value);
      }
      return true;
    }
    return false;
  }
  get(key) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        return this.table[position].value;
      }
      let index = position + 1;
      while (this.table[index] != null && this.table[index].key !== key) {
        //increasing index as long as the position in hashtable is not empty and key is not equal
        index++;
      }
      if (this.table[index] != null && this.table[index].key === key) {
        return this.table[index].value;
      }
    }
    return undefined;
  }
  remove(key) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        delete this.table[position];
        this.verifyRemoveSideEffect(key, position);
        return true;
      }
      let index = position + 1;
      while (this.table[index] != null && this.table[index].key !== key) {
        index++;
      }
      if (this.table[index] != null && this.table[index].key === key) {
        delete this.table[index];
        this.verifyRemoveSideEffect(key, index);
        return true;
      }
    }
    return false;
  }
  /**
   * Method is responsible to verify whether the removal element has any side effects.
   * because while removing, we do not know if there are more elements with the same hash in a different position
   * logic of the method :
   *  When a free spot is found, it means the elements are in place and no moves (or more moves) are necessary.
   *  While iterating the following elements,we need to calculate the hash for the element of the current position.
   *  If the hash of the current element is lesser or equal to the original hash or if the hash of the current element is lesser or equal to the removedPosition (which is the hash of the last removed key),
   *  it means we need to move the current element to the removedPosition .
   *  Doing so, we can delete the current element (since it was copied to the removedPosition).
   *  We also need to update the removedPosition to the current index, and we repeat the process.
   * @param {} key => the key that was removed
   * @param {*} position => the position in which the key was removed
   */
  verifyRemoveSideEffect(key, removedPosition) {
    const hash = this.hashCode(key);
    let index = removedPosition + 1;
    while (this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].key);
      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index];
        delete this.table[index];
        removedPosition = index;
      }
      index++;
    }
  }
}
