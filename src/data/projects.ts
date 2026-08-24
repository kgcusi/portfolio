export interface ProjectImage {
  thumb: string;
  full: string;
  alt: string;
}

export interface Project {
  id: number;
  title: string;
  /** null when there is no public URL to send someone to. */
  link: string | null;
  /** Shown in place of a link when a project has no public URL. */
  linkNote?: string;
  /** The single line that has to survive a seven-second scan. */
  highlight: string;
  description: string;
  techs: string[];
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'PitStop Pro',
    link: 'https://pitstoppro.vercel.app',
    highlight:
      'Multi-tenant by design: one deployment serves every shop, each with its own storefront and its own isolated data.',
    description:
      'Shop software for tire and auto service centers, covering the full workflow: booking an appointment, logging the work performed on a vehicle, invoicing it, and drawing the parts back out of inventory at their actual purchase cost.',
    techs: [
      'Next.js 16',
      'TypeScript',
      'PostgreSQL',
      'Drizzle',
      'Better Auth',
      'Tailwind CSS',
    ],
    images: [
      {
        thumb: '/pitstop-pro/landing_1-thumb.webp',
        full: '/pitstop-pro/landing_1.webp',
        alt: 'PitStop Pro public storefront landing page for a tire shop',
      },
      {
        thumb: '/pitstop-pro/dashboard_1-thumb.webp',
        full: '/pitstop-pro/dashboard_1.webp',
        alt: 'PitStop Pro dashboard with the day’s appointments',
      },
      {
        thumb: '/pitstop-pro/landing_2-thumb.webp',
        full: '/pitstop-pro/landing_2.webp',
        alt: 'PitStop Pro storefront services and booking section',
      },
      {
        thumb: '/pitstop-pro/dashboard_2-thumb.webp',
        full: '/pitstop-pro/dashboard_2.webp',
        alt: 'PitStop Pro billing and parts inventory view',
      },
    ],
  },
  {
    id: 2,
    title: 'MAQUIN Engineering Services',
    link: null,
    linkNote: 'Internal system, available on request',
    highlight:
      'Materials move between warehouses and job sites on an append-only ledger, so every delivery stays traceable to where it ended up.',
    description:
      'The internal system a construction and engineering firm runs on. Engineers file daily site reports from the field, the office tracks project budgets against actual spend, and expenses and purchase orders move through a multi-step approval chain before payment.',
    techs: [
      'Next.js 16',
      'TypeScript',
      'Neon Postgres',
      'Drizzle',
      'Better Auth',
      'Cloudflare R2',
      'Resend',
      'Tailwind CSS',
    ],
    images: [
      {
        thumb: '/maquin/dashboard-thumb.webp',
        full: '/maquin/dashboard.webp',
        alt: 'MAQUIN dashboard showing active projects and spend against budget',
      },
      {
        thumb: '/maquin/projects-thumb.webp',
        full: '/maquin/projects.webp',
        alt: 'MAQUIN project list with budget tracked against actual cost',
      },
      {
        thumb: '/maquin/inventory-thumb.webp',
        full: '/maquin/inventory.webp',
        alt: 'MAQUIN materials inventory ledger across warehouses and job sites',
      },
      {
        thumb: '/maquin/expenses-thumb.webp',
        full: '/maquin/expenses.webp',
        alt: 'MAQUIN expense and purchase order approval queue',
      },
    ],
  },
  {
    id: 3,
    title: 'MTECH',
    link: 'https://mtechph.com',
    highlight:
      'Content lives in the CMS and layout lives in code, so the team edits freely and every page stays on-template.',
    description:
      'Company site for a building security integrator, covering access control, cameras, turnstiles and the product catalog behind them. Every heading, figure and spec is editable by the team, with media handled through Cloudinary. It replaced the company’s previous WordPress site.',
    techs: [
      'Next.js 16',
      'Payload CMS',
      'PostgreSQL',
      'Cloudinary',
      'Resend',
      'Tailwind CSS',
    ],
    images: [
      {
        thumb: '/mtech/home-thumb.webp',
        full: '/mtech/home.webp',
        alt: 'MTECH marketing home page for a building security integrator',
      },
      {
        thumb: '/mtech/solutions-thumb.webp',
        full: '/mtech/solutions.webp',
        alt: 'MTECH solutions page covering access control and cameras',
      },
      {
        thumb: '/mtech/products-thumb.webp',
        full: '/mtech/products.webp',
        alt: 'MTECH product catalog index',
      },
      {
        thumb: '/mtech/ubio-alpeta-thumb.webp',
        full: '/mtech/ubio-alpeta.webp',
        alt: 'MTECH product page with specs that are editable in the CMS',
      },
    ],
  },
  {
    id: 4,
    title: 'Gentry',
    link: 'https://gentryph.com',
    highlight:
      'Public listings and broker deal flow share one database across separate schemas, each with its own ORM and its own isolated tables.',
    description:
      'A marketplace for golf and country club shares in the Philippines. The public side lists 55 clubs filterable by region and price. Behind authentication, brokers manage clients and listings and pair sellers with buyers through to the paperwork.',
    techs: [
      'Next.js 16',
      'Payload CMS',
      'Prisma',
      'Neon Postgres',
      'Tailwind CSS',
    ],
    images: [
      {
        thumb: '/gentry/home-thumb.webp',
        full: '/gentry/home.webp',
        alt: 'Gentry marketplace home page for golf club shares',
      },
      {
        thumb: '/gentry/clubs-thumb.webp',
        full: '/gentry/clubs.webp',
        alt: 'Gentry club directory filtered by region and price',
      },
      {
        thumb: '/gentry/tournaments-thumb.webp',
        full: '/gentry/tournaments.webp',
        alt: 'Gentry tournaments listing page',
      },
      {
        thumb: '/gentry/about-thumb.webp',
        full: '/gentry/about.webp',
        alt: 'Gentry about page explaining the brokerage',
      },
    ],
  },
];
