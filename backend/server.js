const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const textToSpeech = require('@google-cloud/text-to-speech');
const { Configuration, OpenAIApi } = require('openai');

// Load environment variables
dotenv.config();

// Create an instance of the Express application
const app = express();
const port = process.env.PORT || 3001;

// Enable CORS for all origins
app.use(cors({ origin: '*' }));
app.use(express.json());

// Ensure GOOGLE_APPLICATION_CREDENTIALS is properly loaded
if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  console.error("ERROR: GOOGLE_APPLICATION_CREDENTIALS is not defined in .env file.");
  process.exit(1);
}

// Initialize Google Text-to-Speech client
const client = new textToSpeech.TextToSpeechClient({
  keyFilename: path.resolve(process.env.GOOGLE_APPLICATION_CREDENTIALS),
});

// Initialize OpenAI client
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// ChatGPT API endpoint
app.post('/api/chatgpt', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    // Call ChatGPT API
    const response = await openai.createCompletion({
      model: "text-davinci-003", // Use the appropriate model
      prompt: prompt,
      max_tokens: 150,
    });

    const chatResponse = response.data.choices[0].text.trim();

    // Send the response back to the client
    res.status(200).json({ response: chatResponse });
  } catch (error) {
    console.error('Error calling ChatGPT API:', error);
    res.status(500).json({ error: 'Failed to generate response from ChatGPT' });
  }
});

// Text-to-Speech API endpoint
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
    res.status(500).json({ error: 'Text-to-Speech conversion failed', details: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});