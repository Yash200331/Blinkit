const mongoose = require('mongoose');


const addressSchema = mongoose.Schema({
    state:String,
    zip:Number,
    city:String,
    address:String,
});

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone:Number,
    addresses:[addressSchema],

},{timestamp: true}

);

module.exports = mongoose.model('user', userSchema);