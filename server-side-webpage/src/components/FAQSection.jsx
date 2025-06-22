import React, { useState } from 'react';

const faqs = [
  {
    q: "What is middleware?",
    a: "Middleware is a function that runs before the request reaches the final route handler."
  },
  {
    q: "What is REST API?",
    a: "It is a standard architecture for designing networked applications using HTTP methods."
  },
  {
    q: "Why is server-side security important?",
    a: "It protects sensitive data and prevents malicious activities like SQL injection."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>💡 Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index}>
          <button
            style={styles.question}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {faq.q}
          </button>
          {openIndex === index && <p style={styles.answer}>{faq.a}</p>}
        </div>
      ))}
    </section>
  );
};

const styles = {
  section: {
    marginTop: '40px',
    background: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 3px 8px rgba(0,0,0,0.1)'
  },
  heading: {
    fontSize: '1.5rem',
    color: '#4f46e5',
    marginBottom: '16px'
  },
  question: {
    background: 'none',
    border: 'none',
    color: '#1d4ed8',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '12px'
  },
  answer: {
    marginTop: '8px',
    color: '#374151'
  }
};

export default FAQSection;
