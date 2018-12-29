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

module.exports = utils;