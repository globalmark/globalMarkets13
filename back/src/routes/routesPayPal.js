const express = require("express");
const router = express.Router();
const createOrder = require('../controllers/PayPal/createOrder')
const captureOrder = require('../controllers/PayPal/captureOrder')
const cancelPayment = require('../controllers/PayPal/cancelOrder')


router.post("/create-order", createOrder);

router.get("/capture-order", captureOrder);

router.get("/cancel-order", cancelPayment);

module.exports = router;