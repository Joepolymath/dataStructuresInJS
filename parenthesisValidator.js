// This validates parentheses using the Stack Data Structure.
const Stack = require("./stack");

function parenthesesIsValid(validationString) {
  const stack = new Stack();

  // looping throught to check for parentheses...
  for (i = 0; i < validationString.length; i++) {
    let currentChar = validationString.charAt(i);
    if (currentChar === "(") {
      stack.push(currentChar);
    } else if (currentChar === ")") {
      if (!stack.isEmpty()) return false;
      stack.pop();
    }
    return stack.isEmpty();
  }
}

console.log(parenthesesIsValid("(asdflk))"));
