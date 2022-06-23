const orderSchema = require("../../models/order");
const User = require("../../models/user");
const Product = require("../../models/product");
const mongoose = require("mongoose")



const createOrder = async (req, res) => {
    const { userId, productId, cantidad } = req.body

    if (!req.body) {
        res.status(400).json({ message: "Cliente no ha enviado Parametros" });
    }


    if (mongoose.Types.ObjectId.isValid(userId) && mongoose.Types.ObjectId.isValid(productId)) {
        const product = await Product.findOne({ _id: productId })
        const user = await User.findOne({ _id: userId })
        if (user === null && product === null) {
            res.status(400).json({ message: "USER Y PRODUCT NO ENCONTRADOS" })
        }

        if (cantidad > product.inStock) {
            res.status(409).json({ message: "No hay productos en stock" })
        }
        product.inStock = product.inStock - cantidad;

        const order = await orderSchema({
            ...req.body,
            precio: product.price * cantidad
        });
        order.save()
            .then((data) => {
                Product.findByIdAndUpdate(
                    product._id
                    , product, function (err, result) {
                        if (err) {
                            return res.status(400).send({ message: "error  update", err })
                        }

                    });
                return res.send(data);
            })
            .catch((err) => {
                res.send({ message: err });
            });
    } else {
        return res.status(400).send({ message: "no funciona" })
    }



};

module.exports = createOrder;
