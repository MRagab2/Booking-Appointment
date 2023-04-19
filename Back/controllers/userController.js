const User = require("../models/userModel");
const crypto = require('crypto');
const bcrypt = require('bcrypt');

// C R U D
let addUser = async (req,res,next)=>{
    try{
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10),
            phone1: req.body.phone1,
            token: crypto.randomBytes(16).toString('hex'),
        });
        await user.save();
        res.status(200).send(`Saved...`);
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
};

let getUserByEmail = async (req,res,next)=> {
    try{
        let user = await User.findOne({            
            email: req.body.email            
        });
        return user;
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
};

let getUserByToken = async (req,res,next)=> {
    try{
        let user = await User.findOne({            
            token: req.header("x-auth-token")
        });
        return user;
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
};

let getUserByID = async (req,res,next)=> {
    try{
        let user = await User.findOne({            
            _id: req.body.id          
        });
        return user;
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
};

let getAllUsers = async (req,res,next)=> {
    try{
        const users = await User.find({
            role:"user"
        }).sort({
            createdAt:1
        });

        return users;
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
};

let UpdateUser = async (req,res,next)=> {
    try{
        let userOld = await User.findOne({
            email: req.body.email          
        });

        await User.updateOne({            
            email: req.body.email          
        },{
            name: req.body.name ? req.body.name : userOld.name,
            phone1: req.body.phone1 ? req.body.phone1 : userOld.phone1,
            avatar: req.body.avatar ? req.body.avatar : userOld.avatar,
            token: req.body.token ? req.body.token : userOld.token,
            activity: req.body.activity ? req.body.activity : userOld.activity,
            requestID: req.body.requestID ? req.body.requestID : userOld.requestID,
            reviewID: req.body.reviewID ? req.body.reviewID : userOld.reviewID,
            feedbackID: req.body.feedbackID ? req.body.feedbackID : userOld.feedbackID
        });

        let userNew = await User.findOne({
            email: userOld.email          
        });

        if(!userNew) return res.status(404).send('Error while Update');

        return userNew;
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
};

let activateUser = async (req,res,next)=> {
    try{
        let userOld = await User.findOne({
            email: req.body.email          
        });

        let newActive;
        switch(userOld.activity){
            case 'active':
                newActive = 'inactive';
                break;
            case 'inactive':
                newActive = 'active';
                break;
        }
        await User.updateOne({            
            email: req.body.email          
        },{
            activity: newActive
        });

        let userNew = await User.findOne({
            email: userOld.email          
        });

        if(!userNew) return res.status(404).send('Error while Update');

        return userNew;
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
};

let setUserActivate = async (req,res,next)=> {
    try{
        let userOld = await User.findOneAndUpdate({
            email: req.body.email          
        });

        if(!userOld) return res.status(404).send('USer Not Found...');
        
        await User.updateOne({            
            email: req.body.email          
        },{
            activity: 'active'
        });

        let userNew = await User.findOne({
            email: userOld.email          
        });

        if(!userNew) return res.status(404).send('Error while Update');

        return userNew;
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
};

let setUserInactivate = async (req,res,next)=> {
    try{
        let userOld = await User.findOneAndUpdate({
            email: req.body.email          
        });

        await User.updateOne({            
            email: req.body.email          
        },{
            activity: 'inactive'
        });

        let userNew = await User.findOne({
            email: userOld.email          
        });

        if(!userNew) return res.status(404).send('Error while Update');

        return userNew;
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
};

module.exports = {
    addUser,
    getUserByEmail,
    getUserByToken,
    getUserByID,
    getAllUsers,
    UpdateUser,
    activateUser,
    setUserActivate,
    setUserInactivate
};