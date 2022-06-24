const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    inStock: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sizes: {
        type: Array,
    },
    slug: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    category: {
        type: Array,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);

