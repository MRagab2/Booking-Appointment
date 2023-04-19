const mongoose = require('mongoose');


module.exports = (dbInfo)=>{
    mongoose.connect(`mongodb://${dbInfo.host}:${dbInfo.port}/${dbInfo.dbName}`)
    .then(()=>{
        console.log("DataBase Connected");
    }).catch((err)=>{
        console.log(err);
    });
};