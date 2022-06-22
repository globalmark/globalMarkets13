const { Router } = require('express');
const createOrder = require('../controllers/order/createOrder')


const router = Router();


router.post("/", createOrder);

module.exports = router