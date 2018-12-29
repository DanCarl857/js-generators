let generators = {};

/* 
 * fibonacciSeq: Returns the next fibonacci number in the seequnce
 */
generators.fibonacciSeq = function() {
  return function() {
    let fib0 = 0;
    let fib1 = 1;

    return {
      next: function() {
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
 * Generator: Returns an object. Takes a sequencer as argument
 */
generators.generator = function(sequencer) {
  return sequencer();
}

module.exports = generators;