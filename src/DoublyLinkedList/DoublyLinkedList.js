/**
 * datacorejs/DoublyLinkedList.js
 * @license MIT
 * @copyright 2023 Sandip Deb <sandipdeb05@gmail.com>
 */

/**
 * @class
 */
class Node {
  /**
   * Creates a doubly linked list node.
   * @param {any} value
   */
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

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
    const newNode = new Node(value);
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
    const newNode = new Node(value);
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

    const newNode = new Node(value);
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

export default DoublyLinkedList;
