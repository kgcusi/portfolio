export interface Experience {
  id: number;
  title: string;
  company: string;
  startYear: string;
  /** null means the role is current. */
  endYear: string | null;
  description: string;
  techs: string[];
}

/**
 * Ordered most recent first by end date, current roles at the top, which is the
 * convention a recruiter is already reading for.
 */
export const experiences: Experience[] = [
  {
    id: 5,
    title: 'Full Stack Developer',
    company: 'MTech Biometrics',
    startYear: '2025',
    endYear: null,
    description:
      'Five apps here: Timekeeping, Live Monitoring, API Bridge, Logs Tracking and Pay Parking. The tricky one was the biometric integration, reading and processing data straight out of a third-party vendor\u2019s database so clients could watch attendance update in real time.',
    techs: ['TypeScript', 'Next.js', 'Nest.js', 'MySQL', 'Node.js', 'React.js'],
  },
  {
    id: 2,
    title: 'Smart Contract Auditor',
    company: 'ContractWolf',
    startYear: '2022',
    endYear: null,
    description:
      'I test smart contracts by hand and with tooling, mostly ERC20 tokens and swap mechanisms. When something looks wrong I dig into it and write it up for the client and their investors.',
    techs: ['HardHat', 'JavaScript', 'Solidity', 'Remix', 'Ethereum'],
  },
  {
    id: 6,
    title: 'Backend Developer',
    company: 'Liga Gaming',
    startYear: '2025',
    endYear: '2026',
    description:
      'Backend microservices for an online casino, built in Nest.js. I worked on the Announcement and Notification services, including how they talked to everything else around them.',
    techs: ['Node.js', 'Nest.js', 'Kafka', 'Postgres', 'Docker', 'gRPC'],
  },
  {
    id: 4,
    title: 'Full Stack Developer',
    company: 'EmergentX',
    startYear: '2024',
    endYear: '2025',
    description:
      'Came onto InfinityConnect halfway through and worked under two different senior developers as it changed hands. I built the live call feature, wired up Stripe payments, and put together a good chunk of the app.',
    techs: ['Node.js', 'React.js', 'Next.js', 'GraphQL', 'MongoDB', 'AWS'],
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'ARTBAT Live',
    startYear: '2022',
    endYear: '2024',
    description:
      'Sole developer. I designed and built the record system and the livestreaming template behind their Live Virtual Art Battles, plus a few WebAR pieces in 8th Wall. I also kept their Shopify store ticking over, products and small UI fixes.',
    techs: [
      'Node.js',
      'Express.js',
      'React.js',
      'Next.js',
      'MongoDB',
      '8thWall',
      'Shopify',
    ],
  },
  {
    id: 1,
    title: 'Full Stack Developer',
    company: 'Ally Techno Grit Solutions',
    startYear: '2021',
    endYear: '2022',
    description:
      'Two of us kept the existing web apps running while we built a CMS and an online payroll and attendance system from scratch.',
    techs: ['Laravel', 'PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Bootstrap'],
  },
];
