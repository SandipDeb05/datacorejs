/**
 * datacorejs/Queue.js
 * @license MIT
 * @copyright 2023 Sandip Deb <sandipdeb05@gmail.com>
 */

/**
 * @class
 */
class Node {
  /**
   * Creates a Queue node.
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
    const newNode = new Node(value);
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

export default Queue;
