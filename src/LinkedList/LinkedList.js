/**
 * datacorejs/LinkedList.js
 * @license MIT
 * @copyright 2023 Sandip Deb <sandipdeb05@gmail.com>
 */

/**
 * @class
 */
class Node {
  /**
   * Creates a linked list node.
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
    const newNode = new Node(value);
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
    const newHead = new Node(value);
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
      let newNode = new Node(value);
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

export default LinkedList;
