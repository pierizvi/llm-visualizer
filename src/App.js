// src/App.js
import React, { useState } from 'react';
import InputForm from './components/InputForm';
import TokenVisualizer from './components/TokenVisualizer';
import AttentionHeatmap from './components/AttentionHeatmap';
import LayerVisualizer from './components/LayerVisualizer';

const App = () => {
  const [tokens, setTokens] = useState([]);
  const [attention, setAttention] = useState([]);
  const [activations, setActivations] = useState([]);

  const handleSubmit = async (prompt) => {
    try {
      const response = await fetch('http://localhost:5000/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTokens(data.tokens);
      setAttention(data.attention);
      setActivations(data.activations);
    } catch (error) {
      console.error('Failed to fetch:', error);
    }
  };

  return (
    <div>
      <InputForm onSubmit={handleSubmit} />
      <TokenVisualizer tokens={tokens} />
      <AttentionHeatmap attention={attention} />
      <LayerVisualizer activations={activations} />
    </div>
  );
};

export default App;