const courses = [];
courses.push("physics");
console.log(courses);

const topics = ["Number Methods", "Operators", "Array"];
topics.push("Array Methods");
console.log(topics);
topics.pop();
console.log(topics);
topics.unshift("unshift");
console.log(topics);

topics.unshift("unshift2");
console.log(topics);

topics.splice(1, 1, "splice");
console.log(topics);
topics.splice(1, 3);
console.log(topics);
topics.push("push1", "push2");
console.log(topics);
topics.slice(0, 1);
console.log(topics);
const sli = ["slice1", "slice2", "slice3"];
console.log(sli);
console.log(sli.slice(0, 2));

// 1 push
// 2 pop
// 3 Unshift
// 4 splice
// 5 Concat
// 6 length
// 7 indexOf
// 8 includes
// 9 join
