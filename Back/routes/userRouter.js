const express = require('express');
const router = express.Router();

const authenticate = require('../middleware/authentication');
const authorize = require('../middleware/authorization');

const userController = require('../controllers/userController');
// CRUD
router.get('/',
            authenticate,
            authorize, 
            async (req,res)=>{
    try{
        let users = await userController.getAllUsers(req,res);

/*request details + its review..... */
        res.status(200).send(users);
    }catch(err){
        console.log(err)
        res.status(400).json(err.message);
    }
});

router.get('/:email',
            authenticate,
            async (req,res)=>{
    try{
        req.body.email = req.params.email;
        let user = await userController.getUserByEmail(req,res);
        if(!user) return res.status(404).send('User Not Found..');
/*request details + its review..... */

        res.status(200).send(user);
    }catch(err){
        console.log(err);
        res.status(400).json(err.message);
    }
});

router.put('/:email',
            authenticate,
            authorize,
            async (req,res)=>{
    try{
        req.body.email = req.params.email;
        let user = await userController.UpdateUser(req,res);

        if(!user) return res.status(404).send('User Not Found..');
        
        res.status(200).send(user);
    }catch(err){
        console.log(err);
        res.status(400).json(err.message);
    }
});

router.put('/active/:email',
            authenticate,
            authorize,
            async (req,res)=>{
    try{
        req.body.email = req.params.email;
        let user = await userController.setUserActivate(req,res);

        if(!user) return res.status(404).send('User Not Found..');
        
        res.status(200).send(user);
    }catch(err){
        console.log(err);
        res.status(400).json(err.message);
    }
});

router.put('/inactive/:email',
            authenticate,
            authorize,
            async (req,res)=>{
    try{
        req.body.email = req.params.email;
        let user = await userController.setUserInactivate(req,res);

        if(!user) return res.status(404).send('User Not Found..');
        
        res.status(200).send(user);
    }catch(err){
        console.log(err);
        res.status(400).json(err.message);
    }
});

router.delete('/:email',
            authenticate,
            authorize,
            async (req,res)=>{
    try{
        req.body.email = req.params.email;
        let user = await userController.activateUser(req,res);

        if(!user) return res.status(404).send('User Not Found..');
        
        res.status(200).send(user);
    }catch(err){
        console.log(err);
        res.status(400).json(err.message);
    }
});

module.exports = router;