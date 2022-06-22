const { model, Shema } = require('mongoose');

const CardShema = new Shema({
    id: { type: _id, require: true, unique: true },
    images: { type: String, require: true },
    amount: { type: Number, require: true },
    price: { type: Number }

})