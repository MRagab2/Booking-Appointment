const User = require("../models/userModel");

module.exports = async(req,res,next)=>{
    try{
        const token = req.header("x-auth-token");
        if(!token)
            return res.status(400).send('Not Token...');
        
        let user = await User.findOne({
            token: req.header("x-auth-token")
        });
        if(!user)
            return res.status(400).send('Not User...');

        next();
    }catch(err){
        next(err);
    }
}