import { defaultToString } from "../../utils.js";

/**
 * HashTable(HastMap)
 * Hashing consists of finding a value in a data structure in the shortest time possible.
 *  normally, if we want to get a value from a data structure (using a get method), we need to iterate through the structure until we find it.
 *  When we use a hash function, we already know which position the value is in, so we can simply retrieve it. A hash function is a function that,
 *  given a key, will return an address in the table where the value is.
 * lets imagine like this :
 *  Key => (Hash Function) => Hash Value => Hash Table
 * based on the given key, Has Function defines the Hash Value, using Hash Value gives us the exact position of that element in Hash Table and we can retrieve the value .
 */

class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  put(key, value) {}
  remove(key) {}
  get(key) {}
}
