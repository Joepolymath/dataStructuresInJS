// Testing prototypes

function Human() {
  this.name = "Joshua";
  this.age = 55;
  this.gender = "male";
}

Human.prototype.like = "sex";

const man1 = new Human();
// man1.like = "Programming";

console.log(man1.like);

const man2 = new Human();
console.log({ man2: man2.like });
