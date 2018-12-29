// Import the necessary generator(s)
const generators = require('./../../generators');

var nums = generators.generator(generators.factorialSeq);

// fibonacci controller: Makes use of generators to get the next number in the fibonacci sequence
exports.factorial = (req, res, next) => {
  res.json(nums.next());
}