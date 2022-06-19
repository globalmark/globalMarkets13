const express = require('express');
const midleware=require('../middleware/middleware')
const routerUser = require('./routesUser');
const userRouter = require('../controllers/user/loginUser')
const router = express.Router();
const paypalrouter = require ('./routesPayPal');
//const routeGoogle= require('./routesGoogle');
//const passport=require('passport');
//require ("../middleware/google.js");

// create user
router.use('/users/',routerUser);
const routerProducts = require('./routesProducts');
//const  routeGoogles  = require('../routes/routesGoogle.js');
//middleware
<<<<<<< HEAD
//router.get(passport.initialize());
=======
router.get(passport.initialize());

>>>>>>> c40e2853efc4ea87464da3e0683a4fff45cb5e51
router.use('/auth/', userRouter);
router.use('/paypal/', paypalrouter);

// router.use('/authGoogle',passport.authenticate('auth-google',{
//     scope:[
//         "https://www.googleapis.com/auth/userinfo.profile",
//         "https://www.googleapis.com/auth/userinfo.email"
//        ],
//        session:false
// }),routeGoogles); 


router.use('/products/', routerProducts);





module.exports = router;