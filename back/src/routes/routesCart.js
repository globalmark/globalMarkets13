const { Router } = require('express');

const router = Router();

const getProductCart = require('../controllers/pagos/getProductsCart')
const addProductCart = require('../controllers/pagos/addProductCart')


router.get('/', getProductCart)
router.post('/', addProductCart)

module.exports = router