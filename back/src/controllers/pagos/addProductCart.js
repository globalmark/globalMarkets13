const Cart = require('../../models/cart')
const Product = require('../../models/product');


const addProductCart = async (req, res) => {
    const { title, images, price } = req.body;

    // nos fijamos si tenemos ese producto 
    const productsExistent = await Product.findOne({ title })

    //nos fijamos si los campos estan vacios o vine con informacion
    const productInfo = title !== "" && images !== "" && price !== "";
    // nos fijamos si el producto ya esta en el carrito
    const productsInCart = await Cart.findOne({ title })

    if (!productsExistent) {
        res.status(400).json({
            mensaje: "Este producto no existe en nuestra base de datos"
        });
    } else if (productInfo && !productsInCart) {
        const newProductsInCart = new Cart({ title, images, price, amount: 1 })// agregamos una propiedad amount que empice en 1


        // Actualizamos la propiedad inCart: true en nuestros productos del Cart
        await Product.findByIdAndUpdate(
            productsExistent?.id,
            { inCart: true, images, price },//actualizamos su propiedad inCart: TRUE SI ESTA EN EL CARRITO
            { new: true }//nos devuelve el producto actualizado
        )
            .then((product) => {
                newProductsInCart.save();// si todo sale bien guardamos producto en el carrito
                res.status(200).json({
                    mensaje: "Producto actualizado en el carrito", product
                })
            })
            .catch((error) => console.log(error))
    } else if (productsInCart) {
        res.status(200).json({
            mensaje: `EL Producto ya esta en el carrito`
        })
    }

}
module.exports = addProductCart