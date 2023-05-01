module.exports = (req, res, next)=>{
    try{
        if(!req.file)
            req.file = { path: "../public/avatar/DefaultAvatar.png" };

        next();
    }catch(err){
        next(err);
    }
}