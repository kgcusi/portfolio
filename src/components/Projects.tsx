import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';

interface LightboxState {
  images: string[];
  title: string;
  index: number;
}

export default function Projects() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() => {
    if (!lightbox) return;
    setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length });
  }, [lightbox]);

  const next = useCallback(() => {
    if (!lightbox) return;
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.images.length });
  }, [lightbox]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, close, prev, next]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        className="bg-white rounded-2xl shadow-md p-8"
      >
        <h2 className="text-xs font-bold uppercase tracking-widest text-custom-sky mb-6">
          Projects
        </h2>
        <div className="flex flex-col divide-y divide-custom-neutral">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col gap-2 py-5 first:pt-0 last:pb-0">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-custom-dark hover:text-custom-sky transition-colors w-fit"
              >
                {project.title}
                <ExternalLink size={12} />
              </a>
              <p className="text-custom-slate text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-custom-slate bg-custom-light px-2 py-0.5 text-xs rounded font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.images.length > 0 && (
                <div className="flex gap-3 overflow-x-auto pb-1 mt-3">
                  {project.images.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setLightbox({ images: project.images, title: project.title, index: i })}
                      className="shrink-0 rounded-lg overflow-hidden border border-custom-neutral focus:outline-none focus:ring-2 focus:ring-custom-sky"
                    >
                      <img
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="h-36 w-auto object-cover hover:opacity-80 transition-opacity cursor-pointer"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
            onClick={close}
          >
            {/* Dialog */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative flex flex-col items-center gap-4 max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={close}
                className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
              >
                <X size={22} />
              </button>

              {/* Image */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={lightbox.index}
                  src={lightbox.images[lightbox.index]}
                  alt={`${lightbox.title} screenshot ${lightbox.index + 1}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.18 }}
                  className="max-h-[75vh] w-auto rounded-xl shadow-2xl object-contain"
                />
              </AnimatePresence>

              {/* Controls */}
              {lightbox.images.length > 1 && (
                <div className="flex items-center gap-6">
                  <button
                    onClick={prev}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <span className="text-white/60 text-sm">
                    {lightbox.index + 1} / {lightbox.images.length}
                  </span>
                  <button
                    onClick={next}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <ChevronRight size={28} />
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
