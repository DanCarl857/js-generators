// Import the necessary generator(s)
const generators = require('./../../generators');

// Putting this in the function below causes it to always return 1 
// ...as the request is initialized every time
var nums = generators.generator(generators.partialSumSeq, 1, 3, 7, 2, 0);

// partialSum controller: Makes use of generators to get the next number in the partial sum number sequence
exports.partialSum = (req, res, next) => {
  res.json(nums.next());
}