// This is a testing ground for code snippets.

function test1(n) {
  while (n !== 0) {
    console.log(n);
    n--;
  }
}

function test2(n) {
  while (--n !== 0) {
    console.log(n);
  }
}

test1(5);
console.log("========== TEST 2 BELOW =========");
test2(6);
