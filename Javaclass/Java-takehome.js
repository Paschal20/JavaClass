//Strings (5 questions)
//Convert this string to uppercase:
let string1 = "hello world";
let upperString1 = string1.toUpperCase();
console.log(upperString1);

//Extract "world" from this string using slice():
let greeting = "hello world";
let slicedGreeting = greeting.slice(6);
console.log(slicedGreeting);

//Replace all spaces with hyphens in this string:
let sentence = "JavaScript is awesome";
let dashedSentence = sentence.replace(/ /g, "-");
console.log(dashedSentence);

//Check if this string starts with "Mr":
let name = "Mr. Smith";
let startsWithMr = name.startsWith("Mr");
console.log(startsWithMr);

//Split this string into an array of words:
let phrase = "apple,banana,orange";
let wordArray = phrase.split(",");
console.log(wordArray);

//Numbers (5 questions)
//Convert this string to a number:

let numStr = "42";
let num = Number(numStr);
console.log(num);

//Round this number to 2 decimal places:
let price = 19.9876;
let roundedPrice = price.toFixed(2);
console.log(roundedPrice);

//Generate a random number between 1 and 10:
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);

//Check if this value is NaN:
let result = 0 / 0;
let isNaNResult = isNaN(result);
console.log(isNaNResult);

//Convert this number to a hexadecimal string:
let value = 255;
let hexValue = value.toString(16);
console.log(hexValue);

//Arrays (5 questions)
//Add "grape" to the end of this array:
let fruits = ["apple", "banana"];
fruits.push("grape");
console.log(fruits);

//Remove the first element from this array:
let colors = ["red", "green", "blue"];
colors.shift();
console.log(colors);

//Combine these two arrays:
let arr1 = [1, 2];
let arr2 = [3, 4];
let combinedArr = arr1.concat(arr2);
console.log(combinedArr);

//Reverse this array:
let letters = ["a", "b", "c"];
letters.reverse();
console.log(letters);

//Check if "banana" exists in this array:
let groceries = ["apple", "orange", "banana"];
let hasBanana = groceries.includes("banana");
console.log(hasBanana);

//Objects (5 questions)
//Access the age property of this object:
let person = { name: "John", age: 30 };
console.log(person.age);

//Add a new property to this object:
let car = { make: "Toyota" };
car.model = "Camry";
console.log(car);

//Get all keys of this object:
let student = { name: "Alice", grade: "A" };
let studentKeys = Object.keys(student);
console.log(studentKeys);

//Delete the password property from this object:
let user = { name: "Bob", password: "123" };
delete user.password;
console.log(user);

//Check if this object has an "email" property:
let contact = { name: "Sarah", phone: "555-1234" };
let hasEmail = contact.hasOwnProperty("email");
console.log(hasEmail);
