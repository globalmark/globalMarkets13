
const Cart = require('../../models/Cart')

const getProductsCart = async (req, res) => {
    const productCart = await Cart.find()
    if (productCart) {
        res.json({ productCart })
    } else {
        restart.json({ mensaje: "No hay productos en el carrito" })
    }
}

module.exports = getProductsCart
