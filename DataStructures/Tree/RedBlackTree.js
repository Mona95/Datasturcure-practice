import { BinarySearchTree } from "../../all.js";
import { defaultCompare, compare } from "../../utils.js";

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
 */

export class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }
}
