import Section from './Section';

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col gap-4 text-[0.9375rem] leading-relaxed text-ink-body">
        <p>
          I&rsquo;m a developer in the Philippines. Most of what I build is the
          boring, load-bearing stuff. Timekeeping systems, daily reports filed
          from a job site, inventory ledgers, billing runs. The screens people
          have open all day.
        </p>
        <p>
          TypeScript is where I spend most of my time. Next.js and React on the
          front, Node or Nest behind it, Postgres or MySQL underneath. I&rsquo;ve
          shipped a fair bit of Laravel too. And I audit Solidity contracts,
          mostly ERC20 tokens and swap logic.
        </p>
        <p>
          Sometimes I&rsquo;m the only developer on a project. Sometimes
          I&rsquo;m the one picking up someone else&rsquo;s half-finished
          branch. Both happen. Clients have been two-person startups and
          companies big enough to have their own IT department.
        </p>
        <p>
          Outside work it&rsquo;s video games, films, and a book I keep meaning
          to finish.
        </p>
      </div>
    </Section>
  );
}
