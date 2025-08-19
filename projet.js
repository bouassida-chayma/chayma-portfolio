//  String Manipulation Functions

// 1. Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 2. Count Characters
function countCharacters(str) {
  return str.length;
}

// 3. Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

//Array Functions

// 4. Find Maximum
function findMax(arr) {
  return Math.max(...arr);
}

// 5. Find Minimum
function findMin(arr) {
  return Math.min(...arr);
}

// 6. Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// 7. Filter Array (pass your condition as a function)
function filterArray(arr, condition) {
  return arr.filter(condition);
}

// Mathematical Functions

// 8. Factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// 9. Prime Number Check
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 10. Fibonacci Sequence
function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}