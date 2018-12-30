// Import Utilities
const utils = require('./utils');

let generators = {};

/* 
 * fibonacciSeq: Returns the next fibonacci number in the sequence
 */
generators.fibonacciSeq = () => {
  return function() {
    let fib0 = 0;
    let fib1 = 1;

    return {
      next: () => {
        let o_fib0 = fib0;
        let o_fib1 = fib1;

        fib0 = o_fib1;

        // next fibonacci number is a sum of the previous 2
        fib1 = o_fib0 + o_fib1; 

        return fib0;
      }
    };
  }();
}

/* 
 * factorialSeq: Returns the next factorial number in the sequence
 */
generators.factorialSeq = () => {
  return function() {
    let number = 0;

    return {
      next: () => {
        let f1 = utils.factorial(number);
        number++;
        return f1;
      }
    };
  }();
}

/* 
 * primeSeq: Returns the next prime number in the sequence
 */
generators.primeSeq = () => {
  return function() {
    let number = 0;
    let primes = Object.assign([], utils.primes());

    return {
      next: function() {
        let f1 = primes[number];
        number++;
        return f1;
      }
    }
  }();
}

/* 
 * rangeSeq: Returns the next number in the sequence based on the step
 */
generators.rangeSeq = function(args) {
  return function() {
    let start = args[1];
    let step = args[2];

    return {
      next: function() {
        let f1 = start;
        start += step;
        return f1;
      }
    }
  }();
}

/* 
 * partialSeq: Returns the partial sum sequence of a set of provided numbers
 */
generators.partialSumSeq = function(args) {
  console.log(args.length);
  return function() {
    let number = 1
    let f0 = args[number];
    let f1 = f0 + args[++number];

    return {
      next: () => {
        let o_f0 = f0;
        let o_f1 = f1;

        f0 = o_f1;

        

        // next partial sum number is a sum of the previous 2
        f1 = o_f1 + f0; 

        return f0;
      }
    }
  }();
}

/* 
 * Generator: Returns an object. Takes a sequencer as argument
 */
generators.generator = function(sequencer) {
  // Only pass arguments to the sequencer when arguments are available
  return arguments.length > 1 ? sequencer(arguments) : sequencer()
}

module.exports = generators;