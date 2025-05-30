// Store key-value pairs in a JavaScript object
// An object is a standalone etity with properties and functions
const data = {
  name: "John Doe",
  age: 30,
  occupation: "Software Developer",
  skills: ["JavaScript", "Python", "Java"],
  isActive: true,
};
console.log(data);

const animal = {
  type: "unknown",
  sound: "none",
  makesound() {
    console.log(this.sound);
  },
};

//Creation of objects
//Prototype declaration of object
let dog = Object.create(animal);
dog.type = "dog";
dog.sound = "woof";

console.log(dog);
console.log(animal);

//Object.assign - combines multiple objects into one
const defaultsettings = { theme: "light", fontsize: 16 };
const usersettings = { fontsize: 18 };
const finalsettings = Object.assign({}, defaultsettings, usersettings);
console.log(finalsettings);

//object.from
const ent = [
  ["name", "Tosin"],
  ["age", 25],
];
console.log(Object.fromEntries(ent));

//using spread operator
const original = { A: 77, b: 66 };
const final = { ...original, c: 55 };
console.log(final);

//Bandicam explain objects and how to create an object in JavaScript
// An object is a collection of properties, where each property is defined as a key-value pair.
// In JavaScript, you can create an object using object literals,
// the Object constructor, or the Object.create() method.

//Object.keys
//object.Entries
//Object.values
//object.freeze
//Object.seal
//how to delete entities in objects
