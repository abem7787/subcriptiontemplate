const express = require('express');
const router = express.Router();

const subscriptionController = require('../controllers/subscriptionController');
const paymentController = require('../controllers/paymentController'); // Make sure this path is correct

router.post('/subscription', subscriptionController.processSubscription);
router.post('/payment', paymentController.processPayment); // Uncomment this line if paymentController is needed for POST requests

router.get("/payment", paymentController.processPayment); // This line should be correct if paymentController is needed for GET requests
router.get("/subscription", subscriptionController.processSubscription); // Uncomment this line if subscriptionController is needed for GET requests

module.exports = router;