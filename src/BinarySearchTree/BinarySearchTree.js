/**
 * datacorejs/BinarySearchTree.js
 * @license MIT
 * @copyright 2023 Sandip Deb <sandipdeb05@gmail.com>
 */

/**
 * @class
 */
class Node {
  /**
   * Creates a Binary Search Tree node.
   * @param {any} value
   */
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * @class
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Checks if the binary search tree is empty and returns true if it is, false otherwise.
   * @returns {boolean}
   */
  isEmpty() {
    return this.root === null;
  }

  /**
   * Returns the root node of the binary search tree.
   * @returns {Node}
   */
  getRoot() {
    return this.root;
  }

  /**
   * Inserts a new node with the given value into the binary search tree while maintaining the binary search tree properties.
   * @param {any} value
   * @returns {Node}
   */
  insert(value) {
    if (value === undefined) {
      throw new Error("value can't be undefined or null");
    }
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return newNode;
    } else {
      let currRoot = this.root;
      while (true) {
        if (currRoot.value === value) return undefined;
        if (currRoot.value > value) {
          if (!currRoot.left) {
            currRoot.left = newNode;
            return newNode;
          }
          currRoot = currRoot.left;
        } else {
          if (!currRoot.right) {
            currRoot.right = newNode;
            return newNode;
          }
          currRoot = currRoot.right;
        }
      }
    }
  }

  /**
   * Checks if the binary search tree contains a node with the specified value and returns true if found, false otherwise.
   * @param {any} value
   * @returns {boolean}
   */
  contains(value) {
    if (value === undefined) {
      throw new Error("value can't be undefined or null");
    }
    if (!this.root) return false;
    let currRoot = this.root;
    while (true) {
      if (currRoot.value === value) return true;
      if (currRoot.value > value) {
        if (!currRoot.left) break;
        currRoot = currRoot.left;
      } else {
        if (!currRoot.right) break;
        currRoot = currRoot.right;
      }
    }
    return false;
  }

  /**
   * Performs a breadth-first search traversal of the binary search tree and returns an array containing the values of all nodes in the order they were visited.
   * @returns {array}
   */
  bfs() {
    const queue = [];
    const visited = [];
    let node = this.root;
    if (!node) return null;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }

  /**
   * Performs a depth-first search traversal of the binary search tree in pre-order and returns an array of values.
   * @returns {array}
   */
  dfsPreOrder() {
    if (!this.root) return null;
    const visited = [];
    (function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    })(this.root);
    return visited;
  }

  /**
   * Performs a depth-first search traversal of the binary search tree in post-order and returns an array of values.
   * @returns {array}
   */
  dfsPostOrder() {
    if (!this.root) return null;
    const visited = [];
    (function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    })(this.root);
    return visited;
  }

  /**
   * Performs a depth-first search traversal of the binary search tree in in-order and returns an array of values.
   * @returns {array}
   */
  dfsInOrder() {
    if (!this.root) return null;
    const visited = [];
    (function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    })(this.root);

    return visited;
  }

  /**
   * Finds and returns the minimum value in the binary search tree.
   * @returns {any}
   */
  min(root = this.root) {
    if (!this.root) return null;
    if (!root.left) return root.value;
    return this.min(root.left);
  }

  /**
   * Finds and returns the maximum value in the binary search tree.
   * @returns {any}
   */
  max(root = this.root) {
    if (!this.root) return null;
    if (!root.right) return root.value;
    return this.max(root.right);
  }

  /**
   * Deletes a node with the specified value from the binary search tree while maintaining the binary search tree properties
   * @param {any} value
   * @returns {any}
   */
  delete(value) {
    if (value === undefined) {
      throw new Error("value can't be undefined");
    }
    if (this.contains(value)) {
      this.root = this._deleteNode(this.root, value);
      return value;
    }
    return null;
  }

  /**
   * A helper function used by the delete method to recursively delete a node with the specified value and maintain the binary search tree structure.
   * @param {Node} root
   * @param {any} value
   * @returns {Node}
   */
  _deleteNode(root, value) {
    if (root === null) return root;
    if (value < root.value) {
      root.left = this._deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this._deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) return null;
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this._deleteNode(root.right, root.value);
    }
    return root;
  }

  /**
   * Calculates and returns the height of the binary search tree.
   * @param {Node} root
   * @returns {number}
   */
  height(root) {
    if (!root) return 0;
    const leftHeight = this.height(root.left);
    const rightHeight = this.height(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  /**
   * Prints the nodes at a specified level of the binary search tree.
   * @param {Node} root
   * @param {number} level
   */
  printLevel(root, level) {
    if (!root) return null;
    if (level === 1) {
      console.log(`${root.value} `);
    } else if (level > 1) {
      this.printLevel(root.left, level - 1);
      this.printLevel(root.right, level - 1);
    }
  }

  /**
   * Checks if the binary search tree is a valid Binary Search Tree (BST) by ensuring that values are within the specified min and max range for each node.
   * @param {Node} root
   * @param {number} min
   * @param {number} max
   */
  isBST(root, min, max) {
    if (!root) return true;
    if (root.value < min || root.value > max) return false;
    return (
      this.isBST(root.left, min, root.value) &&
      this.isBST(root.right, root.value, max)
    );
  }
}

export default BinarySearchTree;
