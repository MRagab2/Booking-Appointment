const mongoose = require('mongoose');

const announceSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    privacy: [
        {userID: {
            type: String,
            trim: true
        }}
    ]
},{timestamps: true});
const Announce = mongoose.model("announces",announceSchema);

module.exports = Announce;