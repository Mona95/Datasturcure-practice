import { defaultToString } from "../../utils.js";
import { ValuePair } from "../Dictionary/Dictionary.js";

/**
 * HashTable(HastMap)
 * Hashing consists of finding a value in a data structure in the shortest time possible.
 *  normally, if we want to get a value from a data structure (using a get method), we need to iterate through the structure until we find it.
 *  When we use a hash function, we already know which position the value is in, so we can simply retrieve it. A hash function is a function that,
 *  given a key, will return an address in the table where the value is.
 * lets imagine like this :
 *  Key => (Hash Function) => Hash Value => Hash Table
 * based on the given key, Has Function defines the Hash Value, using Hash Value gives us the exact position of that element in Hash Table and we can retrieve the value .
 * the Hash Function we will use is called a lose-lose hash function, in which we simply sum up the ASCII values of each character of the key length
 */

export class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  loseloseHashCode(key) {
    if (typeof key === "number") {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      //generate a number based on the sum of each char ASCII value
      hash += tableKey.charCodeAt(i);
    }
    //to work with lower numbers we must use the rest of the division of the hash,
    //number is arbitrary, this will avoid working with very big numbers
    return hash % 28;
  }
  hashCode(key) {
    return this.loseloseHashCode(key);
  }
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key); //for the given key, we need to find a position in hash table
      this.table[position] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
  remove(key) {
    const hash = this.hashCode(key),
      valuePair = this.table[hash];
    if (valuePair != null) {
      delete this.table[hash];
      return true;
    }
    return false;
  }
  get(key) {
    /**
     * The HashTable and Dictionary classes are very similar. The difference is that in the Dictionary class,
     *  we store the ValuePair in the key property of the table (after it was transformed to a string), and in the HashTable class,
     *  we generate a number from the key (hash) and store the ValuePair in the hash position
     */
    const valuePair = this.table[this.hashCode(key)];
    return valuePair ? valuePair.value : undefined;
  }
}
