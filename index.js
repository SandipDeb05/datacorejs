import Queue from "./src/Queue/Queue.js";
import Stack from "./src/Stack/Stack.js";
const queue = new Queue();
console.log(queue.enqueue(10));
console.log(queue.enqueue(20));
console.log(queue.enqueue(30));
console.log(queue.enqueue(40));

// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
console.log(queue.toArray());
console.log(queue);
