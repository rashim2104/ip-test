const express = require('express');
const router = express.Router();
const ipController = require('../controllers/ipController');

router.get('/ip', ipController.getIpAddress);

module.exports = router;