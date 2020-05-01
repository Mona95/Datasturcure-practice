/**
 * A Set is a collection of items that are unordered and consists of unique elements (meaning they cannot be repeated).
 * This data structure uses the same mathematical concept as finite sets,
 *  but it is applied to a computer science data structure.
 * In mathematics, a set is a collection of distinct objects.
 * There is also the null set concept. A set with no element is called a null set or an empty set.
 * You can also imagine a set as an array with no repeated elements and no concept of order.
 * so the important thing in Set Data Structure is having unordered unique elements .
 */

export class Set {
  constructor() {
    this.items = {}; //javascript doesn't allow you to have similar keys, so choosing an object for items in Set is better.
  }
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element); //just to be sure that `hasOwnProperty` exists in Object.
    //we can also use `this.items.hasOwnProperty` but some lint tools throw an error
  }
  clear() {
    this.items = {};
  }
  size() {
    return Object.keys(this.items).length;
  }
  //An Alternative way to find the size of set
  sizeLegacy() {
    let count = 0;
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  }
  //returns an array of the elements of set
  values() {
    return Object.values(this.items);
  }
  //An Alternative way to find the values in a set
  valuesLegacy() {
    let values = [];
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(this.items[key]);
      }
    }
    return values;
  }
}
