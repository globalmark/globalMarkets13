const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    productId: { type: String, required: true },
    userId: { type: String, require: true },
    cantidad: { type: Number, require: true },
    precio: { type: Number }

})
module.exports = mongoose.model("order", orderSchema);
