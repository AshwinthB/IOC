import React from 'react';

const CodeSnippet = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>🧑‍💻 Sample Express Server</h2>
      <pre style={styles.codeBox}>
{`const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
      </pre>
    </section>
  );
};

const styles = {
  section: {
    background: '#fff',
    padding: '30px',
    borderRadius: '12px',
    marginTop: '40px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#4f46e5'
  },
  codeBox: {
    backgroundColor: '#111827',
    color: '#a7f3d0',
    padding: '20px',
    borderRadius: '8px',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap'
  }
};

export default CodeSnippet;
