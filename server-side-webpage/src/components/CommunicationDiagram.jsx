import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';

const steps = [
  {
    title: "Client Sends Request",
    desc: "The client (browser/app) sends an HTTP request to the server.",
    color: "#4f46e5"
  },
  {
    title: "Server Parses Request",
    desc: "The server parses the URL, headers, and data.",
    color: "#10b981"
  },
  {
    title: "Business Logic Executed",
    desc: "Controllers interact with services, check rules, access cache.",
    color: "#f59e0b"
  },
  {
    title: "Database Interaction",
    desc: "Data is fetched/updated from the DB layer via ORM or raw queries.",
    color: "#ef4444"
  },
  {
    title: "Response Sent",
    desc: "The server builds a response (JSON/HTML) and sends it back.",
    color: "#6366f1"
  }
];

const CommunicationDiagram = () => {
  const [step, setStep] = useState(0);
  const { themeStyles } = useTheme();

  const next = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <section style={{ ...styles.section, ...themeStyles }}>
      <h2 style={styles.title}>🛰️ Server Communication Flow</h2>
      <div style={{ ...styles.box, borderColor: steps[step].color }}>
        <h3 style={{ ...styles.stepTitle, color: steps[step].color }}>{steps[step].title}</h3>
        <p style={styles.stepDesc}>{steps[step].desc}</p>
      </div>
      <div style={styles.nav}>
        <button onClick={prev} disabled={step === 0} style={styles.navBtn}>⬅️ Prev</button>
        <button onClick={next} disabled={step === steps.length - 1} style={styles.navBtn}>Next ➡️</button>
      </div>
      <div style={styles.progressContainer}>
        {steps.map((_, idx) => (
          <div key={idx} style={{ ...styles.dot, backgroundColor: step >= idx ? steps[step].color : '#e5e7eb' }}></div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    marginTop: '40px',
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '15px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    textAlign: 'center',
    transition: 'all 0.3s ease-in-out'
  },
  title: {
    fontSize: '1.6rem',
    marginBottom: '20px',
    color: '#4f46e5'
  },
  box: {
    border: '2px solid',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px'
  },
  stepTitle: {
    fontSize: '1.3rem',
    marginBottom: '8px'
  },
  stepDesc: {
    fontSize: '1rem',
    color: '#374151'
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px'
  },
  navBtn: {
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#6366f1',
    color: 'white',
    transition: 'background 0.3s ease-in-out'
  },
  progressContainer: {
    display: 'flex',
    marginTop: '20px',
    justifyContent: 'center',
    gap: '10px'
  },
  dot: {
    height: '14px',
    width: '14px',
    borderRadius: '50%',
    backgroundColor: '#e5e7eb',
    transition: 'background-color 0.3s ease'
  }
};

export default CommunicationDiagram;
