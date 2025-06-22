import React from 'react';
import { useTheme } from '../ThemeContext';

const ComparisonTable = () => {
  const { dark } = useTheme();

  return (
    <section
      style={{
        ...styles.section,
        backgroundColor: dark ? '#1f2937' : '#f9fafb',
        color: dark ? '#f9fafb' : '#111827',
      }}
    >
      <h2 style={styles.heading}>📊 Client vs Server Comparison</h2>
      <table style={styles.table}>
        
       <thead>
  <tr>
    <th style={{ ...styles.th, backgroundColor: dark ? '#334155' : '#f3f4f6' }}>Aspect</th>
    <th style={{ ...styles.th, backgroundColor: dark ? '#0ea5e9' : '#e0f7fa' }}>Client Side</th>
    <th style={{ ...styles.th, backgroundColor: dark ? '#10b981' : '#e8f5e9' }}>Server Side</th>
  </tr>
</thead>
        <tbody>
          <tr>
            <td style={styles.td}>Execution</td>
            <td style={{ ...styles.td, color: dark ? '#bae6fd' : '#0288d1' }}>In browser</td>
            <td style={{ ...styles.td, color: dark ? '#bbf7d0' : '#388e3c' }}>On server</td>
          </tr>
          <tr>
            <td style={styles.td}>Security</td>
            <td style={{ ...styles.td, color: dark ? '#bae6fd' : '#0288d1' }}>Low</td>
            <td style={{ ...styles.td, color: dark ? '#bbf7d0' : '#388e3c' }}>High</td>
          </tr>
          <tr>
            <td style={styles.td}>Languages</td>
            <td style={{ ...styles.td, color: dark ? '#bae6fd' : '#0288d1' }}>HTML, CSS, JS</td>
            <td style={{ ...styles.td, color: dark ? '#bbf7d0' : '#388e3c' }}>Node.js, PHP, Python</td>
          </tr>
          <tr>
            <td style={styles.td}>Focus</td>
            <td style={{ ...styles.td, color: dark ? '#bae6fd' : '#0288d1' }}>UX & Interactions</td>
            <td style={{ ...styles.td, color: dark ? '#bbf7d0' : '#388e3c' }}>Logic, Data, Auth</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

const styles = {
  section: {
    marginTop: '40px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Segoe UI, sans-serif',
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    textAlign: 'center',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'center',
  },
  th: {
    padding: '12px',
    color: '#1f2937',
    fontWeight: 'bold',
    borderBottom: '2px solid #d1d5db',
  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #e5e7eb',
  },
};

export default ComparisonTable;
