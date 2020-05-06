import { defaultToString } from "../../utils.js";
import { HashTable } from "../../all.js";

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
 */

export class HashTableLinearProbing extends HashTable {
  constructor(toStrFn = defaultToString) {
    super();
    this.toStrFn = toStrFn;
    this.table = {};
  }
}
