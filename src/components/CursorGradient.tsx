import { useEffect, useRef } from 'react';

/**
 * Follows the pointer on the compositor. The previous version pushed cursor
 * coordinates through useState, which re-rendered the entire app on every
 * mousemove; nothing here touches React state after mount.
 */
export default function CursorGradient() {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const frame = useRef(0);
  const seeded = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const tick = () => {
      const t = target.current;
      const c = current.current;
      c.x += (t.x - c.x) * 0.12;
      c.y += (t.y - c.y) * 0.12;
      node.style.transform = `translate3d(${c.x - 180}px, ${c.y - 180}px, 0)`;

      if (Math.abs(t.x - c.x) > 0.5 || Math.abs(t.y - c.y) > 0.5) {
        frame.current = window.requestAnimationFrame(tick);
      } else {
        frame.current = 0;
      }
    };

    const onMove = (e: PointerEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!seeded.current) {
        current.current = { ...target.current };
        seeded.current = true;
        node.style.opacity = '1';
      }
      if (frame.current === 0) frame.current = window.requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (frame.current !== 0) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 -z-10 h-[360px] w-[360px] opacity-0
                 transition-opacity duration-500 will-change-transform"
      style={{
        background:
          'radial-gradient(circle, rgba(170,199,216,0.55) 0%, rgba(170,199,216,0.18) 42%, rgba(170,199,216,0) 72%)',
      }}
    />
  );
}
