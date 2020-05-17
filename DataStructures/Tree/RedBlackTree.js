import { BinarySearchTree } from "../../all.js";
import { defaultCompare, compare } from "../../utils.js";
import { Node } from "./model/Node.js";
import {
  rotationRR,
  rotationLL,
} from "./balancingOperations/balanceOperations.js";

/**
 * like the AVL Tree, the `Red-Black tree` is also a self balancing binary search tree.
 * as we saw, inserting and removing a node from the AVL tree might cause rotations, so if we need a self-balancing tree that involves many frequent
 * insertions or deletions, then the Red-Black tree is preferred, but if insertions and deletions are less frequent(we are interest in frequent search operations),
 * then the AVL tree is preferred over the Red-Black tree.
 * In the Red-Black Tree every node follows these rules :
 * 1- each node is either red or black.
 * 2- the root of the tree is black.
 * 3-All of the leaves are black (nodes represented with `null` reference).
 * 4-if a node is red, then both of its children are black.
 * 5-there cannot be two adjacent red nodes (two red nodes can't be beside or close to each other), a red node cannot have a red parent or child.
 * 6- every path from a given node to any of its descendants (`null` leaves) contains the same number of black nodes.
 *
 * to verify whether the Red-Black tree is still balanced and still follows all of its requirements, we will use two concepts : recoloring and rotation.
 * in the red black tree to get balanced,maximum we do two rotation if it is required,
 */

/**
 * The Algorithm of Insertion in Red-Black Tree :
 * 1 - if tree is empty, create a new node as root node with color black .
 * 2 - if tree is not empty, create new node as a leaf node with color `red`.
 * 3 -  if parent of new node is black then exit . (insertion is done)
 * 4 - if parent of new node is red , then check the color of parent's sibling of new node .
 *  4.1 - if color is black or null, then do suitable rotation and recolor them, (recolor parent and its sibling)
 *  4.2 - if color is red  then recolor and also check if parent's parent of new node is not root node then recolor it and recheck.
 */

const Colors = {
  BLACK: "black",
  RED: "red",
};

class RedBlackNode extends Node {
  constructor(key) {
    super(key);
    this.key = key;
    this.color = Colors.RED; //color of the node,by default the node will be created with the color red.
    this.parent = null; // a reference to its parent
  }
  isRed() {
    return this.color === Colors.RED;
  }
}

export class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }
  //since we are keeping a reference to the node's parent,
  //we also need to update the `node.parent` reference to the new parent after the node is rotated,
  rotationLL(node) {
    const tmp = node.left;
    node.left = tmp.right;
    if (tmp.right && tmp.right.key) {
      tmp.right.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.right = node;
    node.parent = tmp;
  }
  //since we are keeping a reference to the node's parent,
  //we also need to update the `node.parent` reference to the new parent after the node is rotated,
  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    if (tmp.left && tmp.left.key) {
      tmp.left.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.left = node;
    node.parent = tmp;
  }
  fixTreeProperties(node) {
    while (
      node &&
      node.parent &&
      node.parent.color.isRed() && //verify whether the parent is red
      node.color !== Colors.BLACK // the child node is not black
    ) {
      //keeping reference to node's parent and grandparent
      let parent = node.parent;
      const grandParent = parent.parent;
      //case A : parent is left child
      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right;
        //case 1A : uncle of node is also red - only recoloring
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          //case 2A : node is right child - left rotate(the parent is the left child of grandparent and node is the right child of parent)
          if ((node === parent, right)) {
            this.rotationRR(parent);
            node = parent;
            parent = node.parent;
          }
          //case 3A : node is left child - right rotate (the parent is the left child of grandparent, and node is the left child of parent)
          this.rotationLL(grandParent);
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      } else {
        //case B : parent is right child
        const uncle = grandParent.left;
        //case 1B : uncle is red - only recoloring
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          // case 2B: node is left child - right rotate(the parent is the right child of the grandparent and the node is the left child of parent)
          if (node === parent.left) {
            this.rotationLL(parent);
            node = parent;
            parent = node.parent;
          }
          // case 3B: node is right child - left rotate(the parent is the right child of grandparent and the node is the right child of parent)
          this.rotationRR(grandParent);
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      }
    }
    this.root.color = Colors.BLACK; //making sure the root is always black
  }
  insert(key) {
    if (this.root == null) {
      this.root = new RedBlackNode(key);
      this.root.color = Colors.BLACK; // root is always black
    } else {
      const newNode = this.insertNode(this.root, key);
      this.fixTreeProperties(newNode);
    }
  }
  //we need to return the node reference so that we can verify the tree properties next
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new RedBlackNode(key);
        node.left.parent = node;
        return node.left;
      } else {
        return this.insertNode(node.left, key);
      }
    } else if (node.right == null) {
      node.right = new RedBlackNode(key);
      node.right.parent = node;
      return node.right;
    } else {
      return this.insertNode(node.right, key);
    }
  }
}
