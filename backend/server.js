const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

// Allow requests from any origin
// Enable CORS for all origins
app.use(cors({ origin: '*' }));

app.use(express.json());

// Define a route handler for the root path ("/")
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Define a route handler for POST requests to /subscription
app.post('/subscription', (req, res) => {
  // Here you can process the subscription request
  console.log('Received subscription request:', req.body);
  // Send back a response indicating successful subscription processing
  res.status(200).json({ message: 'Subscription processed successfully' });
});
// Define a route handler for POST requests to /register


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
