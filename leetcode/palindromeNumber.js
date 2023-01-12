/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let stringedNum = x.toString();
  let array = stringedNum.split("");
  let reversedArray = array.reverse();
  if (stringedNum !== reversedArray.join("")) {
    return false;
  }
  return true;
};
