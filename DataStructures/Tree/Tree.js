/**
 * Tree => a non-sequential data strucutre
 * a tree is an abstract model of a hierarchial structure. it consists of `nodes` with a parent-child relationship.
 * each node has a parent(except for the first node at the top) and zero or more children. the top node of a tree called the `root`.
 * {@link https://learning.oreilly.com/library/view/learning-javascript-data/9781788623872/assets/44d1892e-9a2d-4dbe-b061-e9093e6ea069.png}
 * Important terminologies in Tree data structure :
 * we have two types of nodes in a tree, `internal nodes` and `extenal nodes` .
 * a node with at least one child is called internal nodes.
 * a node that doesn't have children is called external nodes or a `leaf`.
 * a node can have ancestors and descendants, the ancestors of a node (except the root) are the parent, grandparent, great-grandparent and so on...
 * the descendants of a node are children , grandchildren, great grandchildren, and so on ...
 * a `subtree` consists of a node and its descendants.
 * The height of a tree consists of the maximum depth of any node. A tree can also be broken down into levels.
 * The root is on level 0, its children are on level 1, and so on ...
 */
