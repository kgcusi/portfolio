import Section from './Section';

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col gap-4 text-[0.9375rem] leading-relaxed text-ink-body">
        <p>
          I&rsquo;m a developer based in the Philippines. Most of my work is the
          software a business actually operates on: timekeeping and monitoring,
          site reporting, inventory ledgers, billing, and the admin screens
          behind them.
        </p>
        <p>
          My main stack is TypeScript, with Next.js and React on the front end
          and Node.js or Nest.js behind it, over Postgres and MySQL. I&rsquo;ve
          also shipped with Laravel, and I audit Solidity contracts for ERC20
          tokens and swap mechanisms.
        </p>
        <p>
          I&rsquo;ve worked with startups, small businesses, and large
          corporations, sometimes as the only developer on a project and
          sometimes alongside senior developers who handed it over mid-flight.
        </p>
        <p>
          Away from the keyboard I play video games, watch films and series, and
          try to keep a book going.
        </p>
      </div>
    </Section>
  );
}
