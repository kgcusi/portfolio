import { Suspense, lazy } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import About from './components/About';
import Header from './components/Header';
import Nav from './components/Nav';
import SectionNav from './components/SectionNav';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import CursorGradient from './components/CursorGradient';
import { useMediaQuery } from './hooks/useMediaQuery';

// Keeps tsparticles out of the entry chunk; it is decoration, not content.
const ParticlesBackground = lazy(
  () => import('./components/ParticlesBackground')
);

function App() {
  const reduced = useReducedMotion();
  const finePointer = useMediaQuery('(pointer: fine)');
  const wideScreen = useMediaQuery('(min-width: 1024px)');

  const showAmbient = !reduced && finePointer && wideScreen;

  return (
    <div className="relative min-h-screen">
      {showAmbient && (
        <>
          <Suspense fallback={null}>
            <ParticlesBackground />
          </Suspense>
          <CursorGradient />
        </>
      )}

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:gap-14 lg:px-16 lg:py-20">
        <motion.header
          initial={reduced ? false : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8 lg:sticky lg:top-20 lg:h-fit lg:w-[19rem] lg:shrink-0 lg:self-start"
        >
          <div className="flex flex-col gap-9">
            <Header />
            <div className="hidden lg:block">
              <SectionNav orientation="vertical" />
            </div>
          </div>
          <Nav />
        </motion.header>

        {/* Jump links on small screens, where the sidebar rail is not rendered. */}
        <div className="sticky top-0 z-30 -mx-5 border-y border-line bg-canvas/85 px-5 py-2 backdrop-blur sm:-mx-8 sm:px-8 lg:hidden">
          <SectionNav orientation="horizontal" />
        </div>

        <main id="main" className="flex flex-1 flex-col gap-6">
          <About />
          <Experiences />
          <Projects />
          <ContactForm />
        </main>
      </div>
    </div>
  );
}

export default App;
