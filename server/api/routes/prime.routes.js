const express = require('express');
const router = express.Router();

// Import the Controllers for Prime Numbers
const PrimeController = require('../controllers/prime.controller');

// GET - Get the next prime number
router.get('/', PrimeController.prime);

module.exports = router;