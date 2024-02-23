// Import necessary modules
const express = require('express');
const cors = require('cors');

// Create an instance of the Express application
const app = express();
const port = 3001;

// Enable CORS for all origins
app.use(cors({ origin: '*' }));
app.use(express.json());

// Sample subscription data
const subscriptions = [
  { id: 1, customer: 'Customer 1', date: '2024-02-22', amount: 100 },
  { id: 2, customer: 'Customer 2', date: '2024-02-23', amount: 150 },
  // Add more subscription objects as needed
];

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
  // Here you can process the subscription request
  console.log('Received subscription request:', req.body);
  // Send back a response indicating successful subscription processing
  res.status(200).json({ message: 'Subscription processed successfully' });
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








// // MVC Import required modules
// const express = require('express');
// const cors = require('cors');
// const routes = require('./routes/index');

// // Create an instance of the Express application
// const app = express();

// // Define the port number
// const port = 3001;

// // Use middleware
// app.use(cors({ origin: '*' }));
// app.use(express.json());

// // Mount routes
// app.use('/', routes);

// // Start the server
// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });

