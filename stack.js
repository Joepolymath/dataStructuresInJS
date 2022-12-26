//  Learning to implement stack

function Stack(array) {
  this.array = [];
  if (array) this.array = array;
}

Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

Stack.prototype.isEmpty = function () {
  return this.array.length === 0;
};

Stack.prototype.pop = function () {
  let lastElement = this.peek();
  this.array.pop();
  console.log(`Element, ${lastElement} popped successfully.`);
};

Stack.prototype.push = function (value) {
  this.array.push(value);
  console.log(`The value ${value} is pushed.`);
};

// Peeking means returning the last added element to the stack without removing it from stack.
Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
};

module.exports = Stack;
