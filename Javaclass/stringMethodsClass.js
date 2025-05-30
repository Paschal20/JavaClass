let food = "riceandBeans";
let slicedFood = food.slice(-1);
console.log(slicedFood);

// .split() splits a string into an array of strings based on given seperators.

let date = "23,05,2025";
console.log(date.split(","));

let names = "Ade Yemi James John";
console.log(names.split(" "));

// .toString()  converts other data types (number or array) to string. value.toString()
// .padstart() strin.padStart(length, padString)

const num4 = "9";
console.log(num4.padStart(4, 0));
