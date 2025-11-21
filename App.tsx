import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { EcoCold } from './pages/EcoCold';
import { CyberTales } from './pages/CyberTales';
import { Contact } from './pages/Contact';
import { AIAdvisor } from './components/AIAdvisor';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-gray-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/eco-cold" element={<EcoCold />} />
            <Route path="/cyber-tales" element={<CyberTales />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AIAdvisor />
      </div>
    </Router>
  );
}

export default App;