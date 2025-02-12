// Import necessary modules
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const textToSpeech = require('@google-cloud/text-to-speech');

// Load environment variables
dotenv.config();

// Create an instance of the Express application
const app = express();
const port = 3001;

// Enable CORS for all origins
app.use(cors({ origin: '*' }));
app.use(express.json());

// Ensure GOOGLE_APPLICATION_CREDENTIALS is properly loaded
if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  console.error("ERROR: GOOGLE_APPLICATION_CREDENTIALS is not defined in .env file.");
  process.exit(1);
}

// Normalize path for Windows compatibility
const credentialsPath = path.resolve(process.env.GOOGLE_APPLICATION_CREDENTIALS);
console.log("Loaded GOOGLE_APPLICATION_CREDENTIALS:", credentialsPath);

// Initialize Google Text-to-Speech client
const client = new textToSpeech.TextToSpeechClient({
  keyFilename: credentialsPath,
});

let subscriptions = [];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Route handler for GET requests to /subscription
app.get('/subscription', (req, res) => {
  try {
    res.status(200).json(subscriptions);
  } catch (error) {
    console.error('Error retrieving subscription data:', error);
    res.status(500).json({ error: 'An error occurred while retrieving subscription data' });
  }
});

// Route handler for POST requests to /subscription
app.post('/subscription', (req, res) => {
  try {
    console.log('Received subscription request:', req.body);
    subscriptions.push(req.body);
    res.status(200).json({ message: 'Subscription processed successfully' });
  } catch (error) {
    console.error('Error processing subscription:', error);
    res.status(500).json({ error: 'An error occurred while processing subscription' });
  }
});

app.delete('/subscription/:id', (req, res) => {
  try {
    const { id } = req.params;
    subscriptions = subscriptions.filter(subscription => subscription.id !== id);
    res.status(200).json({ message: 'Subscription deleted successfully' });
  } catch (error) {
    console.error('Error deleting subscription:', error);
    res.status(500).json({ error: 'An error occurred while deleting subscription' });
  }
});

// Route handler for POST requests to /payment
app.post('/payment', (req, res) => {
  console.log('Received payment request:', req.body);
  res.status(200).json({ message: 'Payment processed successfully' });
});

// Register routes
app.get('/register', (req, res) => {
  try {
    res.status(200).json(subscriptions);
  } catch (error) {
    console.error('Error retrieving register data:', error);
    res.status(500).json({ error: 'An error occurred while retrieving register data' });
  }
});

app.post('/register', (req, res) => {
  try {
    res.status(200).json(subscriptions);
  } catch (error) {
    console.error('Error retrieving subscription data:', error);
    res.status(500).json({ error: 'An error occurred while retrieving subscription data' });
  }
});

// Text-to-Speech API
app.post('/api/synthesize', async (req, res) => {
  try {
    const { text, voice, audioConfig } = req.body;
    if (!text || !voice || !voice.languageCode || !voice.name || !audioConfig || !audioConfig.audioEncoding) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const request = {
      input: { text },
      voice: { languageCode: voice.languageCode, name: voice.name },
      audioConfig: { audioEncoding: audioConfig.audioEncoding },
    };

    const [response] = await client.synthesizeSpeech(request);
    res.set('Content-Type', 'audio/mpeg');
    res.send(response.audioContent);
  } catch (error) {
    console.error('Error synthesizing speech:', error);
    res.status(500).json({ error: 'Text-to-Speech conversion failed' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
