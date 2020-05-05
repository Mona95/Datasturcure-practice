import { defaultToString } from "../../utils.js";

/**
 * Handling collisions between hashtables,
 * sometimes ,different keys can have same hash value, this is called a collision.
 * since we are trying to set different key-value pairs to same position of the HashTable instance,
 * need to find a way of handling collisions.
 * without handling collisions, when hash values are same, only and only the last element inserted will be saved and stayed in hashtable.
 *
 * Separate Chaining : is a technique consists of creating a linked list for each position of the table and storing elements in it,
 * however it requires additional memory outside the HashTable instance.
 * https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/f552c4d1-925e-4c3d-b379-b605174ed10f.png
 */

export class HashTableSeparateChaining {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
}
