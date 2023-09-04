class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }
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
  set(index, value) {
    if (value === undefined) {
      throw new Error("value cannot be undefined");
    }
    let foundNode = this.get(index);
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
  getHead() {
    return this.head;
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
