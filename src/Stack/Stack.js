class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this._size = 0;
  }
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
  peek() {
    if (this.isEmpty()) return null;
    return this.first.value;
  }
  size() {
    return this._size;
  }
  isEmpty() {
    return this._size === 0;
  }
  clear() {
    this.first = null;
    this.last = null;
    this._size = 0;
  }
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
