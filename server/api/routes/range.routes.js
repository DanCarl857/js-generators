const express = require('express');
const router = express.Router();

// Import the Controllers for Range Numbers
const RangeController = require('../controllers/range.controller');

// GET - Get the next range number
router.get('/', RangeController.range);

module.exports = router;