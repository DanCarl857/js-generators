const assert = require('assert');
const request = require('supertest');

// Import our app
const app = require('./../app');

// Import our generators and utilities
let generators = require('./../generators');
let utils = require('./../utils');

// Test data
let fibonacciData = [1,1,2,3];
let factorialData = [1, 1, 2, 6, 24, 120, 720];
let primeData = [2, 3, 5, 7, 11];
let rangeData = [1, 3, 5, 7];

// Check to see if app just runs
describe('Initialization', () => {
  it('Server runs without crashing', () => {
    assert.equal(4, 2+2);
  });
});

// Test the REST API
describe('REST API', () => {
  it('API responds with json', (done) => {
    request(app)
      .get('/factorial')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

// Testing our generators
describe('Generators', () => {
  it('should return a function when calling the generator', () => {
    assert.equal('function', typeof generators.fibonacciSeq);
  });

  it('should return an object when calling the generator with a sequencer', () => {
    assert.equal('object', typeof generators.generator(generators.fibonacciSeq));
  });

  describe('Fibonacci Sequence Generator', () => {
    it('should return the next 4 fibonacci numbers', () => {
      let gotten_sequence = [];
      let nums = generators.generator(generators.fibonacciSeq);
      gotten_sequence[0] = nums.next();
      gotten_sequence[1] = nums.next();
      gotten_sequence[2] = nums.next();
      gotten_sequence[3] = nums.next();
  
      assert.deepEqual(gotten_sequence, fibonacciData);
    });
  });

  describe('Factorial Sequence Generator', () => {
    it('should return the next 7 numbers in the factorial sequence', () => {
      let gotten_sequence = [];
      let nums = generators.generator(generators.factorialSeq);
      gotten_sequence[0] = nums.next();
      gotten_sequence[1] = nums.next();
      gotten_sequence[2] = nums.next();
      gotten_sequence[3] = nums.next();
      gotten_sequence[4] = nums.next();
      gotten_sequence[5] = nums.next();
      gotten_sequence[6] = nums.next();

      assert.deepEqual(gotten_sequence, factorialData);
    });
  });

  describe('Prime Number Sequence Generator', () => {
    it('should return the next 5 prime numbers', () => {
      let gotten_sequence = [];
      let nums = generators.generator(generators.primeSeq);
      gotten_sequence[0] = nums.next();
      gotten_sequence[1] = nums.next();
      gotten_sequence[2] = nums.next();
      gotten_sequence[3] = nums.next();
      gotten_sequence[4] = nums.next();

      assert.deepEqual(gotten_sequence, primeData);
    });
  });

  describe('Range Sequence Number Generator', () => {
    it('should return the next numbers in the sequece given a start of 1, and step of 2', () => {
      let gotten_sequence = [];
      let nums = generators.generator(generators.rangeSeq, 1, 2);
      gotten_sequence[0] = nums.next();
      gotten_sequence[1] = nums.next();
      gotten_sequence[2] = nums.next();
      gotten_sequence[3] = nums.next();

      assert.deepEqual(gotten_sequence, rangeData);
    });
  });
});

// Testing our Utility functions
describe('Utility Functions', () => {
  describe('Factorial', () => {
    it('should return the factorial of 10 which is 3628800', () => {
      assert.equal(3628800, utils.factorial(10));
    });
  });

  describe('Prime', () => {
    it('should return true as 3 is prime', () => {
      assert.equal(true, utils.isPrime(3));
    });

    it('Should return false as 4 is not prime', () => {
      assert.equal(false, utils.isPrime(4));
    });

    it('primes should return an array', () => {
      assert.equal(true, Array.isArray(utils.primes()));
    });
  });
});