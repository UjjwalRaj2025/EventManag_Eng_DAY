import React, { useState } from 'react';
import CircuitCanvas from './components/CircuitCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedEventName, setSelectedEventName] = useState('');

  const handleOpenRegister = (eventName = '') => {
    setSelectedEventName(eventName || '');
    setIsRegisterOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
    setSelectedEventName('');
  };

  return (
    <div className="min-h-screen bg-navy-900 text-slate-100 relative font-sans selection:bg-electric-500 selection:text-white">
      
      {/* Background Animated Circuit Canvas Visualizer */}
      <CircuitCanvas />

      {/* Navigation Header */}
      <Navbar onOpenRegister={() => handleOpenRegister()} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenRegister={() => handleOpenRegister()}
          onExploreEvents={() => {
            const el = document.getElementById('events');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <About />

        <Events onRegister={(eventName) => handleOpenRegister(eventName)} />

        <Schedule />

        <Contact />

        <FAQ />
      </main>

      {/* Footer */}
      <Footer onOpenRegister={() => handleOpenRegister()} />

      {/* Dual Registration System Modal (Google Forms + API Ticket Generator) */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={handleCloseRegister}
        defaultEvent={selectedEventName}
      />

    </div>
  );
}

export default App;
