import { compare, defaultCompare } from "../../utils.js";
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
  search(key) {
    return this.searchNode(this.root, key);
  }
  searchNode(node, key) {
    if (node == null) {
      return false;
    }
    if (this.compareFn(key, node.key) === compare.LESS_THAN) {
      return this.searchNode(node.left, key);
    } else if (this.compareFn(key, node.key) === compare.BIGGER_THAN) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }
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
  //returns the min value/key in the tree, the leftmost node in the last level of the tree
  min() {
    return this.minNode(this.root);
  }
  minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }
  //returns the max value/key in the tree, the rightmost node in the last level of the tree
  max() {
    return this.maxNode(this.root);
  }
  maxNode(node) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }
  remove(key) {
    //the root should receive the return of the removeNode method.
    //because when u remove a node (depends on its position in tree) the depth level for the BST will change and the pointers will change
    //so we need to assign the new structured tree to our root, there should be a reference always,
    this.root = this.removeNode(this.root, key);
  }
  removeNode(node, key) {
    if (node == null) {
      //as a stopping point
      return null;
    }
    // if root is not null, then we need to check the subtrees to find the key
    // if the key we are looking for has the value lesser than current node, we go to the next node at the left-hand side
    if (this.compareFn(key, node.key) === compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key); //updating the reference of the left pointer of the node
      return node;
      // if the key we are looking for has the value bigger than current node, we go to the next node at the right-hand side
    } else if (this.compareFn(key, node.key) === compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key); //updating the reference of the right pointer of the node
      return node;
    } else {
      //key is equal to node.key, so in this step we found the key, we have three scenarios to handle
      //case 1 : `leaf node` means there is no left or right child for the node, so the node we are trying to remove is a leaf.
      if (node.left == null && node.right == null) {
        node = null;
        //by assigning null to the node, the node is gonna be removed but thats not enough, we still have a pointer ,
        //we need to assign null to its parent node, and this can be done by returning null,
        return node;
      }
      //case 2 : if the node has left child or right child.in this case we need to skip the node that assign the parent pointer to the child node of current node,
      if (node.left == null) {
        //if the node doesn't have the left child, means it has right child so the parent should be assigned to right child.
        node = node.right;
        return node;
      } else if (node.right == null) {
        //if the node doesn't have the right child, means it has left child so the parent should be assigned to left child.
        node = node.left;
        return node;
      }
      //case 3: if the node has two children, in this case we need to follow 4 steps,as follows:
      // 1-we need to find the minimun node from its right-hand side subtree.
      // 2-then we will update the value of the node with the key of the minimun node from its right-hand side subtree, with this action, we are replacing
      // the key of the node, which means it was removed.
      // 3-now we have two nodes in the tree with same key, and this shouldn't happen.now we need to remove the minimum node from the right subtree since
      //we moved it to the place of the removed node.
      // 4- finally, we will return the updated node reference to its parent.
      const aux = this.minNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  }
}
