const LinkedList = require("./linkedList");

const SinglyLinkedList = LinkedList.SinglyLinkedList;

const list = new SinglyLinkedList();

console.log(list.isEmpty());
list.insert(5);
list.insert(6);
list.insert(7);
list.insert(8);
list.insert(9);
console.log(list.isEmpty());
console.log("First Element", list.getFirst());
console.log("Last Element", list.getLast());
console.log(list.bufferData());
