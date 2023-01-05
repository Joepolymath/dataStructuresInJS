// Implementation of Linked list

function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.size = 0;
}

SinglyLinkedList.prototype.isEmpty = function () {
  return this.size === 0;
};

// Insertion
SinglyLinkedList.prototype.insert = function (value) {
  if (this.head === null) {
    this.head = new SinglyLinkedListNode(value);
  } else {
    let temp = this.head;
    this.head = new SinglyLinkedListNode(value);
    this.head.next = temp;
  }
  this.size++;
};

// Deletion by value
SinglyLinkedList.prototype.remove = function (value) {
  let currentHead = this.head;
  if (currentHead === value) {
    this.head = currentHead.next;
    this.head--;
  } else {
    let prev = currentHead;
    while (currentHead.next) {
      if (currentHead.data === value) {
        prev.next = currentHead.next;
        prev = currentHead;
        currentHead = currentHead.next;
        break;
      }
      prev = currentHead;
      currentHead = currentHead.next;
    }
  }
};

module.exports = {
  SinglyLinkedList,
  SinglyLinkedListNode,
};
