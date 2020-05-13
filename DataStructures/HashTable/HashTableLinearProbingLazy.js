import { HashTable } from "../../all.js";
import { defaultToString } from "../../utils.js";
import { ValuePair } from "../Dictionary/Dictionary.js";

/**
 * Here is another technique to solve collision,which is called soft/lazy deletion.
 * in this approach, we will indicate a special flag for the removed key-value pairs instead of actually deleting the element .
 * so at the we are gonna end up with a hashtable with several deleted spots,
 *  so each time with iterating through the hashtable , we will see some positions actually are filled with that flag ,
 * an important thing in soft deletion is : Deleted locations are treated as empty when inserting and as occupied during a search.
 * https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/11df56a0-2824-4efb-9167-02b9257f245d.png
 */

export class HashTableLinearProbingLazy extends HashTable {
  constructor(toStrFn = defaultToString) {
    super();
    this.toStrFn = toStrFn;
    this.table = {};
  }
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      //if the element is null or if its not null but it has the isDeleted flag, means we can insert new element in it.
      if (
        this.table[position] == null ||
        (this.table[position] != null && this.table[position].isDeleted)
      ) {
        this.table[position] = new ValuePair(key, value);
      } else {
        let index = position + 1;
        while (this.table[index] != null && !this.table[index].isDeleted) {
          index++;
        }
        this.table[index] = new ValuePair(key, value);
      }
      return true;
    }
    return undefined;
  }
  get(key) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key && !this.table[position].isDeleted) {
        return this.table[position].value;
      }
      let index = position + 1;
      //until the element is not null and we are in a deleted flag element or the key of the current element
      // is not equal to the key we want, we need to continue the iteration
      while (
        this.table[index] != null &&
        (this.table[index].isDeleted || this.table[index].key != key)
      ) {
        if (this.table[index].key === key && this.table[index].isDeleted) {
          return undefined;
        }
        index++;
      }
      //again for returning the correct value we need to check that the current position doesn't have isDeleted:true
      if (
        this.table[index] != null &&
        this.table[index].key === key &&
        !this.table[index].isDeleted
      ) {
        return this.table[index].value;
      }
    }
    return undefined;
  }
  /**
   * remove method in soft deletion doesnt actually remove the valuePair,
   * instead of removing, it just adds a flag as isDeleted, so that position of hashTable will be considered as a deleted element
   * @param {} key
   */
  remove(key) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key && !this.table[position].isDeleted) {
        this.table[position].isDeleted = true;
        return true;
      }
      let index = position + 1;
      while (
        this.table[index] != null &&
        (this.table[index].isDeleted || this.table[index].key != key)
      ) {
        index++;
      }
      if (
        this.table[index] != null &&
        this.table[index].key === key &&
        !this.table[index].isDeleted
      ) {
        this.table[index].isDeleted = true;
        return true;
      }
    }
    return false;
  }
  size() {
    let count = 0;
    Object.value(this.table).forEach((valuePair) => {
      //in counting , the `isDeleted` should not be counted .
      count += ValuePair.isDeleted === true ? 0 : 1;
    });
    return count;
  }
}
