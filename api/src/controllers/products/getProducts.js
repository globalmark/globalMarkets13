const productSchema = require('../../models/product');

const getProducts = (req, res) => {

    const { nombre } = req.query
    console.log(nombre)
    if (nombre) {
        productSchema.find({ name: nombre })
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json({ message: err });
            });
    }
    else {
        productSchema.find()
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json({ message: err });
            });
    }
}
module.exports = getProducts;
