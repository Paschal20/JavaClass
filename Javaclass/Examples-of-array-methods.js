/*
    JavaScript Array Methods with Examples
*/

// 1. push() - Add element(s) to end
let arr1 = [1, 2, 3];
arr1.push(4); // [1,2,3,4]

// 2. pop() - Remove last element
arr1.pop(); // [1,2,3]

// 3. shift() - Remove first element
arr1.shift(); // [2,3]

// 4. unshift() - Add element(s) to start
arr1.unshift(0); // [0,2,3]

// 5. concat() - Merge arrays
let arr2 = [4, 5];
let merged = arr1.concat(arr2); // [0,2,3,4,5]

// 6. join() - Join elements into string
let str = arr1.join('-'); // "0-2-3"

// 7. slice() - Extract part of array
let sliced = arr1.slice(1, 3); // [2,3]

// 8. splice() - Add/remove elements
arr1.splice(1, 1, 9); // [0,9,3]



// 15. includes() - Check if value exists
let has9 = arr1.includes(9); // true

// 16. indexOf() - First index of value
let i = arr1.indexOf(9); // 1

// 17. lastIndexOf() - Last index of value
let arr3 = [1,2,3,2];
let lastIdx = arr3.lastIndexOf(2); // 3



// 20. sort() - Sort array
let arr4 = [3,1,2];
arr4.sort(); // [1,2,3]

// 21. reverse() - Reverse array
arr4.reverse(); // [3,2,1]

// 22. flat() - Flatten nested arrays
let nested = [1, [2, [3]]];
let flat1 = nested.flat(); // [1,2,[3]]
let flat2 = nested.flat(2); // [1,2,3]

// 23. fill() - Fill with static value
let arr5 = [1,2,3];
arr5.fill(0); // [0,0,0]

// 24. copyWithin() - Copy part within array
let arr6 = [1,2,3,4];
arr6.copyWithin(1,2); // [1,3,4,4]

// 25. toString() - Convert to string
let s = arr1.toString(); // "0,9,3"

// 26. Array.isArray() - Check if array
let isArr = Array.isArray(arr1); // true

// 27. entries() - Iterator of [index, value]
for (let [i, v] of arr1.entries()) {
    // i: index, v: value
}

// 28. keys() - Iterator of indices
for (let k of arr1.keys()) {
    // k: index
}

// 29. values() - Iterator of values
for (let v of arr1.values()) {
    // v: value
}

// 30. from() - Create array from iterable
let arr7 = Array.from('abc'); // ['a','b','c']

// 31. of() - Create array from arguments
let arr8 = Array.of(1,2,3); // [1,2,3]

//iteration Methods
// 9. forEach() - Loop through elements
arr1.forEach(x => console.log(x)); // 0 9 3

// 10. map() - Create new array by mapping
let mapped = arr1.map(x => x * 2); // [0,18,6]

// 11. filter() - Filter elements
let filtered = arr1.filter(x => x > 2); // [9,3]

// 12. reduce() - Reduce to single value
let sum = arr1.reduce((acc, val) => acc + val, 0); // 12

// 13. find() - Find first matching element
let found = arr1.find(x => x > 2); // 9

// 14. findIndex() - Find index of first match
let idx = arr1.findIndex(x => x > 2); // 1

// 18. every() - Test if all elements pass
let allPositive = arr1.every(x => x >= 0); // true

// 19. some() - Test if any element passes
let anyGreaterThan5 = arr1.some(x => x > 5); // true