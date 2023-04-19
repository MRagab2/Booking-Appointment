const express = require('express');
const router = express.Router();
const Request = require("../models/requestModel");
const authenticate = require('../middleware/authentication');
const authorize = require('../middleware/authorization');
const userConroller = require('../controllers/userController');

router.get('/',
    authenticate,
    authorize,
    async (req,res)=>{
    try{
        let requests;
        if(req.body.filter){
            let filter = req.body.filter
            requests = await Request.find({
                status: filter
            });
        }else{
            requests = await Request.find();
        }
/* + Reviews*/
        res.status(200).send(requests);
    }catch(err){
            console.log(err);
            res.status(400).send(err.message);
    }
});

router.get('/:id',
    authenticate,
    async (req,res)=>{
    try{
        let request = await Request.findOne({
            _id: req.params.id
        });

        if(!request) return res.status(404).send('Request Not Found');
/* + Review*/
        
        res.status(200).send(request);
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
});

router.post('/',
    authenticate,
    async (req,res)=>{
    try{
        let {_id : userID} = await userConroller.getUserByToken(req,res);
        let check = await Request.findOne({
            userID: userID
        });
        if(check) return res.status(400).send('Request Already Existed');
        
        let couponID = req.body.couponID ? req.body.couponID : null;

        let request = new Request({
            date: req.body.date,
            time: req.body.time,
            price: req.body.price,
            couponID: couponID,
            userID: userID,
        });

//add its id to user object..
        await request.save();
        res.status(200).send(request);
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
});

router.put('/close/:id',
    authenticate,
    async (req, res)=>{
    try{
        let requestOld = await Request.findOne({
            _id: req.params.id
        });

        if(!requestOld) return res.status(404).send('Request Not Found');

        await Request.updateOne({            
            _id: req.params.id          
        },{
            status: 'closed'
        });
        let requestNew = await Request.findOne({
            _id: requestOld.id          
        });

        if(!requestNew) return res.status(404).send('Error while Update');
        res.status(200).send(requestNew);
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
});

router.put('/done/:id',
    authenticate,
    authorize,
    async (req, res)=>{
    try{
        let requestOld = await Request.findOne({
            _id: req.params.id
        });

        if(!requestOld) return res.status(404).send('Request Not Found');

        await Request.updateOne({            
            _id: req.params.id          
        },{
            status: 'done'
        });
        let requestNew = await Request.findOne({
            _id: requestOld.id          
        });

        if(!requestNew) return res.status(404).send('Error while Update');
        res.status(200).send(requestNew);
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
});

router.put('/cancel/:id',
    authenticate,
    authorize,
    async (req, res)=>{
    try{
        let requestOld = await Request.findOne({
            _id: req.params.id
        });

        if(!requestOld) return res.status(404).send('Request Not Found');

        await Request.updateOne({            
            _id: req.params.id          
        },{
            status: 'canceled'
        });
        let requestNew = await Request.findOne({
            _id: requestOld.id          
        });

        if(!requestNew) return res.status(404).send('Error while Update');
        res.status(200).send(requestNew);
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
});

module.exports = router;