/**
 * Binary heap is a special binary tree with the following two properties:
 * 1) it is a complete binary tree, meaning all levels of the tree have both left and right children(with the exception of the last level leaves),
 * and the last level has all children as left as possible. this is called as `shape property`.
 * 2) a binary heap is either a min heap or a max heap, the min heap allows you to quickly extract the minimum value of the tree, and
 * the max heap allows you to quickly extract the maximum value of the tree. All nodes are either greater than or equal to (max heap), or
 * less than or equal to (min heap), each of its child nodes. this is called `heap property`.
 * {@link https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/584cc663-aa4c-48d1-9d9c-5f401a52a8a2.png}
 * Although the binary heap is a binary tree, it is not necessarily a BST. in the binary heap, every child node needs to be greater than or equal to its parent node(min heap),
 * or less than or equal to its parent node(max heap). in the BST , however, the left child is always smaller than its parent and the right side child always has a
 * greater key as well.
 */
