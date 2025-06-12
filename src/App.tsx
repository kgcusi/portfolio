import { useEffect, useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Nav from './components/Nav';
import Experiences from './components/Experiences';
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
      <div className="flex flex-col md:flex-row items-center md:items-start mx-auto min-h-screen max-w-screen-xl px-12 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-10">
        <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-10">
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-start">
            <img
              alt="avatar"
              src={Avatar}
              className="w-56 h-56 rounded-full border-custom-sky border-8 mb-5"
            />
            <Header />
            <Nav />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <About />
          <Experiences />
        </div>
      </div>
    </div>
  );
}

export default App;
