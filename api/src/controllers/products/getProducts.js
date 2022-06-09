const productSchema = require('../../models/product');

const getProducts = (req, res) => {

    const {nombre}=req.query

        if(nombre){
         productSchema.find({name:/nombre/i})
         .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
                }
        else{
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
