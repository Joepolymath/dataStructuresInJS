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
  if (currentHead.data === value) {
    this.head = currentHead.next;
    this.size--;
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

SinglyLinkedList.prototype.getFirst = function () {
  return this.head.data;
};

SinglyLinkedList.prototype.getLast = function () {
  let lastNode = this.head;
  if (lastNode) {
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
  }
  return lastNode.data;
};

SinglyLinkedList.prototype.bufferData = function () {
  let array = [];
  let currentNode = this.head;
  if (currentNode) {
    while (currentNode.next) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    array.push(currentNode.data);
    return array;
  }
  return array;
};

module.exports = {
  SinglyLinkedList,
  SinglyLinkedListNode,
};
