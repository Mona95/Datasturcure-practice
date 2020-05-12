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
 * Tree traversal : is the process of visiting all the nodes of a tree and performing an operation at each node.
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
  /**
   * method visits all nodes of the tree using in-order travers
   * An in-order traversal visits all the nodes of a BST in an ascending order, meaning it will visit the nodes
   * from the smallest to the largest.
   * {@link https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/00a6ca97-ba6f-4d21-b8f2-0b0016eead6e.png}
   * @param {*} callback
   */
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }
  inOrderTraverseNode(node, callback) {
    //this is the point where the recrusion can stop.
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }
  /**
   * method visits all nodes of the tree using post-order travers
   * A post-order traversal visits the node after it visits its descendants.
   * @param {*} callback
   */
  postOrderTravers(callback) {
    this.postOrderTraversNode(this.root, callback);
  }
  postOrderTraversNode(node, callback) {
    if (node != null) {
      this.postOrderTraversNode(node.left, callback);
      this.preOrderTraversNode(node.right, callback);
      callback(node.key);
    }
  }
  /**
   * method visits all nodes of the tree using pre-order travers
   * A pre-order traversal visits the node prior to its descendants.
   * {@link https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/b935ecf7-4c1c-4639-bb97-0c12a2a88104.png}
   * @param {*} callback
   */
  preOrderTravers(callback) {
    this.preOrderTraversNode(this.root, callback);
  }
  preOrderTraversNode(node, callback) {
    if (node != null) {
      callback(node.key);
      this.preOrderTraversNode(node.left, callback);
      this.preOrderTraversNode(node.right, callback);
    }
  }
  //returns the min value/key in the tree
  min() {}
  //returns the max value/key in the tree
  max() {}
  remove(key) {}
}
