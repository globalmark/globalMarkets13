const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({

    title: { type: String, required: true },
    images: { type: Array, require: true },
    amount: { type: Number, require: true },
    price: { type: Number }

})
module.exports = mongoose.model("cart", cartSchema);
