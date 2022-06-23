const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    productId: { type: String, required: true },
    userId: { type: String, required: true },
    cantidad: { type: Number, required: true },
    precio: { type: Number, required: true }

})
module.exports = mongoose.model("order", orderSchema);
