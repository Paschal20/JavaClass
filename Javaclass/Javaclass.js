/*let boy = " John Doe";
console.log(boy)
let gender = "male";
console.log(gender)
let num2 = 5;
let num3 = 7;

// Arithmetic Operators: (+ - * / % **)
console.log(num2 + num3);
console.log(5-2);
console.log(2*3);
console.log(num2/num3);
console.log(10%3);
console.log(2**3);

// Assignment Operators: (= += -= *= /= %= **=)
let names = "Munna, Mana, Joel, Joshua, John";
 
//comarison Operators: (== === != !== > < >= <=);
console.log(5 == "5"); // true
console.log(5 === "6"); // false
//console.log(5 + '5'); // 55
//console.log(5 == '5');
//console.log(5 != '5'); // false
console.log(5 !== '5'); // true





if you press Ctr J, the terminal will come up.
in the terminal you will see: C:\Users\PASCHAL\Desktop\Edutech\javascript> 

To enter open your java file type:
PS C:\Users\PASCHAL\Desktop\Edutech> cd javascript
PS C:\Users\PASCHAL\Desktop\Edutech\javascript> node Basic-of-javascript

array.slice(start, end)
string.slice(start, end)
*/

/*String methods
,toUpperCase(), toLowerCase(), charAt(), 
indexOf(), lastIndexOf(), split(),
 replace(), trim(), concat()
 slice(), trim(), include()
 replace(), concat(), CharAt()
 split(), toString(), padStart()
*/

let capitalWord = "HELLO WORLD";
let lowerWord = capitalWord.toLowerCase();
console.log(lowerWord);

// CharAt: A string method that returns the character at a specified index in a string.

//Number method

const one = 1; //Integer
let deci = 0.22; //float

// .toFixed()
// .toString
// .toExponential()
// .toPrecision()
// isNaN()
// parseInt()
// parseFloat()
// numberInteger()
// isInteger()

const fix = 3.3444;
console.log(fix.toFixed(2));

const large = 12345678;
console.log(large.toExponential(3));

const pi = 3.14159;
console.log(pi.toPrecision(3));

const int1 = 4.45;
console.log(Number.isInteger(int1));
console.log(Number.isInteger(4.0));

console.log(isNaN("werty"));

let blow = "45kg";
console.log(parseInt(blow));

let bigBlow = "60.67kg";
console.log(parseFloat(bigBlow));

