import React from 'react';

const Introduction = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>📘 Introduction to Server Side Engineering</h2>
      <p style={styles.text}>
        Server-side engineering involves building and maintaining the part of a web application
        that runs on a server. It includes processing business logic, handling databases, 
        managing user authentication, and delivering dynamic content to the client.
      </p>
      <p style={styles.text}>
        Technologies like <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>Django</strong> are
        commonly used. Server-side development focuses on security, scalability, and
        performance optimization.
      </p>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'white',
    padding: '30px',
    marginTop: '30px',
    borderRadius: '12px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
  },
  heading: {
    fontSize: '1.8rem',
    color: '#4f46e5',
    marginBottom: '16px'
  },
  text: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#374151',
    marginBottom: '12px'
  }
};

export default Introduction;
