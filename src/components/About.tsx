import Section from './Section';

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col gap-4 text-[0.9375rem] leading-relaxed text-ink-body">
        <p>
          I&rsquo;m a full stack developer based in the Philippines. Most of my
          work is line-of-business software: timekeeping and access control,
          field reporting, inventory ledgers, billing and payroll. The systems a
          company depends on every day.
        </p>
        <p>
          TypeScript is my main stack. Next.js and React on the front end,
          Node.js and Nest.js on the backend, over PostgreSQL or MySQL. I&rsquo;ve
          also shipped production Laravel. On the blockchain side I audit
          Solidity contracts, mostly ERC20 tokens and swap mechanisms.
        </p>
        <p>
          I&rsquo;ve worked as the sole developer on a project and as one of
          several picking up a codebase mid-flight. Clients have ranged from
          two-person startups to companies with their own IT departments.
        </p>
        <p>
          Outside work I play video games, watch films, and keep a book going.
        </p>
      </div>
    </Section>
  );
}
