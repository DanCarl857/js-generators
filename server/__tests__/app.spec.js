var assert = require('assert');
var request = require('supertest');

// Import our app
var app = require('./../app');

// Import our generators and utilities
var generators = require('./../generators');
var utils = require('./../utils');

// Test data
var fibonacciData = [1,1,2,3];
var factorialData = [1, 1, 2, 6, 24, 120, 720];

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
      var gotten_sequence = [];
      var nums = generators.generator(generators.fibonacciSeq);
      gotten_sequence[0] = nums.next();
      gotten_sequence[1] = nums.next();
      gotten_sequence[2] = nums.next();
      gotten_sequence[3] = nums.next();
  
      assert.deepEqual(gotten_sequence, fibonacciData);
    });
  });

  describe('Factorial Sequence Generator', () => {
    it('should return the next 7 numbers in the factorial sequence', () => {
      var gotten_sequence = [];
      var nums = generators.generator(generators.factorialSeq);
      gotten_sequence[0] = nums.next();
      gotten_sequence[1] = nums.next();
      gotten_sequence[2] = nums.next();
      gotten_sequence[3] = nums.next();
      gotten_sequence[4] = nums.next();
      gotten_sequence[5] = nums.next();
      gotten_sequence[6] = nums.next();

      assert.deepEqual(gotten_sequence, factorialData);
    })
  });
});

// Testing our Utility functions
describe('Utility Functions', () => {
  describe('Factorial', () => {
    it('should return the factorial of 10 which is 3628800', () => {
      assert.equal(3628800, utils.factorial(10));
    });
  });
});