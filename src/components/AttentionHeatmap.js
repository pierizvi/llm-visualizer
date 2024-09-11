// src/components/AttentionHeatmap.js
import React from 'react';
import Plot from 'react-plotly.js';

const AttentionHeatmap = ({ attention }) => {
  if (!Array.isArray(attention) || !Array.isArray(attention[0])) {
    console.error('Attention data is not a 2D array');
    return null;
  }

  const numRows = attention.length;
  const numCols = attention[0].length;

  for (let i = 1; i < numRows; i++) {
    if (attention[i].length !== numCols) {
      console.error('Attention data rows have inconsistent lengths');
      return null;
    }
  }

  const data = [
    {
      z: attention,
      type: 'heatmap',
    },
  ];

  return <Plot data={data} layout={{ title: 'Attention Weights (2D)' }} />;
};

export default AttentionHeatmap;