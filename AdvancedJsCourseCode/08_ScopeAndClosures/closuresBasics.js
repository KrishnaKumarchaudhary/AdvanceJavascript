//Clouser => when we define a function inside a finction and the
// inside function have the ablility to access outer function variab🇱🇸
//and the outer function return inner function;

function outerFunction() {
  let outerVariable = "I am from outer!";
  function innerFunction() {
    console.log("I AM THE INNER FUNCTION");
    console.log("outerVariable is", outerVariable);
  }
  return innerFunction;
}

const myClosure = outerFunction();
myClosure();

function idGenerator() {
  let count = 1;
  return function generate() {
    return count++;
  };
}

const nextId = idGenerator();
for (let i = 0; i < 10; i++) {
  console.log(nextid());
}
