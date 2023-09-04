import LinkedList from "./src/LinkedList/LinkedList.js";
import DoublyLinkedList from "./src/DoublyLinkedList/DoublyLinkedList.js";

const ll = new DoublyLinkedList();

ll.push(10);
ll.push(20);
ll.push(30);

// console.log(ll.unshift(10));
// console.log(ll.unshift(20));

console.log(ll.toArray());

export { LinkedList };
