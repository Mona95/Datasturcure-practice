import { BinarySearchTree } from "../../all.js";
import { Node } from "./model/Node.js";
import { defaultCompare, compare } from "../../utils.js";
import {
  rotationLL,
  rotationLR,
  rotationRR,
  rotationRL,
} from "./balancingOperations/balanceOperations.js";

/**
 * The AVL tree (Adelson-Velskii and Landi's tree) is a self-balancing tree, meaning the tree tries to self-balance whenever a node is added to it
 * or removed from it, the height of the left or right subtree of any node(and any level) differs by 1 at most .
 * This means the tree will try to become a complete tree whenever possible while adding or removing a node.
 *
 * Inserting and removing nodes in an AVL tree works the same way as in BST. the only difference is first
 * we need to verify its `balance factor`.
 *
 * `Height of a Node ` is defined as the maximum number of edges from the node to any of its leaf nodes.
 * {@link https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/f106f192-3e1c-4f83-9911-1594946e4560.png}
 *
 * `Balance Factor` : whenever we insert or remove a node from the tree, we will need to calculate the difference between the
 * height of the right-hand side subtree and the left-hand side subtree, the result of these two needs to be 0, -1, +1 .
 * if the result is different from these values, it means the tree needs to be balanced . this concept is called the `balance factor`.
 */

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5,
};

export class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }
  getNodeHeight(node) {
    if (node == null) {
      return -1;
    }
    return (
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1
    );
  }
  getBalanceFactor(node) {
    const heightDifference =
      this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }
  insert(key) {
    this.root = this.insertNode(this.root, key);
  }
  /**
   * After inserting a node in AVL Tree we need to check if its still balanced or not,
   * we again calculate the balance factor for each node and if we saw the a node had a balance factor different with -1,0,1
   * then by starting from leaf we try to find the node which made the branch unbalanced .and based on the rotation operations
   * we try to convert the BST to AVL tree .
   * @param {*} node
   * @param {*} key
   */
  insertNode(node, key) {
    //insert node as in BST tree
    if (node == null) {
      return new Node(key);
    } else if (this.compareFn(key, node.key) === compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key);
    } else if (this.compareFn(key, node.key) === compare.BIGGER_THAN) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node; //duplicated key exists, while its not bigger or lesser,then its equal
    }
    //balance the tree if needed, we need to check the balance factor for each node
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(key, node.left.key) === compare.LESS_THAN) {
        node = rotationLL(node);
      } else {
        node = rotationLR(node);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (this.compareFn(key, node.right.key) === compare.BIGGER_THAN) {
        node = rotationRR(node);
      } else {
        node = rotationRL(node);
      }
    }
    return node;
  }
}
