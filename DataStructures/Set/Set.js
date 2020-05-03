/**
 * A Set is a collection of items [key, key] that are unordered and consists of unique elements (meaning they cannot be repeated).
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
  //Given two sets, this returns a new set of elements from both of the given sets
  union(secondSet) {
    let unionSet = new Set();
    this.values().forEach((value) => {
      unionSet.add(value);
    });
    secondSet.values().forEach((value) => {
      unionSet.add(value);
    });
    return unionSet;
  }
  // Given two sets, this returns a new set with the elements that exist in both sets
  intersection(secondSet) {
    let intersectionSet = new Set(),
      values = this.values(),
      otherValues = secondSet.values();

    //for optimizing the code, its better to define which set has lesser elements
    // it decreases the times of iterating over the elements if we start with the smaller set.
    let biggerSet = values,
      smallerSet = otherValues;

    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }
    smallerSet.forEach((value) => {
      if (biggerSet.include(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet;
  }
  //Given two sets, this returns a new set with all the elements that exist in the first set and do not exist in the second set
  difference(secondSet) {
    let differenceSet = new Set();
    this.values().forEach((value) => {
      if (!secondSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }
  //This confirms whether a given set is a subset of another set
  subset(secondSet) {
    if (this.size() > secondSet.size()) {
      return false;
    }
    let isSubset = true;
    this.values().every((value) => {
      if (!secondSet.has(value)) {
        isSubset = false;
        return false;
      }
      return true;
    });
    return isSubset;
  }
}
