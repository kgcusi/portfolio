import { Mail, Linkedin, Github, FileText, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';

const socials = [
  { href: `mailto:${profile.email}`, label: 'Email', Icon: Mail, external: false },
  { href: profile.links.linkedin, label: 'LinkedIn', Icon: Linkedin, external: true },
  { href: profile.links.github, label: 'GitHub', Icon: Github, external: true },
];

export default function Nav() {
  return (
    <div className="flex flex-col gap-4">
      {/* Recruiters come for this first, so it gets to look like the primary action. */}
      <a
        href={profile.links.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex w-fit items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm
                   font-semibold text-white shadow-card transition-colors hover:bg-ink-body"
      >
        <FileText size={16} aria-hidden="true" />
        Résumé
        <ArrowUpRight
          size={14}
          aria-hidden="true"
          className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </a>

      <ul className="flex items-center gap-1">
        {socials.map(({ href, label, Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              title={label}
              {...(external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-muted
                         transition-colors hover:bg-accent-wash hover:text-ink"
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
