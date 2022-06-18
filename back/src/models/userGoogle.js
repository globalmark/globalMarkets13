const mongoose = require('mongoose');

const userSchemaGoogle = new mongoose.Schema({
    
    name: {
        type: String,
        required: true

    },
    provider: {
        type: String,
        required: true

    },
    provider_id: {
        type: String,
        unique:true,
        required: true
    },
    photo: {
        type: String,
        required: true

    },

    CreatedAt: {
        type: Date,
        default:Date.now,
        required: true
    },
    
    
})

module.exports = mongoose.model('UserGoogle', userSchema);