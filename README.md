# datacorejs

[![npm](https://img.shields.io/npm/v/datacorejs.svg)](https://www.npmjs.com/package/your-package-name)
[![License](https://img.shields.io/npm/l/datacorejs.svg)](LICENSE)

## Description

Datacorejs is a JavaScript library that provides a collection of commonly used data structures to simplify your development tasks. Whether you're working on algorithms, data manipulation, or need efficient storage solutions, this package has you covered. It's designed to be easy to use, well-documented, and highly performant.

## install

```sh
npm install --save datacorejs
```

## import

```js
import {
  LinkedList,
  DoublyLinkedList,
  Stack,
  Queue,
  BinarySearchTree,
  Graph,
} from "datacorejs";
```

## API

### constructor

```js
const linkedList = new LinkedList();
const doublyLinkedList = new DoublyLinkedList();
const stack = new Stack();
const queue = new Queue();
const bst = new BinarySearchTree();
const graph = new Graph();
```

### LinkedList

```js
const myList = new LinkedList();

// Check if the list is empty
console.log("Is the list empty?", myList.isEmpty()); // Should print: true

// Add elements to the list
myList.push(10); // Add 10 to the end
myList.push(20); // Add 20 to the end
myList.push(30); // Add 30 to the end

// Check the size of the list
console.log("Size of the list:", myList.size()); // Should print: 3

// Convert the linked list to an array and print it
console.log("Linked list as an array:", myList.toArray()); // Should print: [10, 20, 30]

// Get the head of the linked list
console.log("Head of the list:", myList.getHead()); // Should print: Node { value: 10, next: Node { value: 20, next: Node { value: 30, next: null } } }

// Insert an element at a specific index
myList.insertAt(1, 15); // Insert 15 at index 1

// Check the modified linked list
console.log("Linked list as an array:", myList.toArray()); // Should print: [10, 15, 20, 30]

// Get the node at a specific index
console.log("Node at index 2:", myList.get(2)); // Should print: Node { value: 20, next: Node { value: 30, next: null } }

// Update the value of a node at a specific index
myList.set(0, 5); // Update the value at index 0 to 5

// Check the modified linked list
console.log("Linked list as an array:", myList.toArray()); // Should print: [5, 15, 20, 30]

// Remove a node at a specific index
const removedNode = myList.removeAt(2); // Remove the node at index 2 (value 20)

// Check the modified linked list
console.log("Linked list as an array:", myList.toArray()); // Should print: [5, 15, 30]

// Check the removed node
console.log("Removed node:", removedNode); // Should print: Node { value: 20, next: null }

// Reverse the linked list
myList.reverse();

// Check the reversed linked list
console.log("Reversed linked list:", myList.toArray()); // Should print: [30, 15, 5]

// Clear the linked list
myList.clear();

// Check if the list is empty after clearing
console.log("Is the list empty after clearing?", myList.isEmpty()); // Should print: true
```

### DoublyLinkedList

```js
// Create a new instance of the DoublyLinkedList
const myDoublyList = new DoublyLinkedList();

// Check if the list is empty
console.log("Is the list empty?", myDoublyList.isEmpty()); // Should print: true

// Add elements to the list
myDoublyList.push(10); // Add 10 to the end
myDoublyList.push(20); // Add 20 to the end
myDoublyList.push(30); // Add 30 to the end

// Check the size of the list
console.log("Size of the list:", myDoublyList.size()); // Should print: 3

// Convert the doubly linked list to an array and print it
console.log("Doubly linked list as an array:", myDoublyList.toArray()); // Should print: [10, 20, 30]

// Get the head of the doubly linked list
console.log("Head of the list:", myDoublyList.getHead()); // Should print: Node { value: 10, prev: null, next: Node { value: 20, prev: [Circular], next: [Object] } }

// Insert an element at a specific index
myDoublyList.insertAt(1, 15); // Insert 15 at index 1

// Check the modified doubly linked list
console.log("Doubly linked list as an array:", myDoublyList.toArray()); // Should print: [10, 15, 20, 30]

// Get the node at a specific index
console.log("Node at index 2:", myDoublyList.get(2)); // Should print: Node { value: 20, prev: Node { value: 15, prev: [Object], next: [Object] }, next: Node { value: 30, prev: [Object], next: null } }

// Update the value of a node at a specific index
myDoublyList.set(0, 5); // Update the value at index 0 to 5

// Check the modified doubly linked list
console.log("Doubly linked list as an array:", myDoublyList.toArray()); // Should print: [5, 15, 20, 30]

// Remove a node at a specific index
const removedNode = myDoublyList.removeAt(2); // Remove the node at index 2 (value 20)

// Check the modified doubly linked list
console.log("Doubly linked list as an array:", myDoublyList.toArray()); // Should print: [5, 15, 30]

// Check the removed node
console.log("Removed node:", removedNode); // Should print: Node { value: 20, prev: null, next: null }

// Reverse the doubly linked list
myDoublyList.reverse();

// Check the reversed doubly linked list
console.log("Reversed doubly linked list:", myDoublyList.toArray()); // Should print: [30, 15, 5]

// Clear the doubly linked list
myDoublyList.clear();

// Check if the list is empty after clearing
console.log("Is the list empty after clearing?", myDoublyList.isEmpty()); // Should print: true
```

### Stack

```js
// Create a new instance of the Stack
const myStack = new Stack();

// Check if the stack is empty
console.log("Is the stack empty?", myStack.isEmpty()); // Should print: true

// Push elements onto the stack
myStack.push(10); // Push 10 onto the stack
myStack.push(20); // Push 20 onto the stack
myStack.push(30); // Push 30 onto the stack

// Check the size of the stack
console.log("Size of the stack:", myStack.size()); // Should print: 3

// Peek at the top of the stack (without removing)
console.log("Top of the stack:", myStack.peek()); // Should print: 30

// Convert the stack to an array and print it
console.log("Stack as an array:", myStack.toArray()); // Should print: [30, 20, 10]

// Pop elements from the stack
const poppedValue1 = myStack.pop(); // Pop 30
const poppedValue2 = myStack.pop(); // Pop 20

// Check the size of the stack after popping
console.log("Size of the stack after popping:", myStack.size()); // Should print: 1

// Check the popped values
console.log("Popped value 1:", poppedValue1); // Should print: 30
console.log("Popped value 2:", poppedValue2); // Should print: 20

// Clear the stack
myStack.clear();

// Check if the stack is empty after clearing
console.log("Is the stack empty after clearing?", myStack.isEmpty()); // Should print: true
```

## License

[MIT License](https://github.com/SandipDeb05/datacorejs/blob/main/LICENSE)

## Author & Maintainer

[Sandip Deb](https://github.com/SandipDeb05)
