//*** Conditional Statements & Loops ***//

// Exercise 1: Temperature check
console.log("--- Temperature Check (if-else) ---");
let temperature = 18; // Try changing this value

// 1. Using if-else statements
if (temperature < 0) {
    console.log("It's freezing!"); 
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild."); 
} else { 
    console.log("It's warm."); 
}

// 2. Using switch statement
console.log("--- Temperature Check (switch) ---");
// We use 'true' to check the condition within cases.
switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature >= 16 && temperature <= 25):
        console.log("It's mild.");
        break;
    case (temperature > 25):
        console.log("It's warm.");
        break;
    default:
        console.log("Invalid temperature.");
        break;
}
console.log("\n");


// Exercise 2: Divisibility Check
console.log("--- Divisibility Check (if-else) ---");
let checkNumber = 6; 

// 1. Using if-else statements
if (checkNumber % 2 === 0 && checkNumber % 3 === 0) {
    console.log("Divisible by both.");
} else if (checkNumber % 2 === 0) {
    console.log("Divisible by 2.");
} else if (checkNumber % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

// 2. Using switch statement
console.log("--- Divisibility Check (switch - less ideal) ---");
switch (true) {
    case (checkNumber % 2 === 0 && checkNumber % 3 === 0):
        console.log("Divisible by both.");
        break;
    case (checkNumber % 2 === 0):
        console.log("Divisible by 2.");
        break;
    case (checkNumber % 3 === 0):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
        break;
}
console.log("\n");


// Exercise 3: For loops
console.log("--- For Loops ---");
// 1. Print numbers from 1 to 10.
console.log("Numbers 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Print all even numbers between 1 and 20.
console.log("Even numbers 1 to 20:");
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


// 3. Calculate the sum of all numbers from 1 to 100.
let sum1to100 = 0;
for (let i = 1; i <= 100; i++) {
    sum1to100 += i; 
}
console.log("Sum of numbers 1 to 100:", sum1to100);

// 4. Print each element of the array [1, 2, 3, 4, 5].
console.log("Printing array elements [1, 2, 3, 4, 5]:");
const numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}


// 5. Find and print the largest number in [3, 7, 2, 5, 10, 6].
console.log("Finding largest number in [3, 7, 2, 5, 10, 6]:");
const numbers2 = [3, 7, 2, 5, 10, 6];
let largestNumber = numbers2[0]; // Assume first element is largest initially
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largestNumber) {
        largestNumber = numbers2[i]; // Found a larger number, update
    }
}
console.log("Largest number:", largestNumber);
console.log("\n");


// Exercise 4: While loops
console.log("--- While Loops ---");
// 1. Print numbers from 1 to 10.
console.log("Numbers 1 to 10 (while):");
let count1 = 1;
while (count1 <= 10) {
    console.log(count1);
    count1++;
}

// 2. Print all even numbers between 1 and 20.
console.log("Even numbers 1 to 20 (while):");
let count2 = 2;
while (count2 <= 20) {
    console.log(count2);
    count2 += 2;
}

// 3. Calculate the sum of all numbers from 1 to 100.
let sumWhile = 0;
let count3 = 1;
while (count3 <= 100) {
    sumWhile += count3;
    count3++;
}
console.log("Sum of numbers 1 to 100 (while):", sumWhile);

// 4. Print all multiples of 5 less than 50.
console.log("Multiples of 5 less than 50 (while):");
let count4 = 5;
while (count4 < 50) {
    console.log(count4);
    count4 += 5;
}
console.log("\n");


// Exercise 5: Do While loops
console.log("--- Do While Loops ---");
// 1. Print numbers from 1 to 10.
console.log("Numbers 1 to 10 (do-while):");
let doCount1 = 1;
do {
    console.log(doCount1);
    doCount1++;
} while (doCount1 <= 10);

// 2. Calculate the sum of all numbers from 1 to 100.
let sumDoWhile = 0;
let doCount2 = 1;
do {
    sumDoWhile += doCount2;
    doCount2++;
} while (doCount2 <= 100);
console.log("Sum of numbers 1 to 100 (do-while):", sumDoWhile);

// 3. Prompt user for number > 10. 
// This code is illustrative for a browser context.
/*
let userNumber;
do {
  userNumber = prompt("Enter a number greater than 10:");
  // Convert the input string to a number, handle non-numeric input
  userNumber = Number(userNumber);
  if (isNaN(userNumber)) {
      alert("That's not a valid number. Please try again.");
  } else if (userNumber <= 10) {
      alert("Number must be greater than 10. Try again.");
  }
} while (isNaN(userNumber) || userNumber <= 10);
console.log("You entered a valid number:", userNumber);
alert("Thank you! You entered: " + userNumber);
*/
console.log("Skipping prompt example (requires browser environment).");


// 4. Simple guessing game (number 1-10).
// This code is illustrative for a browser context.
/*
const correctNumber = Math.floor(Math.random() * 10) + 1; // Random number 1-10
let userGuess;
let attempts = 0;
console.log("Guessing game started (number is " + correctNumber + ")"); // For testing

do {
    userGuess = prompt("Guess a number between 1 and 10:");
    userGuess = Number(userGuess);
    attempts++;

    if (isNaN(userGuess)) {
        alert("Please enter a valid number.");
    } else if (userGuess < 1 || userGuess > 10) {
        alert("Number must be between 1 and 10.");
    } else if (userGuess < correctNumber) {
        alert("Too low! Try again.");
    } else if (userGuess > correctNumber) {
        alert("Too high! Try again.");
    }

} while (userGuess !== correctNumber);

alert("Correct! You guessed the number " + correctNumber + " in " + attempts + " attempts.");
console.log("Game finished. Correct number was " + correctNumber + ". Attempts: " + attempts);
*/
console.log("Skipping guessing game example (requires browser environment).");
console.log("\n");