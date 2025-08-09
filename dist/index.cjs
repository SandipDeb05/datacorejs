'use strict';

/**
 * datacorejs/LinkedList.js
 * @license MIT
 * @copyright 2023 Sandip Deb <sandipdeb05@gmail.com>
 */

/**
 * @class
 */
let Node$4 = class Node {
  /**
   * Creates a linked list node.
   * @param {any} value
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

/**
 * @class
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Appends a new node with the given value to the end of the linked list.
   * @param {any} value
   * @returns {Node}
   */
  push(value) {
    if (value === undefined) {
      throw new Error("value cannot be undefined");
    }
    const newNode = new Node$4(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  /**
   * Removes and returns the last node from the linked list.
   * @returns {any}
   */
  pop() {
    if (!this.head) return null;
    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = newTail;
      this.tail.next = null;
    }
    this.length--;
    return currentNode.value;
  }

  /**
   * Removes and returns the first node from the linked list.
   * @returns {any}
   */
  shift() {
    if (!this.head) return null;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead.value;
  }

  /**
   * Inserts a new node with the given value at the beginning of the linked list.
   * @param {any} value
   * @returns {Node}
   */
  unshift(value) {
    if (value === undefined) {
      throw new Error("value cannot be undefined.");
    }
    const newHead = new Node$4(value);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return newHead;
  }

  /**
   * Retrieves the node at the specified index in the linked list.
   * @param {number} index
   * @returns {Node}
   */
  get(index) {
    if (
      index < 0 ||
      index >= this.length ||
      index === undefined ||
      index === null
    ) {
      throw new Error(
        "Index is out of bounds. It must be within the valid range."
      );
    }
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  /**
   * Sets the value of the node at the specified index to the provided value.
   * @param {number} index
   * @param {any} value
   * @returns {boolean}
   */
  set(index, value) {
    let foundNode = this.get(index);
    if (value === undefined) {
      throw new Error("value cannot be undefined");
    }
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  /**
   * Inserts a new node with the given value at the specified index in the linked list.
   * @param {number} index
   * @param {any} value
   * @returns {boolean}
   */
  insertAt(index, value) {
    if (
      index < 0 ||
      index > this.length ||
      index === undefined ||
      index === null
    ) {
      throw new Error(
        "Index is out of bounds. It must be within the valid range."
      );
    }
    if (value === undefined) {
      throw new Error("value cannot be undefined.");
    }
    if (index === this.length) {
      this.push(value);
      return true;
    } else if (index === 0) {
      this.unshift(value);
      return true;
    } else {
      let newNode = new Node$4(value);
      let prevNode = this.get(index - 1);
      let temp = prevNode.next;
      prevNode.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
    }
  }

  /**
   * Removes and returns the node at the specified index in the linked list.
   * @param {number} index
   * @returns {Node}
   */
  removeAt(index) {
    if (
      index < 0 ||
      index >= this.length ||
      index === undefined ||
      index === null
    ) {
      throw new Error(
        "Index is out of bounds. It must be within the valid range."
      );
    }
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      let prevNode = this.get(index - 1);
      let removedNode = prevNode.next;
      prevNode.next = removedNode.next;
      this.length--;
      return removedNode;
    }
  }

  /**
   * Reverses the order of nodes in the linked list.
   * @returns {LinkedList}
   */
  reverse() {
    if (!this.head || !this.tail || this.head === this.tail) return this;
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let nextNode = null;
    let prevNode = null;
    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    return this;
  }

  /**
   * Returns the first node (head) of the linked list.
   * @returns {Node}
   */
  getHead() {
    return this.head;
  }

  /**
   * Returns the number of nodes in the linked list.
   * @returns {number}
   */
  size() {
    return this.length;
  }

  /**
   * Checks if the linked list is empty and returns true if it is, false otherwise.
   * @returns {boolean}
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Clears the linked list by removing all nodes and resetting the length to zero.
   */
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Converts the linked list into an array and returns the resulting array.
   * @returns {Array}
   */
  toArray() {
    const result = [];
    let currentNode = this.head;
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return result;
  }
}

/**
 * datacorejs/DoublyLinkedList.js
 * @license MIT
 * @copyright 2023 Sandip Deb <sandipdeb05@gmail.com>
 */

/**
 * @class
 */
let Node$3 = class Node {
  /**
   * Creates a doubly linked list node.
   * @param {any} value
   */
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
};

/**
 * @class
 */
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Appends a new node with the given value to the end of the doubly linked list.
   * @param {any} value
   * @returns {Node}
   */
  push(value) {
    if (value === undefined) {
      throw new Error("value cannot be undefined");
    }
    const newNode = new Node$3(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  /**
   * Removes and returns the last node from the doubly linked list.
   * @returns {any}
   */
  pop() {
    if (!this.head) return null;
    const currentTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null;
    }
    this.length--;
    return currentTail.value;
  }

  /**
   * Removes and returns the first node from the doubly linked list.
   * @returns {any}
   */
  shift() {
    if (this.length === 0) return null;
    const currentHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currentHead.next;
      this.head.prev = null;
      currentHead.next = null;
    }
    this.length--;
    return currentHead.value;
  }

  /**
   * Inserts a new node with the given value at the beginning of the doubly linked list.
   * @param {any} value
   * @returns {Node}
   */
  unshift(value) {
    if (value === undefined) {
      throw new Error("value cannot be undefined");
    }
    const newNode = new Node$3(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }

  /**
   * Retrieves the node at the specified index in the doubly linked list.
   * @param {number} index
   * @returns {Node}
   */
  get(index) {
    if (
      index < 0 ||
      index >= this.length ||
      index === undefined ||
      index === null
    ) {
      throw new Error(
        "Index is out of bounds. It must be within the valid range."
      );
    }
    const mid = Math.floor(this.length / 2);
    let node;
    if (index <= mid) {
      let counter = 0;
      node = this.head;
      while (counter !== index) {
        node = node.next;
        counter++;
      }
    } else {
      let counter = this.length - 1;
      node = this.tail;
      while (counter !== index) {
        node = node.prev;
        counter--;
      }
    }
    return node;
  }

  /**
   * Sets the value of the node at the specified index to the provided value.
   * @param {number} index
   * @param {any} value
   * @returns {boolean}
   */
  set(index, value) {
    const foundNode = this.get(index);
    if (value === undefined) {
      throw new Error("value cannot be undefined");
    }
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  /**
   * Inserts a new node with the given value at the specified index in the doubly linked list.
   * @param {number} index
   * @param {any} value
   * @returns {boolean}
   */
  insertAt(index, value) {
    if (
      index < 0 ||
      index > this.length ||
      index === undefined ||
      index === null
    ) {
      throw new Error(
        "Index is out of bounds. It must be within the valid range."
      );
    }
    if (value === undefined) {
      throw new Error("value cannot be undefined.");
    }
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node$3(value);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length++;
    return true;
  }

  /**
   * Removes and returns the node at the specified index in the doubly linked list.
   * @param {number} index
   * @returns {Node}
   */
  removeAt(index) {
    if (
      index < 0 ||
      index >= this.length ||
      index === undefined ||
      index === null
    ) {
      throw new Error(
        "Index is out of bounds. It must be within the valid range."
      );
    }
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const foundNode = this.get(index);
    const prevNode = foundNode.prev;
    const nextNode = foundNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    foundNode.next = null;
    foundNode.prev = null;
    this.length--;
    return foundNode;
  }

  /**
   * Reverses the order of nodes in the doubly linked list.
   * @returns {LinkedList}
   */
  reverse() {
    if (!this.head || !this.tail || this.head === this.tail) return this;
    let currentNode = this.head;
    let temp = null;
    while (currentNode) {
      temp = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = temp;
      currentNode = currentNode.prev;
    }
    if (temp) this.head = temp.prev;
    this.tail = this.head;
    return this;
  }

  /**
   * Returns the first node (head) of the doubly linked list.
   * @returns {Node}
   */
  getHead() {
    return this.head;
  }

  /**
   * Returns the number of nodes in the doubly linked list.
   * @returns {number}
   */
  size() {
    return this.length;
  }

  /**
   * Checks if the doubly linked list is empty and returns true if it is, false otherwise.
   * @returns {boolean}
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Clears the doubly linked list by removing all nodes and resetting the length to zero.
   */
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Converts the doubly linked list into an array and returns the resulting array.
   * @returns {Array}
   */
  toArray() {
    let result = [];
    let currentNode = this.head;
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return result;
  }
}

/**
 * datacorejs/Stack.js
 * @license MIT
 * @copyright 2023 Sandip Deb <sandipdeb05@gmail.com>
 */

/**
 * @class
 */
let Node$2 = class Node {
  /**
   * Creates a Stack node.
   * @param {any} value
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

/**
 * @class
 */
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this._size = 0;
  }

  /**
   * Adds a new node with the given value to the top (or the "first" position) of the stack.
   * @param {any} value
   * @returns {Stack}
   */
  push(value) {
    if (!value) return this;
    const newNode = new Node$2(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const currFirst = this.first;
      this.first = newNode;
      this.first.next = currFirst;
    }
    this._size++;
    return this;
  }

  /**
   * Removes and returns the node at the top of the stack (the most recently added node).
   * @returns {any}
   */
  pop() {
    if (!this.first) return null;
    const currFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = currFirst.next;
    currFirst.next = null;
    this._size--;
    return currFirst.value;
  }

  /**
   * Retrieves and returns the value of the node at the top of the stack without removing it.
   * @returns {any}
   */
  peek() {
    if (this.isEmpty()) return null;
    return this.first.value;
  }

  /**
   * Returns the number of nodes (elements) currently in the stack.
   * @returns {number}
   */
  size() {
    return this._size;
  }

  /**
   * Checks if the stack is empty and returns true if it is, false otherwise.
   * @returns {boolean}
   */
  isEmpty() {
    return this._size === 0;
  }

  /**
   * Clears the stack by removing all nodes and resetting the size to zero.
   */
  clear() {
    this.first = null;
    this.last = null;
    this._size = 0;
  }

  /**
   * Converts the stack into an array and returns the resulting array.
   * @returns {Array}
   */
  toArray() {
    const result = [];
    let currentNode = this.first;
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return result;
  }
}

/**
 * datacorejs/Queue.js
 * @license MIT
 * @copyright 2023 Sandip Deb <sandipdeb05@gmail.com>
 */

/**
 * @class
 */
let Node$1 = class Node {
  /**
   * Creates a Queue node.
   * @param {any} value
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

/**
 * @class
 */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this._size = 0;
  }

  /**
   * Adds a new node with the given value to the back (or the "last" position) of the queue.
   * @param {any} value
   * @returns {Queue}
   */
  enqueue(value) {
    if (!value) return this;
    const newNode = new Node$1(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this._size++;
    return this;
  }

  /**
   * Removes and returns the node at the front of the queue (the oldest element).
   * @returns {any}
   */
  dequeue() {
    if (!this.first) return null;
    let currFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = currFirst.next;
    currFirst.next = null;
    this._size--;
    return currFirst.value;
  }

  /**
   * Returns the number of nodes (elements) currently in the queue.
   * @returns {number}
   */
  size() {
    return this._size;
  }

  /**
   * Retrieves and returns the value of the node at the front of the queue without removing it.
   * @returns {any}
   */
  peek() {
    if (this.isEmpty()) return null;
    return this.first.value;
  }

  /**
   * Checks if the queue is empty and returns true if it is, false otherwise.
   * @returns {boolean}
   */
  isEmpty() {
    return this._size === 0;
  }

  /**
   * Clears the queue by removing all nodes and resetting the size to zero.
   */
  clear() {
    this.first = null;
    this.last = null;
    this._size = 0;
  }

  /**
   * Converts the queue into an array and returns the resulting array.
   * @returns {Array}
   */
  toArray() {
    const result = [];
    let currentNode = this.first;
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return result;
  }
}

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

/**
 * datacorejs/Graph.js
 * @license MIT
 * @copyright 2023 Sandip Deb <sandipdeb05@gmail.com>
 */

/**
 * @class
 */
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  /**
   * Adds a vertex to the graph's adjacency list if it doesn't already exist. Throws an error if the input vertex is undefined.
   * @param {any} vertex
   * @returns {Graph}
   */
  addVertex(vertex) {
    if (vertex === undefined) {
      throw new Error("value cannot be undefined");
    }
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
    return this;
  }

  /**
   * Adds an undirected edge between two vertices in the graph. If the vertices don't exist, they are added. Throws an error if either vertex is undefined.
   * @param {any} vertex1
   * @param {any} vertex2
   * @returns {Graph}
   */
  addEdge(vertex1, vertex2) {
    if (vertex1 === undefined || vertex2 === undefined) {
      throw new Error("values cannot be undefined");
    }
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return this;
  }

  /**
   * Checks if there is an edge between two vertices in the graph and returns a boolean value. Throws an error if either vertex is undefined.
   * @param {any} vertex1
   * @param {any} vertex2
   * @returns {boolean}
   */
  hasEdge(vertex1, vertex2) {
    if (vertex1 === undefined || vertex2 === undefined) {
      throw new Error("values cannot be undefined");
    }
    return (
      !!this.adjacencyList[vertex1]?.find((vertex) => vertex === vertex2) &&
      !!this.adjacencyList[vertex2]?.find((vertex) => vertex === vertex1)
    );
  }

  /**
   * Checks if a vertex exists in the graph and returns a boolean value. Throws an error if the input vertex is undefined.
   * @param {any} vertex
   * @returns {boolean}
   */
  hasVertex(vertex) {
    if (vertex === undefined) {
      throw new Error("value cannot be undefined");
    }
    return !!this.adjacencyList[vertex];
  }

  /**
   * Removes the edge between two vertices in the graph. Throws an error if either vertex is undefined.
   * @param {any} vertex1
   * @param {any} vertex2
   * @returns {Graph}
   */
  removeEdge(vertex1, vertex2) {
    if (vertex1 === undefined || vertex2 === undefined) {
      throw new Error("values cannot be undefined");
    }

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );

    return this;
  }

  /**
   * Removes a vertex and all its associated edges from the graph. Throws an error if the input vertex is undefined.
   * @param {any} vertex
   * @returns {boolean}
   */
  removeVertex(vertex) {
    if (vertex === undefined) {
      throw new Error("value cannot be undefined");
    }
    if (!this.adjacencyList[vertex]) return false;
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
    return true;
  }

  /**
   * Prints the graph's adjacency list, displaying each vertex and its adjacent vertices.
   */
  printGraph() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + this.adjacencyList[vertex]);
    }
  }

  /**
   * Performs a Depth-First Search (DFS) starting from the specified vertex and returns an array of vertices visited in DFS order. Throws an error if the input vertex is undefined.
   * @param {any} start
   * @returns {array}
   */
  dfs(start) {
    if (start === undefined) {
      throw new Error("value cannot be undefined");
    }
    const stack = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currVertex;
    while (stack.length) {
      currVertex = stack.pop();
      result.push(currVertex);
      this.adjacencyList[currVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  /**
   * Performs a Breadth-First Search (BFS) starting from the specified vertex and returns an array of vertices visited in BFS order. Throws an error if the input vertex is undefined.
   * @param {any} start
   * @returns {array}
   */
  bfs(start) {
    if (start === undefined) {
      throw new Error("value cannot be undefined");
    }
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currVertex;
    while (queue.length) {
      currVertex = queue.shift();
      result.push(currVertex);
      this.adjacencyList[currVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

exports.BinarySearchTree = BinarySearchTree;
exports.DoublyLinkedList = DoublyLinkedList;
exports.Graph = Graph;
exports.LinkedList = LinkedList;
exports.Queue = Queue;
exports.Stack = Stack;
