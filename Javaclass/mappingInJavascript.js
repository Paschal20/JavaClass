/*
Step-by-step guide to simple mapping in JavaScript

1. Create an array of values.
2. Use the .map() method to transform each value.
3. Store or use the new array.

Example: Double each number in an array.
*/

// 1. Create an array
const numbers = [1, 2, 3, 4, 5];

// 2. Use .map() to create a new array with doubled values
const doubled = numbers.map(function(num) {
    return num * 2;
});

// 3. Output the result
console.log(doubled); // [2, 4, 6, 8, 10]

/*
You can also use arrow functions for brevity:
const doubled = numbers.map(num => num * 2);
*/