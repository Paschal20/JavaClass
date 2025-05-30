/**
 * JavaScript String Methods with Examples
 */

// 1. charAt()
console.log('Hello'.charAt(1)); // "e"

// 2. charCodeAt()
console.log('Hello'.charCodeAt(1)); // 101

// 3. concat()
console.log('Hello'.concat(' ', 'World')); // "Hello World"

// 4. includes()
console.log('Hello World'.includes('World')); // true

// 5. endsWith()
console.log('Hello.js'.endsWith('.js')); // true

// 6. indexOf()
console.log('Hello World'.indexOf('o')); // 4

// 7. lastIndexOf()
console.log('Hello World'.lastIndexOf('o')); // 7

// 8. match()
console.log('Hello 123'.match(/\d+/)); // ["123"]

// 9. repeat()
console.log('Hi! '.repeat(3)); // "Hi! Hi! Hi! "

// 10. replace()
console.log('Hello World'.replace('World', 'JavaScript')); // "Hello JavaScript"

// 11. replaceAll()
console.log('foo bar foo'.replaceAll('foo', 'baz')); // "baz bar baz"

// 12. search()
console.log('Hello World'.search('World')); // 6

// 13. slice()
console.log('Hello World'.slice(0, 5)); // "Hello"

// 14. split()
console.log('a,b,c'.split(',')); // ["a", "b", "c"]

// 15. startsWith()
console.log('JavaScript'.startsWith('Java')); // true

// 16. substring()
console.log('Hello World'.substring(0, 5)); // "Hello"

// 17. toLowerCase()
console.log('HELLO'.toLowerCase()); // "hello"

// 18. toUpperCase()
console.log('hello'.toUpperCase()); // "HELLO"

// 19. trim()
console.log('   Hello   '.trim()); // "Hello"

// 20. trimStart() / trimLeft()
console.log('   Hello   '.trimStart()); // "Hello   "

// 21. trimEnd() / trimRight()
console.log('   Hello   '.trimEnd()); // "   Hello"

// 22. valueOf()
console.log('Hello'.valueOf()); // "Hello"

// 23. padStart()
console.log('5'.padStart(3, '0')); // "005"

// 24. padEnd()
console.log('5'.padEnd(3, '0')); // "500"

// 25. toString()
console.log((123).toString()); // "123"

// 26. localeCompare()
console.log('a'.localeCompare('b')); // -1

// 27. normalize()
console.log('\u00E9'.normalize('NFD')); // "é"

// 28. at()
console.log('Hello'.at(1)); // "e"

// 29. codePointAt()
console.log('𠮷'.codePointAt(0)); // 134071

// 30. matchAll()
console.log([...('test1test2'.matchAll(/test\d/g))].map(m => m[0])); // ["test1", "test2"]

// 31. anchor()
console.log('Hello'.anchor('myAnchor')); // "<a name=\"myAnchor\">Hello</a>"

// 32. big()
console.log('Hello'.big()); // "<big>Hello</big>"

// 33. blink()
console.log('Hello'.blink()); // "<blink>Hello</blink>"

// 34. bold()
console.log('Hello'.bold()); // "<b>Hello</b>"

// 35. fixed()
console.log('Hello'.fixed()); // "<tt>Hello</tt>"

// 36. fontcolor()
console.log('Hello'.fontcolor('red')); // "<font color=\"red\">Hello</font>"

// 37. fontsize()
console.log('Hello'.fontsize(5)); // "<font size=\"5\">Hello</font>"

// 38. italics()
console.log('Hello'.italics()); // "<i>Hello</i>"

// 39. link()
console.log('Hello'.link('https://example.com')); // "<a href=\"https://example.com\">Hello</a>"

// 40. small()
console.log('Hello'.small()); // "<small>Hello</small>"

// 41. strike()
console.log('Hello'.strike()); // "<strike>Hello</strike>"

// 42. sub()
console.log('Hello'.sub()); // "<sub>Hello</sub>"

// 43. sup()
console.log('Hello'.sup()); // "<sup>Hello</sup>"