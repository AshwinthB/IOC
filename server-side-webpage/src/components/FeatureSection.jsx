import React from 'react';

const features = [
  {
    title: 'Authentication',
    icon: '🔐',
    description: 'Secure login systems using JWT, OAuth, or session-based auth.'
  },
  {
    title: 'Database Operations',
    icon: '🗃️',
    description: 'Interacting with databases like MongoDB or PostgreSQL via backend APIs.'
  },
  {
    title: 'Routing & APIs',
    icon: '🛣️',
    description: 'Defining server routes that respond to client requests using REST or GraphQL.'
  },
  {
    title: 'Middleware Functions',
    icon: '🧱',
    description: 'Reusable functions for logging, auth-checking, and error handling in the request cycle.'
  }
];

const FeatureSection = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>🔧 Key Server-Side Features</h2>
      <div style={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{feature.icon}</div>
            <h3 style={styles.cardTitle}>{feature.title}</h3>
            <p style={styles.cardDesc}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#f9fafb',
    borderRadius: '12px'
  },
  title: {
    fontSize: '1.6rem',
    marginBottom: '20px',
    color: '#4f46e5',
    textAlign: 'center'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px'
  },
  card: {
    background: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  icon: {
    fontSize: '2rem',
    marginBottom: '10px'
  },
  cardTitle: {
    fontSize: '1.2rem',
    color: '#374151',
    fontWeight: 'bold'
  },
  cardDesc: {
    fontSize: '1rem',
    color: '#4b5563'
  }
};

export default FeatureSection;
