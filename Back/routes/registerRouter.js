const express = require('express');
const router = express.Router();

const validatInput = require('../middleware/registerValidator');
const checkExistence = require('../middleware/userExistence');
const userController = require('../controllers/userController');

router.post('/',
    validatInput,   
    checkExistence,
    userController.addUser
);

module.exports = router;