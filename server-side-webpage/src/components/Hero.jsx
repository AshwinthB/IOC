import React from 'react';
import { useTheme } from '../ThemeContext';

const Hero = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <div className="hero-section">
      <h1 className="hero-title">🌐 Server-Side Engineering Fundamentals</h1>
      <p className="hero-subtitle">Master the backend. Build scalable systems.</p>
      <button className="theme-button" onClick={toggleTheme}>
        Switch to {dark ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default Hero;
