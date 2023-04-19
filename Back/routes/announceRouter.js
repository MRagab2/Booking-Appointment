const express = require('express');
const router = express.Router();

const Announcement = require("../models/announceModel");
const authenticate = require('../middleware/authentication');
const authorize = require('../middleware/authorization');
const userConroller = require('../controllers/userController');

router.get('/',
        authenticate,
        async (req,res)=>{
    try{
        let {_id : userID} = await userConroller.getUserByToken(req.header('x-auth-token'));
        let announces = await Announcement.find({ privacy: { $elemMatch: { userID } } });
        
        res.status(200).send(announces);
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
});

router.get('/:id',
        authenticate,
        async (req,res)=>{
    try{
        let {_id : userID} = await userConroller.getUserByToken(req.header('x-auth-token'));
        let announce = await Announcement.findOne({
            _id: req.params.id,
            privacy: { $elemMatch: { userID } }
        });
        if(!announce) res.status(404).send("Not Found...");

        res.status(200).send(announce);
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
});

router.post('/',
        authenticate,
        authorize,
        async (req,res)=>{
    try{
        let announce = new Announcement({
            title: req.body.title,
            description: req.body.discount,
            privacy: req.body.privacy
        });
        await announce.save();
        
        res.status(200).send(announce);
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
});

router.put('/:id',
        authenticate,
        authorize,
        async (req,res)=>{
    try{
        let announceOld = await Announcement.findOne({
            _id: req.params.id          
        });
        if(!announceOld) return res.status(404).send('Announcement Not Found');
        
        await Announcement.updateOne({            
            _id: req.params.id
        },{
            title: req.body.title ? req.body.title : announceOld.title,
            description: req.body.description ? req.body.description : announceOld.description,
            privacy: req.body.privacy ? req.body.privacy : announceOld.privacy            
        });

        let announceNew = await Announcement.findOne({
            _id: req.params.id          
        });

        if(!announceNew) return res.status(404).send('Error while Update');

        res.status(200).send(announceNew);
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
});

router.delete('/:id',
        authenticate,
        authorize,
        async (req,res)=>{
    try{
        let announce = await Announcement.findOneAndDelete({
            _id: req.params.id
        });
        if(!announce) return res.status(404).send('Announcement Not Found');

        res.status(200).send(announce);
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
});

module.exports = router;