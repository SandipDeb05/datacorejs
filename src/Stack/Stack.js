/**
 * datacorejs/Stack.js
 * @license MIT
 * @copyright 2023 Sandip Deb <sandipdeb05@gmail.com>
 */

/**
 * @class
 */
class Node {
  /**
   * Creates a Stack node.
   * @param {any} value
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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
    const newNode = new Node(value);
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

export default Stack;
