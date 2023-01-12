const Human = {
  fullname: function () {
    return this.name;
  },
  age: 76,
};

const noiseMaker = {
  name: "Chloe",
};

// console.log(Human.fullname.call(noiseMaker));

// =================================
function is_array(input) {
  console.log(typeof input);
  if (toString.call(input) === "[object Array]") return true;
  return false;
}
// console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));
