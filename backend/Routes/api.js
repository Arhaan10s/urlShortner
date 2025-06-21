const express = require('express');
const router = express.Router();
const { createUrl } = require('../comp/urlapi');

router.post('/shorten', createUrl);

module.exports = router;
