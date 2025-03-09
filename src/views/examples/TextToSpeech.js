import React, { useState } from 'react';
import { Button, Input, Container, Row, Col } from 'reactstrap';

const TextToSpeech = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  const handleChatGPT = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/chatgpt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResponse(data.response);
      handleSynthesize(data.response);
    } catch (error) {
      console.error('Error calling ChatGPT API:', error);
    }
  };

  const handleSynthesize = async (text) => {
    try {
      const res = await fetch('http://localhost:3001/api/synthesize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          voice: { languageCode: 'en-US', name: 'en-US-Wavenet-D' },
          audioConfig: { audioEncoding: 'MP3' },
        }),
      });
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
    } catch (error) {
      console.error('Error synthesizing speech:', error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt"
          />
          <Button color="primary" onClick={handleChatGPT}>
            Generate Response
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{response}</p>
          {audioUrl && <audio controls src={audioUrl} />}
        </Col>
      </Row>
    </Container>
  );
};

export default TextToSpeech;