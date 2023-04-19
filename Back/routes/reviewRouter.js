const express = require('express');
const router = express.Router();

const Review = require("../models/reviewModel");
const userConroller = require('../controllers/userController');
const authenticate = require('../middleware/authentication');
const authorize = require('../middleware/authorization');


router.get('/reviews', 
            authenticate, 
            authorize,
            async(req,res)=>{
    try{
        let reviews = await Review.find();
        
        res.status(200).send(reviews);
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
});

router.get('/accepted', 
            authenticate, 
            async(req,res)=>{
    try{
        let reviews = await Review.find({status:'unhidden'});
        
        res.status(200).send(reviews);
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
});

router.get('/hidden', 
            authenticate, 
            authorize,
            async(req,res)=>{
    try{
        let reviews = await Review.find({status:'hidden'});
        
        res.status(200).send(reviews);
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
});

router.get('/pending', 
            authenticate, 
            authorize,
            async(req,res)=>{
    try{
        let reviews = await Review.find({status:'pending'});
        
        res.status(200).send(reviews);
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
});

router.get('/:id', 
            authenticate, 
            async(req,res)=>{
    try{
        let review = await Review.findOne({_id: req.params.id});
        
        res.status(200).send(review);
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
});

router.post('/', 
            authenticate, 
            async(req,res)=>{
    try{
        let requestID = req.body.requestID;
        let {_id : userID} = await userConroller.getUserByToken(req,res);

        let check = await Review.findOne({
            $or:[
                {userID: userID},
                {requestID: requestID},
            ]
        });

        if(check) return res.status(400).send('Request Already Reviewd');
        
        let review = new Review({
            userID: userID,
            requestID: requestID,
            rate: req.body.rate,
            review: req.body.review
        });
/* Add its id to
    - request
    - user */
        await review.save();        
        res.status(200).send(review);
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
});

router.put('/hide/:id', 
            authenticate, 
            authorize,
            async(req,res)=>{
    try{
        let reviewOld = await Review.findOne({
            _id: req.params.id          
        });

        if(!reviewOld) return res.status(404).send('Review Not Found...');
        
        await Review.updateOne({            
            _id: req.params.id          
        },{
            status: 'hidden'
        });

        let reviewNew = await Review.findOne({
            _id: reviewOld.id          
        });

        if(!reviewNew) return res.status(404).send('Error while Update');
        res.status(200).send(reviewNew);
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
});

router.put('/unhide/:id', 
            authenticate, 
            authorize,
            async(req,res)=>{
    try{
        let reviewOld = await Review.findOne({
            _id: req.params.id          
        });

        if(!reviewOld) return res.status(404).send('Review Not Found...');
        
        await Review.updateOne({            
            _id: req.params.id          
        },{
            status: 'unhidden'
        });

        let reviewNew = await Review.findOne({
            _id: reviewOld.id          
        });

        if(!reviewNew) return res.status(404).send('Error while Update');
        res.status(200).send(reviewNew);
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
});

router.put('/:id', 
            authenticate, 
            authorize,
            async(req,res)=>{
    try{
        let reviewOld = await Review.findOne({
            _id: req.params.id          
        });

        if(!reviewOld) return res.status(404).send('Review Not Found...');
        
        await Review.updateOne({            
            _id: req.params.id          
        },{
            rate: req.body.rate,
            review: req.body.review
        });

        let reviewNew = await Review.findOne({
            _id: reviewOld.id          
        });

        if(!reviewNew) return res.status(404).send('Error while Update');
        res.status(200).send(reviewNew);
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
});

module.exports = router;