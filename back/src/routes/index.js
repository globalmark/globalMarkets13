const express = require('express');
const midleware=require('../middleware/middleware')
const routerUser = require('./routesUser');
const userRouter = require('../controllers/user/loginUser')
const router = express.Router();
const paypalrouter = require ('./routesPayPal');
const routerProducts = require('./routesProducts');
// create user
router.use('/users/',routerUser);


// router.use('/products/', routerProducts);

router.use('/auth/', userRouter);
router.use('/paypal/', paypalrouter);


router.use('/products/', routerProducts);





module.exports = router;