var assert = require('assert');
var request = require('supertest');

// Import our app
var app = require('./../app');

// Import our generators
var generators = require('./../generators');

// Test data
var fibData = [1,1,2,3];

// Check to see if app just runs
describe('Initialization', () => {
  it('should run without crashing', () => {
    assert.equal(4, 2+2);
  });
});

// Test the REST API
describe('REST API', () => {
  it('API responds with json', (done) => {
    request(app)
      .get('/')
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

  it('should return the next 4 fibonacci numbers', () => {
    var a1 = [];
    var nums = generators.generator(generators.fibonacciSeq);
    a1[0] = nums.next();
    a1[1] = nums.next();
    a1[2] = nums.next();
    a1[3] = nums.next();

    assert.deepEqual(a1, fibData);
  })
})