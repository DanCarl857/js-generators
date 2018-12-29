// Import the necessary generator(s)
const generators = require('./../../generators');

// Putting this in the function below causes it to always return 1 
// ...as the request is initialized every time
var nums = generators.generator(generators.rangeSeq, 1, 2);

// prime controller: Makes use of generators to get the next number in the prime number sequence
exports.range = (req, res, next) => {
  res.json(nums.next());
}