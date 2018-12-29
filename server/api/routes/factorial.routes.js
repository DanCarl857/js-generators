const express = require('express');
const router = express.Router();

// Import the Controllers for Factorial
const FactorialController = require('../controllers/factorial.controller');

// GET - Get the next factorial sequence
router.get('/', FactorialController.factorial);

module.exports = router;