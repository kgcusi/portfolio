export interface Project {
  id: number;
  title: string;
  link: string;
  description: string;
  techs: string[];
  images: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'PitStop Pro',
    link: 'https://pitstoppro.vercel.app',
    description:
      'Shop software for tire and auto service centers. It covers the whole day: booking the appointment, logging what was done to the car, billing it, and pulling the parts back out of stock at the price they were actually bought for. Each shop gets its own storefront page and its own data, and one deployment runs all of them.',
    techs: [
      'Next.js 16',
      'TypeScript',
      'PostgreSQL',
      'Drizzle',
      'Better Auth',
      'Tailwind CSS'
    ],
    images: [
      '/pitstop-pro/landing_1.png',
      '/pitstop-pro/dashboard_1.png',
      '/pitstop-pro/landing_2.png',
      '/pitstop-pro/dashboard_2.png'
    ]
  },
  {
    id: 2,
    title: 'MAQUIN Engineering Services',
    link: '#',
    description:
      'The internal system a construction and engineering firm runs on. Engineers file daily site reports from the field, the office tracks budgets against what was actually spent, and expenses and purchase orders go through an approval chain before anyone pays. Materials move between warehouses and job sites on an append-only ledger, so a delivery can always be traced to where it ended up.',
    techs: [
      'Next.js 16',
      'TypeScript',
      'Neon Postgres',
      'Drizzle',
      'Better Auth',
      'Cloudflare R2',
      'Resend',
      'Tailwind CSS'
    ],
    images: [
      '/maquin/dashboard.png',
      '/maquin/projects.png',
      '/maquin/inventory.png',
      '/maquin/expenses.png'
    ]
  },
  {
    id: 3,
    title: 'MTECH',
    link: 'https://mtechph.com',
    description:
      "Company site for a building security integrator, covering access control, cameras, turnstiles, and the product catalog behind them. Every heading, figure and spec is editable in the CMS, but the page structure lives in code, so the layout can't be broken from the admin. It replaced a WordPress site that never got past one page of the theme's demo content.",
    techs: [
      'Next.js 16',
      'Payload CMS',
      'PostgreSQL',
      'Cloudinary',
      'Resend',
      'Tailwind CSS'
    ],
    images: [
      '/mtech/home.png',
      '/mtech/solutions.png',
      '/mtech/products.png',
      '/mtech/ubio-alpeta.png'
    ]
  },
  {
    id: 4,
    title: 'Gentry',
    link: 'https://gentryph.com',
    description:
      "A marketplace for golf and country club shares in the Philippines. The public side lists 55 clubs you can filter by region and price; behind a login, the brokers work the actual deals: clients, listings, and pairing a seller with a buyer through to the paperwork. Both halves share one database but sit in separate schemas, each with its own ORM, so neither can touch the other's tables.",
    techs: [
      'Next.js 16',
      'Payload CMS',
      'Prisma',
      'Neon Postgres',
      'Tailwind CSS'
    ],
    images: [
      '/gentry/home.png',
      '/gentry/clubs.png',
      '/gentry/tournaments.png',
      '/gentry/about.png'
    ]
  }
];
