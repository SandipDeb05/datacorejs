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

### Queue

```js
// Create a new instance of the Queue
const myQueue = new Queue();

// Check if the queue is empty
console.log("Is the queue empty?", myQueue.isEmpty()); // Should print: true

// Enqueue elements into the queue
myQueue.enqueue(10); // Enqueue 10
myQueue.enqueue(20); // Enqueue 20
myQueue.enqueue(30); // Enqueue 30

// Check the size of the queue
console.log("Size of the queue:", myQueue.size()); // Should print: 3

// Peek at the front of the queue (without removing)
console.log("Front of the queue:", myQueue.peek()); // Should print: 10

// Convert the queue to an array and print it
console.log("Queue as an array:", myQueue.toArray()); // Should print: [10, 20, 30]

// Dequeue elements from the queue
const dequeuedValue1 = myQueue.dequeue(); // Dequeue 10
const dequeuedValue2 = myQueue.dequeue(); // Dequeue 20

// Check the size of the queue after dequeuing
console.log("Size of the queue after dequeuing:", myQueue.size()); // Should print: 1

// Check the dequeued values
console.log("Dequeued value 1:", dequeuedValue1); // Should print: 10
console.log("Dequeued value 2:", dequeuedValue2); // Should print: 20

// Clear the queue
myQueue.clear();

// Check if the queue is empty after clearing
console.log("Is the queue empty after clearing?", myQueue.isEmpty()); // Should print: true
```

### BinarySearchTree

```js
// Create a new instance of the BinarySearchTree
const bst = new BinarySearchTree();

// Check if the BST is empty
console.log("Is the BST empty?", bst.isEmpty()); // Should print: true

// Insert values into the BST
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

// Check if the BST is empty after inserting
console.log("Is the BST empty after inserting?", bst.isEmpty()); // Should print: false

// Get the root node of the BST
const root = bst.getRoot();
console.log("Root node value:", root.value); // Should print: 50

// Check if the BST contains specific values
console.log("Does BST contain 30?", bst.contains(30)); // Should print: true
console.log("Does BST contain 90?", bst.contains(90)); // Should print: false

// Perform breadth-first search (BFS) traversal
console.log("BFS traversal:", bst.bfs()); // Should print: [50, 30, 70, 20, 40, 60, 80]

// Perform depth-first search (DFS) in pre-order traversal
console.log("DFS (Pre-order) traversal:", bst.dfsPreOrder()); // Should print: [50, 30, 20, 40, 70, 60, 80]

// Perform depth-first search (DFS) in post-order traversal
console.log("DFS (Post-order) traversal:", bst.dfsPostOrder()); // Should print: [20, 40, 30, 60, 80, 70, 50]

// Perform depth-first search (DFS) in in-order traversal
console.log("DFS (In-order) traversal:", bst.dfsInOrder()); // Should print: [20, 30, 40, 50, 60, 70, 80]

// Find the minimum value in the BST
console.log("Minimum value in BST:", bst.min()); // Should print: 20

// Find the maximum value in the BST
console.log("Maximum value in BST:", bst.max()); // Should print: 80

// Delete a value from the BST
bst.delete(30);
console.log("Deleted 30 from BST. In-order traversal:", bst.dfsInOrder()); // Should print: [20, 40, 50, 60, 70, 80]

// Calculate the height of the BST
console.log("Height of BST:", bst.height(root)); // Should print: 3

// Print nodes at a specific level (level 2)
console.log("Nodes at level 2:");
bst.printLevel(root, 2);

// Check if the BST is a valid Binary Search Tree (BST)
console.log("Is the BST a valid BST?", bst.isBST(root, -Infinity, Infinity)); // Should print: true
```

## License

[MIT License](https://github.com/SandipDeb05/datacorejs/blob/main/LICENSE)

## Author & Maintainer

[Sandip Deb](https://github.com/SandipDeb05)
