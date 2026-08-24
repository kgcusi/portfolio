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
      'Developed multiple applications, including Timekeeping, Live Monitoring, API Bridge, Logs Tracking, and Pay Parking. Integrated a third-party biometric system by fetching and processing data from their database, enabling real-time monitoring and seamless data synchronization for clients.',
    techs: ['TypeScript', 'Next.js', 'Nest.js', 'MySQL', 'Node.js', 'React.js'],
  },
  {
    id: 2,
    title: 'Smart Contract Auditor',
    company: 'ContractWolf',
    startYear: '2022',
    endYear: null,
    description:
      'Performing manual and automated testing of Smart Contracts, including ERC20 tokens and swapping mechanisms, identifying security vulnerabilities, and preparing comprehensive documentation for clients and investors.',
    techs: ['HardHat', 'JavaScript', 'Solidity', 'Remix', 'Ethereum'],
  },
  {
    id: 6,
    title: 'Backend Developer',
    company: 'Liga Gaming',
    startYear: '2025',
    endYear: '2026',
    description:
      'Developed microservices with Nest.js to develop backend processes for an online casino, focused on Announcement Service and Notification Service, with communication across other microservices.',
    techs: ['Node.js', 'Nest.js', 'Kafka', 'Postgres', 'Docker', 'gRPC'],
  },
  {
    id: 4,
    title: 'Full Stack Developer',
    company: 'EmergentX',
    startYear: '2024',
    endYear: '2025',
    description:
      'Joined the InfinityConnect project mid-development, collaborating with two different senior developers at different stages of the project. Implemented live call functionality, integrated Stripe payments, and developed key application components.',
    techs: ['Node.js', 'React.js', 'Next.js', 'GraphQL', 'MongoDB', 'AWS'],
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'ARTBAT Live',
    startYear: '2022',
    endYear: '2024',
    description:
      'Served as the solo developer for ARTBAT Live, designing and implementing a record system and a livestreaming template for Live Virtual Art Battles. Additionally, developed Web Augmented Reality (WebAR) applications using 8th Wall and provided light maintenance for a Shopify account, including product management and UI adjustments.',
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
      'Collaborated with another developer to maintain existing web applications and successfully developed a Content Management System as well as an Online Payroll and Attendance Management System.',
    techs: ['Laravel', 'PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Bootstrap'],
  },
];
