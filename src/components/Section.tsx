import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

/**
 * One card, one landmark, one heading. Entrance animation is skipped outright
 * when the OS asks for reduced motion rather than just being shortened.
 */
export default function Section({
  id,
  title,
  children,
  delay = 0,
  className = '',
}: {
  id: string;
  title: string;
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.section
      id={id}
      aria-labelledby={`${id}-heading`}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      className={`card scroll-mt-24 p-6 sm:p-8 ${className}`}
    >
      <div className="mb-6 flex items-center gap-3">
        <h2 id={`${id}-heading`} className="eyebrow">
          {title}
        </h2>
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
      </div>
      {children}
    </motion.section>
  );
}
