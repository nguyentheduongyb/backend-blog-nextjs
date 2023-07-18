const express = require('express');
const router = express.Router();

const SiteController = require('~/app/controllers/SiteController');

router.post(SiteController.index);
module.exports = router;