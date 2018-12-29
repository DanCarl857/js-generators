let generators = {};

/* 
 * fibonacciSeq: Returns the next fibonacci number in the seequnce
 */
generators.fibonacciSeq = function() {
  return function() {}
}

/* 
 * Generator: Returns an object. Takes a sequencer as argument
 */
generators.generator = function(sequencer) {
  return sequencer;
}

module.exports = generators;