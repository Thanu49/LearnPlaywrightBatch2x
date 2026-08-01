// == does type coercion
console.log(1 == "1");        // true
console.log(0 == false);      // true
console.log("" == 0);         // true
console.log(null == undefined); // true
console.log([] == 0);         // true

// === checks both value and type
console.log(1 === "1");       // false
console.log(0 === false);     // false
console.log("" === 0);        // false
console.log(null === undefined); // false
console.log([] === 0);        // false

// More confusing cases
console.log(" " == 0);        // true
console.log("0" == false);    // true
console.log("false" == false); // false
console.log([] == []);        // false
console.log({} == {});        // false

// Best practice
console.log("Use === instead of == for safer comparisons");

console.log(NaN == NaN);      // false
console.log(NaN === NaN);     // false
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("abc")); // false
console.log(isNaN("abc"));    // true

//always use === ( and !==)

//use == only for null/undefined check : if(x==null)
//use object.is() for NaN check : if(object.is(x,NaN))



