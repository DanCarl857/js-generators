/* List of utility functions to help out */
let utils = {};

// Recursively solve for the factorial of n
utils.factorial = (n) => {
  if (n < 0) {
    return -1;
  } 
  else if (n === 0) {
    return 1;
  } else {
    return n * utils.factorial(n - 1);
  }
}

// Check if a number is prime
utils.isPrime = (n) => {
  // Reduce complexity of algorithm from O(n) to O(sqrt(n)) by running loop 
  // ...until square root of number
  for(let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) return false;
  }
  return n !== 1 && n !== 0;
}

// Returns an array of primes
utils.primes = () => {
  // I assume for now we won't reach this limit anytime soon
  let LIMIT = 1000;
  let arrayOfPrimes = [];
  for (let i = 0; i < LIMIT; i++) {
    if (utils.isPrime(i)) {
      arrayOfPrimes.push(i);
    }
  }
  return arrayOfPrimes;
};

// Return the number given as argument and the status on whether 
// ..its true or false
utils.isEven = (number) => {
  return function(number) {
    if (number % 2 === 0) {
      return {
        status: true,
        number: number
      }
    } else {
      return {
        status: false,
        number: number
      }
    }
  }
}

module.exports = utils;