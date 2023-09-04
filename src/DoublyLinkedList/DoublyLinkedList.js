class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
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
    return currentTail;
  }
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
    return currentHead;
  }
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
  set(index, value) {
    if (value === undefined) {
      throw new Error("value cannot be undefined");
    }
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }
  insertAt(index, value) {
    if (value === undefined) {
      throw new Error("value cannot be undefined.");
    }
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
  size() {
    return this.length;
  }
  isEmpty() {
    return this.head === null;
  }
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  getHead() {
    return this.head;
  }
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
