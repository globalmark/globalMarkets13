
const express = require('express');
const midleware=require('../middleware/middleware')
const routerUser = require('./routesUser');
const userRouter = require('../controllers/user/loginUser')
const router = express.Router();
const paypalrouter = require ('./routesPayPal');
const routesOrders = require('./routesOrders');
const routerProducts = require('./routesProducts');




router.use('/users/',routerUser);



router.use('/auth/', userRouter);
router.use('/paypal/', paypalrouter);
router.use('/orders/',routesOrders)


router.use('/products/', routerProducts);












module.exports = router;