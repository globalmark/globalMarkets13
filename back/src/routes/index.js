const express = require('express');
const midleware = require('../middleware/middleware')
const routerUser = require('./routesUser');
const userRouter = require('../controllers/user/loginUser')
const router = express.Router();
const paypalrouter = require('./routesPayPal');
const pagosRouter = require('./routesPagos')
const routerProducts = require('./routesProducts');



// create user
router.use('/users/', routerUser);

//const  routeGoogles  = require('../routes/routesGoogle.js');
//middleware

router.use('/auth/', userRouter);
router.use('/paypal/', paypalrouter);
router.use('/pagos/', pagosRouter)

// router.use('/authGoogle',passport.authenticate('auth-google',{
//     scope:[
//         "https://www.googleapis.com/auth/userinfo.profile",
//         "https://www.googleapis.com/auth/userinfo.email"
//        ],
//        session:false 
// }),routeGoogles); 


router.use('/products/', routerProducts);






module.exports = router;