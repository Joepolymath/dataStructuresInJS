/**
 * @param {string}
 * @return {number}
 */
var romanToInt = function (s) {
  let romanNums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let array = s.split("");
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    let val1 = romanNums[array[i]];
    let val2 = romanNums[array[i + 1]];
    if (i + 1 < array.length) {
      if (val1 >= val2) {
        total += val1;
      } else {
        total = total + val2 - val1;
        i++;
      }
    } else {
      total = total + val1;
    }
  }
  return total;
};

console.log(romanToInt("LVIII"));
