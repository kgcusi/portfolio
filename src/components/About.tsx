import { motion } from 'motion/react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white rounded-2xl shadow-md p-8"
    >
      <h2 className="text-xs font-bold uppercase tracking-widest text-custom-sky mb-5">
        About
      </h2>
      <div className="flex flex-col gap-4">
        <p className="text-custom-slate text-sm leading-relaxed">
          I'm a developer based in the Philippines. I have a passion for web
          development and love to create web applications that are user-friendly
          and accessible.
        </p>
        <p className="text-custom-slate text-sm leading-relaxed">
          My main stack is JavaScript/TypeScript, using Next.js/React.js for the
          frontend and Node.js for the backend. I also have experience working
          with other technologies like .NET and Laravel. I'm always eager to
          learn new technologies and improve my skills.
        </p>
        <p className="text-custom-slate text-sm leading-relaxed">
          Professionally, I have worked with various clients and companies
          around the world — from startups and small businesses to large
          corporations, helping them build web apps that meet their needs.
        </p>
        <p className="text-custom-slate text-sm leading-relaxed">
          In my spare time, I enjoy playing video games, watching movies and TV
          shows. I also try to read books and learn new things.
        </p>
      </div>
    </motion.div>
  );
}
