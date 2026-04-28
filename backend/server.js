const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const textToSpeech = require('@google-cloud/text-to-speech');
const { OpenAI } = require('openai');

const { Resend } = require('resend');

// Load environment variables
dotenv.config();

// Create an instance of the Express application
const app = express();
const port = process.env.PORT || 3001;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Enable CORS - in production, you should restrict this to your actual frontend URL
const corsOptions = {
  origin: process.env.FRONTEND_URL || '*',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

// Contact Form API endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Resend default for unverified domains
      to: ['rightangletechbusinesssolution@gmail.com'],
      subject: `New Project Inquiry from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(400).json({ error });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Ensure GOOGLE_APPLICATION_CREDENTIALS is properly loaded
if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  console.error("ERROR: GOOGLE_APPLICATION_CREDENTIALS is not defined in .env file.");
  process.exit(1);
}

// Initialize Google Text-to-Speech client
const client = new textToSpeech.TextToSpeechClient({
  keyFilename: path.resolve(process.env.GOOGLE_APPLICATION_CREDENTIALS),
});

// ChatGPT API endpoint
app.post('/api/chatgpt', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    // Call ChatGPT API
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Use the appropriate model
      messages: [{ role: "user", content: prompt }],
      max_tokens: 150,
    });

    const chatResponse = response.choices[0].message.content.trim();

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