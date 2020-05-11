import { compare, defaultCompare } from "../../utils";
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
  insert(key) {
    //if the node we are trying to add is the first one in the tree, we simply point to the root.
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      //if the node should be inserted in a different position than the root.
      this.insertNode(this.root, key);
    }
  }
  /**
   * Metod helps us to find out the position of the new node.
   * 1) if the node's key(value of node) is lesser than the current node key(in this case, its root),then we need to check the left child,
   * if there is no left node, we insert the new key as the left node, but if left node exists, we need to descend a level in the tree by calling `insertNode` recursively.
   * the new node that is gonna be compared will be the left child of the current node.
   * 2) if the node's key(value of node) is bigger than the current node kwy(again in this case root), then we need to check the right child,
   * if there is no right child, we insert the new key as the right child, but if right node existsm we need to call the `insertNode` recursively and this time the node
   * that will be compared is the node.right
   * @param {} node
   * @param {*} key
   */
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }
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
