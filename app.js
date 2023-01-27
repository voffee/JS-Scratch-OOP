
// String

const name1 = 'Jeff'; //primitive so the type will be string and value Jeff

const name2 = new String('Jeff'); // Type will be object with VALUE of Jeff

// name2.foo = 'bar'; // Property of foo and value of 'bar'
// console.log(name2);

console.log(typeof name2);

if (name2 == 'Jeff') {
    // Double == will validate the value but not type
    // Triple === will validate value and type
    console.log('YES');
} else {
    console.log('NO');
}

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Functions
const getSum1 = function(x, y) {
return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1');

// Object
const john1 = {name: "John"};
const john2 = new Object({name: "John"});

console.log(john2);

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

// Can use this way of creating arrays, it is not useful for the other types of structures.
console.log(arr1);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);