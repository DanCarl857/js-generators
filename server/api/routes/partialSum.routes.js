const express = require('express');
const router = express.Router();

// Import the Controllers for the Partial Sum sequence
const PartialSumController = require('../controllers/partialSum.controller');

// GET - Get the next partial sum
router.get('/', PartialSumController.partialSum);

module.exports = router;