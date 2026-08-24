import { useCallback } from 'react';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

/**
 * Was 200 particles in #0ea5e9, a colour from no palette on this site, with
 * click-to-spawn. Now palette-only, a quarter of the count, and hover-only.
 */
export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-20"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          number: { value: 48, density: { enable: true, area: 900 } },
          color: { value: ['#AAC7D8', '#768A96'] },
          shape: { type: 'circle' },
          opacity: { value: { min: 0.15, max: 0.4 } },
          size: { value: { min: 1, max: 3 } },
          links: {
            enable: true,
            distance: 130,
            color: '#AAC7D8',
            opacity: 0.22,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: 'none',
            outModes: { default: 'bounce' },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: false },
          },
          modes: { repulse: { distance: 90, duration: 0.4 } },
        },
        detectRetina: true,
      }}
    />
  );
}
