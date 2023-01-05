// This is a beginners naive approach of solving this.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let elements = [];
  loop1: for (let i = 0; i < nums.length; i++) {
    //  console.log(i);
    loop2: for (let j = 1; j < nums.length; j++) {
      console.log(j);
      if (nums[i] + nums[j] === target) {
        elements.push(i);
        elements.push(j);
        console.log(i, j);
        break loop1;
      }
    }
  }
  return elements;
};

console.log(twoSum([2, 7, 11, 15], 9));
