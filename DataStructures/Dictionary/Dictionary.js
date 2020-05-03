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

export class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {}; // we will store [key,value] pairs as table[key] = {key,value}
  }
  set(key, value) {}
  remove(key) {}
  hasKey(key) {}
  get(key) {}
  clear() {}
  size() {}
  isEmpty() {}
  keys() {}
  values() {}
  keyValues() {}
  forEach(callbackFn) {}
}
