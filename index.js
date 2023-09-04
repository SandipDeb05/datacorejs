import Stack from "./src/Stack/Stack.js"; // Replace with the actual path to your Stack implementation file

// Create a new stack
const myStack = new Stack();

// Test push method to add elements to the stack
myStack.push(10);
myStack.push(20);
myStack.push(30);

// Test toArray method to convert the stack to an array
console.log(myStack.toArray()); // Output: [30, 20, 10] (because it's a stack, the last element added is at the top)

// Test pop method to remove an element from the top of the stack
console.log(myStack.pop()); // Output: 30

// Test peek method to get the top element without removing it
console.log(myStack.peek()); // Output: 20

// Test size, isEmpty, and clear methods
console.log(myStack.size()); // Output: 2
console.log(myStack.isEmpty()); // Output: false
myStack.clear();
console.log(myStack.size()); // Output: 0
console.log(myStack.isEmpty()); // Output: true
