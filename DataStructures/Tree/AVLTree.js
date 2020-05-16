import { BinarySearchTree } from "../../all.js";
import { defaultCompare, compare } from "../../utils.js";

/**
 * The AVL tree (Adelson-Velskii and Landi's tree) is a self-balancing tree, meaning the tree tries to self-balance whenever a node is added to it
 * or removed from it, the height of the left or right subtree of any node(and any level) differs by 1 at most .
 * This means the tree will try to become a complete tree whenever possible while adding or removing a node.
 *
 * Inserting and removing nodes in an AVL tree works the same way as in BST. the only difference is first
 * we need to verify its `balance factor`.
 */

export class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }
}
