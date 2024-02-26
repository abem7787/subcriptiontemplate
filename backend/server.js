// Import necessary modules
const express = require('express');
const cors = require('cors');

// Create an instance of the Express application
const app = express();
const port = 3001;

// Enable CORS for all origins
app.use(cors({ origin: '*' }));
app.use(express.json());

// Initialize an empty array to store subscriptions
let subscriptions = [];

// Route handler for GET requests to /subscription
app.get('/subscription', (req, res) => {
  try {
    // Return the subscription data
    res.status(200).json(subscriptions);
  } catch (error) {
    // Handle errors
    console.error('Error retrieving subscription data:', error);
    res.status(500).json({ error: 'An error occurred while retrieving subscription data' });
  }
});

// Route handler for POST requests to /subscription
app.post('/subscription', (req, res) => {
  try {
    // Process the subscription request
    console.log('Received subscription request:', req.body);
    // Store the subscription data
    subscriptions.push(req.body);
    // Send back a response indicating successful subscription processing
    res.status(200).json({ message: 'Subscription processed successfully' });
  } catch (error) {
    // Handle errors
    console.error('Error processing subscription:', error);
    res.status(500).json({ error: 'An error occurred while processing subscription' });
  }
});

// Route handler for POST requests to /payment
app.post('/payment', (req, res) => {
  // Process the payment request here
  console.log('Received payment request:', req.body);

  // Simulate a successful payment
  // In a real application, you would handle the payment processing logic
  res.status(200).json({ message: 'Payment processed successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
