import { Mail, Linkedin, Github, Phone, NotepadText } from 'lucide-react';

export default function Nav() {
  return (
    <section className="block">
      <ul className="text-custom-slate uppercase text-sm font-bold py-12 flex md:flex-col gap-3">
        <li>
          <a
            className="flex items-center gap-2"
            href="mailto:kcgcusi@gmail.com"
          >
            <Mail />
            kcgcusi@gmail.com
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-2"
            href="https://www.linkedin.com/in/karl-christoper-cusi-856371209/"
          >
            <Linkedin />
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-2"
            href="https://github.com/kgcusi"
          >
            <Github />
            GitHub
          </a>
        </li>
        <li>
          <a
            href="/resume.pdf"
            download="karl-cusi-resume.pdf"
            className="flex items-center gap-2"
          >
            <NotepadText />
            Curriculum Vitae
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Phone />
          +639453017564
        </li>
      </ul>
    </section>
  );
}
