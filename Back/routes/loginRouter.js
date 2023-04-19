const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

const validatInput = require('../middleware/loginValidator');
const userController = require('../controllers/userController');

router.post('/',
            validatInput,   
            async(req,res)=>{
    try{
        let user = await userController.getUserByEmail(req,res);
        if(!user) return res.status(400).send("User Not Found..");
        
        let passwordCheck = await bcrypt.compare(req.body.password, user.password);
        if(!passwordCheck) return res.status(400).send("Wrong Password");
        
        res.header("x-auth-token",user.token);
        delete user.password;
        res.status(200).send('Logged in...');
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
});

module.exports = router;
