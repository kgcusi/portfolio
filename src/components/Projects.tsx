import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Lock, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Section from './Section';
import { projects } from '../data/projects';
import type { ProjectImage } from '../data/projects';

interface LightboxState {
  images: ProjectImage[];
  title: string;
  index: number;
}

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function Projects() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const restoreFocusTo = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  const open = (images: ProjectImage[], title: string, index: number) => {
    restoreFocusTo.current = document.activeElement as HTMLElement | null;
    setLightbox({ images, title, index });
  };

  const close = useCallback(() => setLightbox(null), []);

  const step = useCallback((delta: number) => {
    setLightbox((current) =>
      current === null
        ? null
        : {
            ...current,
            index:
              (current.index + delta + current.images.length) %
              current.images.length,
          }
    );
  }, []);

  // Lock the page behind the dialog without letting the scrollbar's
  // disappearance shift the layout underneath.
  useEffect(() => {
    if (!lightbox) return;
    const { body, documentElement } = document;
    const gap = window.innerWidth - documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;
    body.style.overflow = 'hidden';
    if (gap > 0) body.style.paddingRight = `${gap}px`;
    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadding;
    };
  }, [lightbox]);

  // Move focus in on open, trap Tab inside, hand it back on close.
  useEffect(() => {
    if (!lightbox) {
      restoreFocusTo.current?.focus?.();
      restoreFocusTo.current = null;
      return;
    }
    dialogRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
      if (e.key !== 'Tab') return;

      const nodes = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!nodes || nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox, close, step]);

  return (
    <>
      <Section id="projects" title="Projects" delay={0.1}>
        <ol className="flex flex-col">
          {projects.map((project) => (
            <li
              key={project.id}
              className="flex flex-col gap-3 border-t border-line py-6 first:border-t-0 first:pt-0 last:pb-0"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-base font-bold text-ink">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-ink
                                 decoration-accent decoration-2 underline-offset-4 hover:underline"
                    >
                      {project.title}
                      <ArrowUpRight
                        size={15}
                        aria-hidden="true"
                        className="text-accent-ink transition-transform duration-200 ease-out
                                   group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                {!project.link && project.linkNote && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-accent-wash px-2 py-0.5 text-2xs font-semibold uppercase text-accent-ink">
                    <Lock size={11} aria-hidden="true" />
                    {project.linkNote}
                  </span>
                )}
              </div>

              {/* The line that has to land in a seven-second scan. */}
              <p className="border-l-2 border-accent pl-3 text-[0.9375rem] font-semibold leading-relaxed text-ink">
                {project.highlight}
              </p>

              <p className="text-[0.9375rem] leading-relaxed text-ink-body">
                {project.description}
              </p>

              <ul className="mt-1 flex flex-wrap gap-1.5">
                {project.techs.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>

              {project.images.length > 0 && (
                <ul className="-mx-1 mt-2 flex gap-3 overflow-x-auto px-1 pb-2">
                  {project.images.map((image, i) => (
                    <li key={image.thumb} className="shrink-0">
                      <button
                        type="button"
                        onClick={() => open(project.images, project.title, i)}
                        aria-label={`View larger: ${image.alt}`}
                        className="block overflow-hidden rounded-lg border border-line
                                   transition-shadow duration-200 ease-out hover:shadow-lift"
                      >
                        <img
                          src={image.thumb}
                          alt={image.alt}
                          width={480}
                          height={369}
                          loading="lazy"
                          decoding="async"
                          className="h-32 w-auto object-cover transition-transform duration-300
                                     ease-out motion-safe:hover:scale-[1.03] sm:h-36"
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </Section>

      {/* Deliberately not AnimatePresence. In motion 11.18 its exit never
          completes here, which left the closed overlay mounted at opacity 0,
          swallowing every click on the page, and pinned mode="wait" on the
          first image so navigation did nothing. Mount/unmount is React's job;
          only the enter animation is motion's. */}
      {lightbox && (
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduced ? 0 : 0.18 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${lightbox.title} screenshots`}
            tabIndex={-1}
            initial={reduced ? false : { scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: reduced ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex w-full max-w-5xl flex-col items-center gap-4 focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex w-full items-center justify-between gap-4">
              <p className="text-sm font-semibold text-white">{lightbox.title}</p>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70
                           transition-colors hover:bg-white/10 hover:text-white"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            {/* Keyed on index: React swaps the node and the new one fades in. */}
            <motion.img
              key={lightbox.index}
              src={lightbox.images[lightbox.index].full}
              alt={lightbox.images[lightbox.index].alt}
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduced ? 0 : 0.15 }}
              className="max-h-[72vh] w-auto rounded-xl object-contain shadow-2xl"
            />

            {lightbox.images.length > 1 && (
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous image"
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-white/70
                             transition-colors hover:bg-white/10 hover:text-white"
                >
                  <ChevronLeft size={24} aria-hidden="true" />
                </button>
                <p aria-live="polite" className="tabular text-sm text-white/70">
                  {lightbox.index + 1} / {lightbox.images.length}
                </p>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next image"
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-white/70
                             transition-colors hover:bg-white/10 hover:text-white"
                >
                  <ChevronRight size={24} aria-hidden="true" />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
