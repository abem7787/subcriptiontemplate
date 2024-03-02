// Import necessary modules
const express = require('express');
const cors = require('cors');

// Create an instance of the Express application
const app = express();
const port = 3001;

// Enable CORS for all origins
app.use(cors({ origin: '*' }));
app.use(express.json());

let subscriptions = [];

app.get('/', (req, res) => {
  res.send('Hello World!'); // Or any other response you want to send for the root URL
});

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


app.delete('/subscription/:id', (req, res) => {
  try {
    const { id } = req.params;
    // Find the subscription with the given ID and remove it from the subscriptions array
    subscriptions = subscriptions.filter(subscription => subscription.id !== id);
    res.status(200).json({ message: 'Subscription deleted successfully' });
  } catch (error) {
    console.error('Error deleting subscription:', error);
    res.status(500).json({ error: 'An error occurred while deleting subscription' });
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


app.post('/register', (req, res) => {
  try {
    // Return the subscription data
    res.status(200).json(subscriptions);
  } catch (error) {
    // Handle errors
    console.error('Error retrieving subscription data:', error);
    res.status(500).json({ error: 'An error occurred while retrieving subscription data' });
  }
});




app.get('/register', (req, res) => {
  try {
    // Return the subscription data
    res.status(200).json(subscriptions);
  } catch (error) {
    // Handle errors
    console.error('register retrieving  data:', error);
    res.status(500).json({ error: 'An error occurred while retrieving register data' });
  }
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

