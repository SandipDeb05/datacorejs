# datacorejs

[![npm](https://img.shields.io/npm/v/datacorejs.svg)](https://www.npmjs.com/package/your-package-name)
[![License](https://img.shields.io/npm/l/datacorejs.svg)](LICENSE)

## Description

Datacorejs is a JavaScript library that provides a collection of commonly used data structures to simplify your development tasks. Whether you're working on algorithms, data manipulation, or need efficient storage solutions, this package has you covered. It's designed to be easy to use, well-documented, and highly performant.

## Table of Contents

- [Install](#Install)
- [import](#import)
- [API](#api)
  - [constructor](#constructor)
  - [LinkedList](#LinkedList)
  - [DoublyLinkedList](#DoublyLinkedList)
  - [Stack](#Stack)
  - [Queue](#Queue)
  - [BinarySearchTree](#BinarySearchTree)
  - [Graph](#Graph)
- [License](#License)
- [Author](#Author)

## Install

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
const linkedList = new LinkedList();

// Check if the list is empty
console.log("Is the list empty?", linkedList.isEmpty()); // Should print: true

// Add elements to the list
linkedList.push(10); // Add 10 to the end
linkedList.push(20); // Add 20 to the end
linkedList.push(30); // Add 30 to the end

// Check the size of the list
console.log("Size of the list:", linkedList.size()); // Should print: 3

// Convert the linked list to an array and print it
console.log("Linked list as an array:", linkedList.toArray()); // Should print: [10, 20, 30]

// Get the head of the linked list
console.log("Head of the list:", linkedList.getHead()); // Should print: Node { value: 10, next: Node { value: 20, next: Node { value: 30, next: null } } }

// Insert an element at a specific index
linkedList.insertAt(1, 15); // Insert 15 at index 1

// Check the modified linked list
console.log("Linked list as an array:", linkedList.toArray()); // Should print: [10, 15, 20, 30]

// Get the node at a specific index
console.log("Node at index 2:", linkedList.get(2)); // Should print: Node { value: 20, next: Node { value: 30, next: null } }

// Update the value of a node at a specific index
linkedList.set(0, 5); // Update the value at index 0 to 5

// Check the modified linked list
console.log("Linked list as an array:", linkedList.toArray()); // Should print: [5, 15, 20, 30]

// Remove a node at a specific index
const removedNode = linkedList.removeAt(2); // Remove the node at index 2 (value 20)

// Check the modified linked list
console.log("Linked list as an array:", linkedList.toArray()); // Should print: [5, 15, 30]

// Check the removed node
console.log("Removed node:", removedNode); // Should print: Node { value: 20, next: null }

// Reverse the linked list
linkedList.reverse();

// Check the reversed linked list
console.log("Reversed linked list:", linkedList.toArray()); // Should print: [30, 15, 5]

// Clear the linked list
linkedList.clear();

// Check if the list is empty after clearing
console.log("Is the list empty after clearing?", linkedList.isEmpty()); // Should print: true
```

### DoublyLinkedList

```js
// Create a new instance of the DoublyLinkedList
const doublyLinkedList = new DoublyLinkedList();

// Check if the list is empty
console.log("Is the list empty?", doublyLinkedList.isEmpty()); // Should print: true

// Add elements to the list
doublyLinkedList.push(10); // Add 10 to the end
doublyLinkedList.push(20); // Add 20 to the end
doublyLinkedList.push(30); // Add 30 to the end

// Check the size of the list
console.log("Size of the list:", doublyLinkedList.size()); // Should print: 3

// Convert the doubly linked list to an array and print it
console.log("Doubly linked list as an array:", doublyLinkedList.toArray()); // Should print: [10, 20, 30]

// Get the head of the doubly linked list
console.log("Head of the list:", doublyLinkedList.getHead()); // Should print: Node { value: 10, prev: null, next: Node { value: 20, prev: [Circular], next: [Object] } }

// Insert an element at a specific index
doublyLinkedList.insertAt(1, 15); // Insert 15 at index 1

// Check the modified doubly linked list
console.log("Doubly linked list as an array:", doublyLinkedList.toArray()); // Should print: [10, 15, 20, 30]

// Get the node at a specific index
console.log("Node at index 2:", doublyLinkedList.get(2)); // Should print: Node { value: 20, prev: Node { value: 15, prev: [Object], next: [Object] }, next: Node { value: 30, prev: [Object], next: null } }

// Update the value of a node at a specific index
doublyLinkedList.set(0, 5); // Update the value at index 0 to 5

// Check the modified doubly linked list
console.log("Doubly linked list as an array:", doublyLinkedList.toArray()); // Should print: [5, 15, 20, 30]

// Remove a node at a specific index
const removedNode = doublyLinkedList.removeAt(2); // Remove the node at index 2 (value 20)

// Check the modified doubly linked list
console.log("Doubly linked list as an array:", doublyLinkedList.toArray()); // Should print: [5, 15, 30]

// Check the removed node
console.log("Removed node:", removedNode); // Should print: Node { value: 20, prev: null, next: null }

// Reverse the doubly linked list
doublyLinkedList.reverse();

// Check the reversed doubly linked list
console.log("Reversed doubly linked list:", doublyLinkedList.toArray()); // Should print: [30, 15, 5]

// Clear the doubly linked list
doublyLinkedList.clear();

// Check if the list is empty after clearing
console.log("Is the list empty after clearing?", doublyLinkedList.isEmpty()); // Should print: true
```

### Stack

```js
// Create a new instance of the Stack
const stack = new Stack();

// Check if the stack is empty
console.log("Is the stack empty?", stack.isEmpty()); // Should print: true

// Push elements onto the stack
stack.push(10); // Push 10 onto the stack
stack.push(20); // Push 20 onto the stack
stack.push(30); // Push 30 onto the stack

// Check the size of the stack
console.log("Size of the stack:", stack.size()); // Should print: 3

// Peek at the top of the stack (without removing)
console.log("Top of the stack:", stack.peek()); // Should print: 30

// Convert the stack to an array and print it
console.log("Stack as an array:", stack.toArray()); // Should print: [30, 20, 10]

// Pop elements from the stack
const poppedValue1 = stack.pop(); // Pop 30
const poppedValue2 = stack.pop(); // Pop 20

// Check the size of the stack after popping
console.log("Size of the stack after popping:", stack.size()); // Should print: 1

// Check the popped values
console.log("Popped value 1:", poppedValue1); // Should print: 30
console.log("Popped value 2:", poppedValue2); // Should print: 20

// Clear the stack
stack.clear();

// Check if the stack is empty after clearing
console.log("Is the stack empty after clearing?", stack.isEmpty()); // Should print: true
```

### Queue

```js
// Create a new instance of the Queue
const queue = new Queue();

// Check if the queue is empty
console.log("Is the queue empty?", queue.isEmpty()); // Should print: true

// Enqueue elements into the queue
queue.enqueue(10); // Enqueue 10
queue.enqueue(20); // Enqueue 20
queue.enqueue(30); // Enqueue 30

// Check the size of the queue
console.log("Size of the queue:", queue.size()); // Should print: 3

// Peek at the front of the queue (without removing)
console.log("Front of the queue:", queue.peek()); // Should print: 10

// Convert the queue to an array and print it
console.log("Queue as an array:", queue.toArray()); // Should print: [10, 20, 30]

// Dequeue elements from the queue
const dequeuedValue1 = queue.dequeue(); // Dequeue 10
const dequeuedValue2 = queue.dequeue(); // Dequeue 20

// Check the size of the queue after dequeuing
console.log("Size of the queue after dequeuing:", queue.size()); // Should print: 1

// Check the dequeued values
console.log("Dequeued value 1:", dequeuedValue1); // Should print: 10
console.log("Dequeued value 2:", dequeuedValue2); // Should print: 20

// Clear the queue
queue.clear();

// Check if the queue is empty after clearing
console.log("Is the queue empty after clearing?", queue.isEmpty()); // Should print: true
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

### Graph

```js
// Create a new instance of the Graph
const graph = new Graph();

// Add vertices to the graph
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

// Add edges to the graph
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");

// Print the graph's adjacency list
console.log("Graph Adjacency List:");
graph.printGraph();
/*
Should print:
A -> B,C
B -> A,D
C -> A,E
D -> B
E -> C
*/

// Check if the graph has specific edges
console.log("Does graph have edge A to B?", graph.hasEdge("A", "B")); // Should print: true
console.log("Does graph have edge B to C?", graph.hasEdge("B", "C")); // Should print: false

// Check if the graph has specific vertices
console.log("Does graph have vertex A?", graph.hasVertex("A")); // Should print: true
console.log("Does graph have vertex F?", graph.hasVertex("F")); // Should print: false

// Remove edges from the graph
graph.removeEdge("A", "B");
console.log("Graph Adjacency List after removing edge A to B:");
graph.printGraph();
/*
Should print:
A -> C
B -> D
C -> A,E
D -> B
E -> C
*/

// Remove vertices from the graph
graph.removeVertex("C");
console.log("Graph Adjacency List after removing vertex C:");
graph.printGraph();
/*
Should print:
A -> 
B -> D
D -> B
E -> 
*/

// Perform Depth-First Search (DFS) starting from vertex 'A'
console.log("DFS starting from vertex A:", graph.dfs("A")); // Should print: ['A']

// Perform Breadth-First Search (BFS) starting from vertex 'B'
console.log("BFS starting from vertex B:", graph.bfs("B")); // Should print: ['B', 'D']
```

## License

[MIT License](https://github.com/SandipDeb05/datacorejs/blob/main/LICENSE)

## Author

[Sandip Deb](https://github.com/SandipDeb05)
