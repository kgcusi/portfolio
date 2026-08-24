import { useScrollSpy } from '../hooks/useScrollSpy';

export const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const;

const IDS = SECTIONS.map((s) => s.id);

/**
 * The piece the two-column layout was always missing: somewhere to see where you
 * are and jump. `orientation` switches between the desktop rail and the mobile bar.
 */
export default function SectionNav({
  orientation,
}: {
  orientation: 'vertical' | 'horizontal';
}) {
  const active = useScrollSpy(IDS);

  if (orientation === 'horizontal') {
    return (
      <nav aria-label="Sections">
        <ul className="flex gap-1 overflow-x-auto">
          {SECTIONS.map((section) => {
            const isActive = active === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`block whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-ink text-white'
                      : 'text-ink-muted hover:bg-accent-wash hover:text-ink'
                  }`}
                >
                  {section.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  return (
    <nav aria-label="Sections">
      <ul className="flex flex-col gap-1">
        {SECTIONS.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? 'true' : undefined}
                className="group flex items-center gap-4 py-2"
              >
                <span
                  aria-hidden="true"
                  className={`h-px transition-all duration-300 ease-out ${
                    isActive
                      ? 'w-12 bg-ink'
                      : 'w-6 bg-line-strong group-hover:w-10 group-hover:bg-ink-muted'
                  }`}
                />
                <span
                  className={`text-eyebrow font-bold uppercase transition-colors ${
                    isActive
                      ? 'text-ink'
                      : 'text-ink-muted group-hover:text-ink'
                  }`}
                >
                  {section.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
