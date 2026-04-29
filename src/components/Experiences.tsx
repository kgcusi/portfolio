import { motion } from 'motion/react';
import { experiences } from '../data/experiences';

export default function Experiences() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
      className="bg-white rounded-2xl shadow-md p-8"
    >
      <h2 className="text-xs font-bold uppercase tracking-widest text-custom-sky mb-6">
        Experience
      </h2>
      <div className="flex flex-col divide-y divide-custom-neutral">
        {experiences.map((experience) => (
          <div key={experience.id} className="flex flex-col gap-2 py-5 first:pt-0 last:pb-0">
            <p className="text-xs font-semibold text-custom-steel uppercase tracking-wide">
              {experience.startYear}
              {experience.endYear ? ` — ${experience.endYear}` : ' — Present'}
            </p>
            <p className="text-sm font-bold text-custom-dark">{experience.title}</p>
            <p className="text-custom-slate text-sm leading-relaxed">{experience.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {experience.techs.map((tech) => (
                <span
                  key={tech}
                  className="text-custom-slate bg-custom-light px-2 py-0.5 text-xs rounded font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
