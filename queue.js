// A basic implementation of queue

function Queue(array) {
  this.array = [];
  if (array) this.array = array;
}

// Buffering or getting the array
Queue.prototype.getBuffer = function () {
  return this.array.slice();
};

// Checking if queue is empty
Queue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

// Enqueueing the queue
Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};

// Dequeueing the queue
Queue.prototype.dequeue = function () {
  return this.array.shift();
};

module.exports = Queue;
