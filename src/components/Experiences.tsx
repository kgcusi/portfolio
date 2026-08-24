import Section from './Section';
import { experiences } from '../data/experiences';

export default function Experiences() {
  return (
    <Section id="experience" title="Experience" delay={0.05}>
      <ol className="flex flex-col">
        {experiences.map((experience) => (
          <li
            key={experience.id}
            className="group grid gap-x-6 gap-y-2 border-t border-line py-6 first:border-t-0
                       first:pt-0 last:pb-0 sm:grid-cols-[7rem_1fr]"
          >
            <p className="tabular pt-0.5 text-2xs font-semibold uppercase text-ink-muted">
              <time dateTime={experience.startYear}>{experience.startYear}</time>
              <span aria-hidden="true"> – </span>
              {experience.endYear ? (
                <time dateTime={experience.endYear}>{experience.endYear}</time>
              ) : (
                'Present'
              )}
            </p>

            <div className="flex flex-col gap-2">
              <h3 className="text-base font-bold leading-snug text-ink">
                {experience.title}
                <span className="font-medium text-ink-muted"> · </span>
                <span className="font-semibold text-accent-ink">
                  {experience.company}
                </span>
              </h3>
              <p className="text-[0.9375rem] leading-relaxed text-ink-body">
                {experience.description}
              </p>
              <ul className="mt-1 flex flex-wrap gap-1.5">
                {experience.techs.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
