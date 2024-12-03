import { experiences } from '../data/experiences';

export default function Experiences() {
  return (
    <section className="text-custom-slate flex flex-col gap-2">
      {experiences.map((experience) => (
        <div key={experience.id} className="flex flex-col gap-1">
          <div>
            <p className="text-sm font-semibold">
              {experience.startYear} {experience.endYear && '-'}{' '}
              {experience.endYear}
            </p>
            <p className="text-lg font-bold">{experience.title}</p>
          </div>
          <p>{experience.description}</p>
          <div className="flex gap-1">
            {experience.techs.map((tech) => (
              <span
                key={tech}
                className="text-white bg-custom-slate p-1 text-xs rounded-md font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
