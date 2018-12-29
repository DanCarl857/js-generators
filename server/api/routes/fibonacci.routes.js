const express = require('express');
const router = express.Router();

// Import the Controllers for Fibonacci
const FibonacciController = require('../controllers/fibonacci.controller');

// GET - Get the next number in the fibonacci sequence
router.get('/', FibonacciController.fibonacci);

module.exports = router;