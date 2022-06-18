const express = require('express');
const midleware = require('../routes/middleware')
const routerUser = require('./routesUser');
const userRouter = require('../controllers/user/loginUser')
const router = express.Router();
const routerProducts = require('./routesProducts');
// router.use('/products/', routerProducts);
const paypalrouter = require('./routesPayPal')


// create user
router.use('/users', routerUser);

router.use('/auth/', userRouter);

router.use('/paypal/', paypalrouter);

router.use('/products/', routerProducts);





module.exports = router;