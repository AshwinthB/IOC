import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>Made with ❤️ by Ashwinth B — 2025 | React Project on Server Side Engineering</p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: '60px',
    padding: '20px',
    backgroundColor: '#e0e7ff',
    color: '#1e3a8a',
    textAlign: 'center',
    borderRadius: '10px',
    fontSize: '14px'
  }
};

export default Footer;
