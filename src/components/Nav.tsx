import { Mail, Linkedin, Github, NotepadText } from 'lucide-react';

export default function Nav() {
  return (
    <nav className="w-full">
      <ul className="flex flex-col gap-2.5">
        <li>
          <a
            className="flex items-center gap-3 text-custom-slate hover:text-custom-dark transition-colors group"
            href="mailto:kcgcusi@gmail.com"
          >
            <Mail size={15} className="text-custom-sky shrink-0" />
            <span className="text-xs truncate">kcgcusi@gmail.com</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-3 text-custom-slate hover:text-custom-dark transition-colors"
            href="https://www.linkedin.com/in/karl-christoper-cusi-856371209/"
          >
            <Linkedin size={15} className="text-custom-sky shrink-0" />
            <span className="text-xs">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-3 text-custom-slate hover:text-custom-dark transition-colors"
            href="https://github.com/kgcusi"
          >
            <Github size={15} className="text-custom-sky shrink-0" />
            <span className="text-xs">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="/resume.pdf"
            download="karl-cusi-resume.pdf"
            className="flex items-center gap-3 text-custom-slate hover:text-custom-dark transition-colors"
          >
            <NotepadText size={15} className="text-custom-sky shrink-0" />
            <span className="text-xs">Curriculum Vitae</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
