import { defaultToString } from "../../utils.js";
/**
 * A dictionary is used to store [key, value] pairs, where the key could be used to find a particular element.
 *  A dictionary is very similar to a set; a set stores a [key, key] collection of elements, and a dictionary stores a [key, value] collection of elements
 *  A dictionary is also known as a map, symbol table, and an associative array.
 * In computer science, dictionaries are often used to store the reference address of objects.
 * In a dictionary, the ideal would be to store keys of type string and any type of value (from primitive type such as numbers, a string, to complex objects).
 *  However, because JavaScript is not strongly typed, we cannot guarantee the key will be a string. For this reason,
 *  we need to transform whatever object is passed as the key into a string to make it easier to search and retrieve values from the Dictionary class
 */

/**
 * elements in Dictionary include key and value
 * so we declare an idividual class definition for them
 */
export class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

export class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {}; // we will store [key,value] pairs as table[key] = {key,value}
  }
  //method add a new element to dictionary,if `key` already exists, the old value will be overwritten with the new one.
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
  //method removes an element inside a dictionary,uses `key` to find the element
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }
  //checks if the current dictionary has an element with the provided `key`
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }
  get(key) {
    let valuePair = this.table[this.toStrFn(key)];
    return valuePair ? valuePair.value : undefined;
  }
  clear() {
    this.table = {};
  }
  size() {
    return Object.keys(this.table).length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  //method returns and array of value pairs [key,value]
  keyValues() {
    return Object.values(this.table);
  }
  //method returns an array of all `keys`
  keys() {
    return this.keyValues().map((valuePair) => valuePair.key);
  }
  //method returns an array of all `values`
  values() {
    return this.keyValues().map((valuePair) => valuePair.value);
  }
  //method iterates over all the value pairs in dictionary
  //This method can also be interrupted in case the callback function returns false (similar to the `every` method from the Array class).
  forEach(callbackFn) {
    const valuePairs = this.keyValues();
    //using for.loop to have the ability of breaking the loop
    for (let i = 0; i < valuePairs.length; i++) {
      let result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;
    }
    return objString;
  }
}
