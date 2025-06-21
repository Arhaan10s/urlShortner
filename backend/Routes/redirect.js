const express = require('express');
const router = express.Router();
const { redirectUrl } = require('../comp/urlapi');

router.get('/:shortUrl', redirectUrl);

module.exports = router;
