/**
 * Examples of JavaScript Number methods
 */

// 1. toFixed() - formats a number using fixed-point notation
let num1 = 123.456;
console.log(num1.toFixed(2)); // "123.46"

// 2. toExponential() - returns a string with a number in exponential notation
let num2 = 98765.4321;
console.log(num2.toExponential(3)); // "9.877e+4"

// 3. toPrecision() - formats a number to a specified length
let num3 = 5.6789;
console.log(num3.toPrecision(3)); // "5.68"

// 4. toString() - converts a number to a string
let num4 = 255;
console.log(num4.toString()); // "255"
console.log(num4.toString(16)); // "ff" (hexadecimal)

// 5. parseInt() - parses a string and returns an integer
let str1 = "42px";
console.log(parseInt(str1)); // 42

// 6. parseFloat() - parses a string and returns a floating point number
let str2 = "3.14159 is pi";
console.log(parseFloat(str2)); // 3.14159

// 7. isNaN() - checks if a value is NaN (Not-a-Number)
console.log(isNaN("hello")); // true
console.log(isNaN(123)); // false

// 8. isFinite() - checks if a value is a finite number
console.log(isFinite(100)); // true
console.log(isFinite(Infinity)); // false

// 9. Number() - converts a value to a number
console.log(Number("123")); // 123
console.log(Number("abc")); // NaN

// 10. Number.isInteger() - checks if a value is an integer
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false

//