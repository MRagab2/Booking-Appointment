const express = require('express');
const router = express.Router();

const validatInput = require('../middleware/registerValidator');
const checkExistence = require('../middleware/userExistence');
const passConfirm = require('../middleware/passwordConfirmation');
const defaultAvatar = require('../middleware/defaultAvatar');
const upload = require('../middleware/uploadAvatar');

const userController = require('../controllers/userController');

router.post('/',
    validatInput,   
    checkExistence,
    passConfirm,
    // defaultAvatar,
    // upload.single('avatar'),
    userController.addUser
);

module.exports = router;