import { experiences } from '../data/experiences';

export default function Experiences() {
  return (
    <div className="bg-custom-light backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg mb-4">
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
    </div>
  );
}
