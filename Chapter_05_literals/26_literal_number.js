// Number Literals in JavaScript

// 1. Base 10 (Decimal)
let decimal = 100;
console.log("Decimal:", decimal); // 100

// 2. Base 2 (Binary)
let binary = 0b1010;  // 10 in decimal
console.log("Binary:", binary); // 10

// 3. Base 8 (Octal)
let octal = 0o12;     // 10 in decimal
console.log("Octal:", octal); // 10

// 4. Base 16 (Hexadecimal)
let hexadecimal = 0xA; // 10 in decimal
console.log("Hexadecimal:", hexadecimal); // 10

// 5. Scientific notation
let scientific = 1.2e3; // 1200
console.log("Scientific:", scientific);

// 6. Number with decimal point
let floatNumber = 12.5;
console.log("Float Number:", floatNumber);

// 7. Infinity and NaN
let inf = Infinity;
let nan = NaN;
console.log("Infinity:", inf);
console.log("NaN:", nan);

// Some examples
console.log(0b1010); // 10
console.log(0o12);   // 10
console.log(0xA);    // 10
console.log(100.5);  // 100.5

// Summary:
// JavaScript number literals can be written
// 
// ; in decimal, binary, octal, hexadecimal, and scientific notation.
let million = 1e6; // 1,000,000
let tiny = 1e-6; // 0.000001