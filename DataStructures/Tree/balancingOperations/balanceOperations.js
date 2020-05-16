/**
 * After inserting or removing nodes from the AVL Tree, we will calculate the height of the nodes and will verify whether the tree
 * needs to be balanced . there are two balancing processes that can be used: simple rotation or double rotation.
 * Between simple rotation and double rotation, there are four different scenarios.
 * Left-Left(LL) : a single rotation to the right
 * Right-Right(RR) : a single rotation to the left
 * Left-Right(LR) : a double rotation to the right(rotate left then right)
 * Right-Left(RL) : a double rotation to the left(rotate right then left)
 * we will implement them one by one .
 */

/**
 * Left-Left case : single rotation to the right
 * this case occurs when the height of a node's left child becomes greater than the height of the right child,
 * and the left child is either balanced and left-heavy .
 * {@link https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/a31341aa-a091-4271-9c25-1ee27f5a5e42.png}
 */
export function rotationLL(node) {
  const tmp = node.left;
  node.left = tmp.right;
  tmp.right = node;
  return tmp;
}

/**
 * Right-Right case : single rotation to the left
 * this case occurs when the height of a node's right child becomes greater than the height of the left child,
 * abd the right child is either balanced or right-heavy
 * {@link https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/1264431a-6ec4-4e95-9330-1a99cd78b1dc.png}
 */

export function rotationRR(node) {
  const tmp = node.right;
  node.right = tmp.right;
  tmp.right = node;
  return tmp;
}

/**
 * Left-right case : double rotation to the right
 * this case occurs when the height of a node's left child becomes greater than that of the right child,and the left child is right-heavy,
 * in this case, we can fix it by doing a left rotation on the left child, which results in the left-left case then we can fix it again by doing a right
 * rotation on the unbalanced tree .
 * {@link https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/12860eec-8ce3-4047-8a8b-404b96c05db4.png}
 */

export function rotationLR(node) {
  node.left = rotationRR(node.left);
  return rotationLL(node);
}

/**
 * Reft-Left case : double rotation to the left
 * this case occurs when the height of a node's right child becomes greater than that of the left child,and the right child is left-heavy,
 * in this case, we can fix it by doing a right rotation on the right child, which results in the right-right case then we can fix it again by doing a left
 * rotation on the unbalanced tree .
 * {@link https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/12860eec-8ce3-4047-8a8b-404b96c05db4.png}
 */

export function rotationRL(node) {
  node.right = rotationLL(node.right);
  return rotationRR(node);
}
