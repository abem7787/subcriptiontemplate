const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

// Allow requests from any origin
// Enable CORS for all origins
app.use(cors({ origin: '*' }));

app.use(express.json());

// Define a route handler for the root path ("/")
app.get('/', (req, res) => {
  res.send('Server is running');
});

app.post('/payment', (req, res) => {
  const creditCardInfo = req.body;
  // Here you can process the credit card information
  console.log('Received credit card information:', creditCardInfo);
  // Then, you can send back a response to the client indicating the result of the payment processing
  res.status(200).json({ message: 'Payment processed successfully' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
