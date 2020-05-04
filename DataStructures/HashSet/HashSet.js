import { defaultToString } from "../../utils.js";

/**
 * The HashSet data structure consists of a set, but to insert, remove or get elements, we use a hash function,
 * we can reuse all the code we implemented for Hashtable, but the difference is that instead of adding a key-value pair,
 * we will insert only the value not the key.
 * set stores only the unique values, not the repeated ones.
 */

export class HashSet {
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
      hash += tableKey.charCodeAt(i);
    }
    return hash % 28;
  }
  hashCode(key) {
    return this.loseloseHashCode(key);
  }
  put(element) {
    if (element != null) {
      if (!this.has(element)) {
        const position = this.hashCode(element);
        this.table[position] = element;
        return true;
      } else {
        return `Element already exists`;
      }
    }
    return false;
  }
  remove(element) {
    const hash = this.hashCode(element),
      value = this.table[hash];
    if (value != null) {
      delete this.table[hash];
      return true;
    }
    return false;
  }
  get(element) {
    const value = this.table[this.hashCode(element)];
    return value ? value : undefined;
  }
  has(element) {
    if (element != null) {
      if (this.table[this.hashCode(element)] != null) {
        return true;
      } else {
        return false;
      }
    }
  }
}
