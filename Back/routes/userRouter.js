const express = require('express');
const router = express.Router();

const authenticate = require('../middleware/authentication');
const authorize = require('../middleware/authorization');

const userController = require('../controllers/userController');
const Request = require('../models/requestModel');
const Review = require('../models/reviewModel');
const Feedback = require('../models/feedbackModel');
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
        if(!user) return res.status(404).json('User Not Found..');

        let request = await Request.findOne({userID:user.id});
        let review = await Review.findOne({userID:user.id});
        let feedback = await Feedback.findOne({userID:user.id});
/*request details + its review..... */

        res.status(200).json({
            user,
            request,
            review,
            feedback
        });
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