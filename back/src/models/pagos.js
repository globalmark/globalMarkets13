const mongoose = require('mongoose');

const pagosSchema = new mongoose.Schema({

    title: { type: String, required: true },
    images: { type: Array, require: true },
    inStock: { type: Number, require: true },
    price: { type: Number }

})
module.exports = mongoose.model("cart", pagosSchema);
