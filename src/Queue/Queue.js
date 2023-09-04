class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this._size = 0;
  }
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
  size() {
    return this._size;
  }
  peek() {
    if (this.isEmpty()) return null;
    return this.first.value;
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

export default Queue;
