//*** Data Types & Operators ***//

// Exercise 1: Numbers
console.log("--- Numbers ---");
// 1. Declare integer and floating-point number variables.
let integerVar = 25;
let floatVar = 7.5;
// 2. Perform arithmetic operations.
let additionResult = integerVar + 5;
let subtractionResult = integerVar - 10;
let multiplicationResult = floatVar * 2;
let divisionResult = integerVar / 5;
let modulusResult = integerVar % 4; // Remainder of 25 / 4
let exponentiationResult = floatVar ** 2; // 7.5 raised to the power of 2
// 3. Print all your variables and results.
console.log("Integer Variable:", integerVar);
console.log("Floating Variable:", floatVar);
console.log("Addition (integerVar + 5):", additionResult);
console.log("Subtraction (integerVar - 10):", subtractionResult);
console.log("Multiplication (floatVar * 2):", multiplicationResult);
console.log("Division (integerVar / 5):", divisionResult);
console.log("Modulus (integerVar % 4):", modulusResult);
console.log("Exponentiation (floatVar ** 2):", exponentiationResult);
console.log("\n");

// Exercise 2: Boolean and Operators
console.log("--- Boolean and Operators ---");
// 1. Compare two numbers.
let numA = 10;
let numB = 20;
let isAGreaterThanB = numA > numB;
let isALessThanB = numA < numB;
console.log(`${numA} > ${numB}:`, isAGreaterThanB);
console.log(`${numA} < ${numB}:`, isALessThanB);

// 2. Declare x = 8 and y = 12.
let x = 8;
let y = 12;
console.log(`x = ${x}, y = ${y}`);
// a. Compare and print results.
// b. If x is greater than y.
console.log("Is x > y?", x > y);
// c. If x is less than or equal to y.
console.log("Is x <= y?", x <= y);
// d. If x is equal to y.
console.log("Is x == y?", x == y);
console.log("Is x === y?", x === y);
// e. If x is not equal to y.
console.log("Is x != y?", x != y);
console.log("Is x !== y?", x !== y);

// 3. Logical operations with a = true, b = false.
let a = true;
let b = false;
console.log(`a = ${a}, b = ${b}`);
// a. a AND b
console.log("a AND b (a && b):", a && b);
// b. a OR b
console.log("a OR b (a || b):", a || b);
// c. NOT a
console.log("NOT a (!a):", !a);

// 4. Assignment operators with p = 10.
let p = 10;
console.log(`Initial p = ${p}`);
// a. +=
p += 5; // p = p + 5
console.log("After p += 5:", p);
// b. -=
p -= 3; // p = p - 3
console.log("After p -= 3:", p);
// c. *=
p *= 2; // p = p * 2
console.log("After p *= 2:", p);
// d. /=
p /= 4; // p = p / 4
console.log("After p /= 4:", p);
// e. %=
p %= 5; // p = p % 5 (remainder of 6 / 5)
console.log("After p %= 5:", p);
console.log("\n");