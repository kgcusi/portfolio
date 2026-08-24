import { useEffect, useState } from 'react';

/**
 * Tracks which section is under the reading line.
 *
 * Section offsets are measured once and re-measured only when the document
 * height changes, so the scroll handler itself is pure arithmetic with no
 * layout reads. Deliberately not throttled through requestAnimationFrame: if a
 * frame never arrives (background or occluded tab) a rAF-gated throttle wedges
 * shut and stops updating entirely.
 */
export function useScrollSpy(ids: readonly string[], offset = 120) {
  const [active, setActive] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    let tops: { id: string; top: number }[] = [];
    let measuredAtHeight = -1;

    const measure = () => {
      tops = ids.flatMap((id) => {
        const el = document.getElementById(id);
        return el
          ? [{ id, top: el.getBoundingClientRect().top + window.scrollY }]
          : [];
      });
      measuredAtHeight = document.documentElement.scrollHeight;
    };

    const update = () => {
      // Lazy images and font swaps change the page height after mount.
      if (document.documentElement.scrollHeight !== measuredAtHeight) measure();
      if (tops.length === 0) return;

      const line = window.scrollY + offset;
      let current = tops[0].id;
      for (const section of tops) {
        if (section.top <= line) current = section.id;
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) current = tops[tops.length - 1].id;

      setActive(current);
    };

    const onResize = () => {
      measure();
      update();
    };

    measure();
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', onResize);
    };
  }, [ids, offset]);

  return active;
}
