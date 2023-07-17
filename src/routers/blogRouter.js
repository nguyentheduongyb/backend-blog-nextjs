const express = require('express');
const auth = require('~/app/middlewares/auth.js')
const router = express.Router();

const BlogController = require('~/app/controllers/BlogController');

router.post('/', auth, BlogController.upload, BlogController.create);
router.put('/:id', auth, BlogController.update);
// router.delete('/:id', auth, BlogController.delete);
router.get('/:slug', BlogController.detail);
router.get('/', BlogController.get);
module.exports = router;