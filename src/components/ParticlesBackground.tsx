import { useCallback } from 'react';
import Particles from 'react-particles';
import type { Engine, Container } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log(container);
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: '#f8fafc' // same as your bg-custom-light
          }
        },
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: '#0ea5e9'
          },
          shape: {
            type: 'circle'
          },
          opacity: {
            value: 0.3
          },
          size: {
            value: { min: 1, max: 4 }
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            outModes: {
              default: 'bounce'
            }
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            onClick: {
              enable: true,
              mode: 'push'
            }
          },
          modes: {
            repulse: {
              distance: 100
            },
            push: {
              quantity: 4
            }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default ParticlesBackground;
