const express = require('express');

const routerUser = require('./routesUser');

const router = express.Router();

// create user
router.use('/users', routerUser);






module.exports = router;