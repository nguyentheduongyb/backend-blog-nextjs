const express = require('express');
const auth = require('~/app/middlewares/auth.js')
const router = express.Router();

const UserController = require('~/app/controllers/UserController');

// router.post('/register', UserController.signup);
// router.post('/login', UserController.signin);
// router.put('/:id', auth, UserController.update);
// router.delete('/:id', auth, UserController.delete);
router.get('/', (res, req) => {
        res.send("This is the database of Nguyen The Duong")
});
module.exports = router;