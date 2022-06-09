const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true

    },
    surname: {
        type: String,
        required: true

    },
    Username: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true

    },

    email: {
        type: String,
        required: true
    },
    dni:{
        type: Number,
        required: true

    },
    age: {
        type: Number,
        required: true

    },
    address: {
        type: String,
        required: true

    },
    phoneNumber:{
        type:Number,
        require:true
    },
    
})

module.exports = mongoose.model('User', userSchema);