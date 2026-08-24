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
      'Built five applications: Timekeeping, Live Monitoring, API Bridge, Logs Tracking and Pay Parking. The core of the work was integrating third-party biometric and access-control hardware, reading and processing data directly from the vendor’s database to give clients real-time attendance and automated parking fee calculation.',
    techs: ['TypeScript', 'Next.js', 'Nest.js', 'MySQL', 'Node.js', 'React.js'],
  },
  {
    id: 2,
    title: 'Smart Contract Auditor',
    company: 'ContractWolf',
    startYear: '2022',
    endYear: null,
    description:
      'Manual and automated testing of smart contracts, mostly ERC20 tokens and swap mechanisms. I review transaction workflows and security mechanisms for vulnerabilities, then write up findings and remediation steps for clients and their investors.',
    techs: ['HardHat', 'JavaScript', 'Solidity', 'Remix', 'Ethereum'],
  },
  {
    id: 6,
    title: 'Backend Developer',
    company: 'Liga Gaming',
    startYear: '2025',
    endYear: '2026',
    description:
      'Backend microservices for an online casino platform, built with Nest.js. I built and maintained the Announcement and Notification services, using Kafka for event-driven messaging and gRPC for calls between services, all containerized with Docker.',
    techs: ['Node.js', 'Nest.js', 'Kafka', 'Postgres', 'Docker', 'gRPC'],
  },
  {
    id: 4,
    title: 'Full Stack Developer',
    company: 'EmergentX',
    startYear: '2024',
    endYear: '2025',
    description:
      'Joined InfinityConnect mid-development, working with two senior developers as the project changed hands. I implemented real-time consultation calls over WebSockets, integrated Stripe for per-consultation payments, and built out core parts of the Next.js and GraphQL application.',
    techs: ['Node.js', 'React.js', 'Next.js', 'GraphQL', 'MongoDB', 'AWS'],
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'ARTBAT Live',
    startYear: '2022',
    endYear: '2024',
    description:
      'Sole developer on the project. I designed and built the record system and the livestreaming template behind their Live Virtual Art Battles, plus web-based AR experiences using 8th Wall. I also maintained their Shopify store, handling product updates and UI adjustments.',
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
      'Worked with one other developer maintaining existing web applications while we built a Content Management System and an online payroll and attendance system. Backend logic and REST APIs in Laravel.',
    techs: ['Laravel', 'PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Bootstrap'],
  },
];
