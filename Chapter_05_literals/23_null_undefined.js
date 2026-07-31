// null and undefined in JavaScript

// null = empty value or intentional absence of value
// undefined = value assigned automatically when a variable is declared but not assigned

let a;
console.log(a); // undefined

let b = null;
console.log(b); // null

console.log(typeof a); // undefined
console.log(typeof b); // object

// Example difference
let name1 = undefined;
let name2 = null;

console.log(name1); // undefined
console.log(name2); // null

// Important: null means "empty value" and undefined means "variable declared but not assigned"
