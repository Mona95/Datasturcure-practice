import { defaultCompare } from "../../utils";
import { Node } from "./model/Node.js";

/**
 * A node in a `binary tree` has two children at most (this is really important) : one left child and one right child.
 * a binary search tree (BST) is a binary tree , but it only allows you to store nodes with lesser values on left side
 * and nodes with greater values on the right side.
 * {@link https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/762de15b-0d00-4fa1-975f-41de97d3986f.png}
 * like linkedlists we work with pointers (refrences) again to represent the conneection between the nodes (but in tree we call them as edges).
 * in tree terminology, we will use two pointers,one pointer will point to the left child, and the other one will point to the right child.
 * a key is what a tree node is known as in tree terminology.
 * here we will follow the same patten we used in the linkedlist class, just hear instead of head,we have root.
 */

export class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn; //used to compare node values
    this.root = null; // root node of type Node
  }
  insert(key) {}
  search(key) {}
  //method visits all nodes of the tree using in-order travers
  inOrderTraverse() {}
  //method visits all nodes of the tree using post-order travers
  postOrderTravers() {}
  //method visits all nodes of the tree using pre-order travers
  preOrderTravers() {}
  //returns the min value/key in the tree
  min() {}
  //returns the max value/key in the tree
  max() {}
  remove(key) {}
}
