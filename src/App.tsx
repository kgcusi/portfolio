import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import About from './components/About';
import Header from './components/Header';
import Nav from './components/Nav';
import Experiences from './components/Experiences';
import ContactForm from './components/ContactForm';
import CursorGradient from './components/CursorGradient';
import Avatar from './assets/karl-avatar.png';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative">
      <ParticlesBackground />
      <CursorGradient cursorPosition={cursorPosition} />
      <div className="flex flex-col md:flex-row items-start mx-auto min-h-screen max-w-screen-xl px-6 py-10 gap-6 font-sans md:px-10 lg:px-16 lg:py-12">

        {/* Sticky sidebar — single unified card */}
        <div className="w-full md:w-72 lg:w-80 shrink-0 lg:sticky lg:top-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center md:items-start text-center md:text-start gap-6"
          >
            <img
              alt="avatar"
              src={Avatar}
              className="w-28 h-28 rounded-full border-custom-sky border-4"
            />
            <Header />
            <Nav />

            {/* Contact form — desktop only, pinned to bottom of sidebar */}
            <div className="hidden lg:block w-full pt-2 border-t border-custom-neutral">
              <ContactForm />
            </div>
          </motion.div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 flex flex-col gap-6">
          <About />
          <Experiences />

          {/* Contact form — mobile only, at the very bottom */}
          <div className="lg:hidden bg-white rounded-2xl shadow-md p-8">
            <ContactForm />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
