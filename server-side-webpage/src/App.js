import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import FeatureSection from './components/FeatureSection';
import CodeSnippet from './components/CodeSnippet';
import CommunicationDiagram from './components/CommunicationDiagram';
import FAQSection from './components/FAQSection';
import ComparisonTable from './components/ComparisonTable';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/communication">Flow</Link>
          <Link to="/code">Code</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/compare">Compare</Link>
        </nav>

        <Routes>
          <Route path="/" element={<><Hero /><Introduction /></>} />
          <Route path="/features" element={<FeatureSection />} />
          <Route path="/communication" element={<CommunicationDiagram />} />
          <Route path="/code" element={<CodeSnippet />} />
          <Route path="/faq" element={<FAQSection />} />
          <Route path="/compare" element={<ComparisonTable />} />
        </Routes>

        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
