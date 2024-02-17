const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

// Sample payment information

// Allow requests from any origin
// Enable CORS for all origins
app.use(cors({ origin: '*' }));

app.use(express.json());

// Define a route handler for the root path ("/")
app.get('/', (req, res) => {
  res.send('Server is running');
});

// app.get('/payment-info', (req, res) => {
//   // Send the payment information as a JSON response
//   res.json(paymentInfo);
// });

app.post('/payment-info', (req, res) => {
  const creditCardInfo = req.body;s
  // Here you can process the credit card information
  console.log('Received credit card information:', creditCardInfo);
  // Then, you can send back a response to the client indicating the result of the payment processing
  res.status(200).json({ message: 'Payment processed successfully' });
});



app.post('/subscription', (req, res) => {
  const selectedPlan = req.body.selectedPlan;
  // Here you can process the selected subscription plan
  console.log('Received selected plan:', selectedPlan);
  // Send back a response indicating successful subscription processing
  res.status(200).json({ message: 'Subscription processed successfully' });
});



// app.post('/payment', (req, res) => {
//   // Extract data from the request body
//   const { selectedPlan, paymentInfo } = req.body;
  
//   // Log the received data
//   console.log('Received selected plan:', selectedPlan);
//   console.log('Received payment information:', paymentInfo);

//   // Here you can process the received data and store it in your database
//   // For demonstration purposes, let's just send back a success response
//   res.status(200).json({ message: 'Data received and processed successfully' });
// });
