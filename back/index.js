const express = require('express');
const midleware=require('../routes/middleware')
const routerUser = require('./routesUser');
const userRouter=require('../controllers/user/loginUser')
const router = express.Router();

// create user
router.use('/users',routerUser);

router.use('/auth/',userRouter); 







module.exports = router;