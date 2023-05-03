const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userID: {
        type: String,
        trim: true,
        required: true
    },
    requestID: {
        type: String,
        trim: true,
        required: true
    },
    rate: {
        type: String,
        enum: ['not good','good','excellent'],
        required: true
    },
    review: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['pending','hidden','unhidden'],
        default: 'pending'
    }
    
},{timestamps: true});
const Review = mongoose.model("reviews",reviewSchema);

module.exports = Review;