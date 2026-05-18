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
    title: 'Finance Tracker',
    link: 'https://finance-tracker-seven-orpin.vercel.app/testw',
    description:
      'A mobile-first personal finance PWA with transaction management, category-based spending limits with visual warnings, filterable history, and a reports view — all behind JWT authentication and offline support via a service worker.',
    techs: [
      'Next.js',
      'PostgreSQL',
      'JWT',
      'PWA',
      'Service Worker',
      'Tailwind CSS'
    ],
    images: ['/placeholder.svg', '/placeholder.svg']
  },
  {
    id: 2,
    title: 'TireCenter Pro',
    link: '#',
    description:
      'Multi-tenant SaaS platform for automotive tire shops with role-based access control, invoicing, inventory, customer and vehicle management, a public-facing shop page, and a webmaster portal for platform-wide administration.',
    techs: [
      'Next.js 16',
      'TypeScript',
      'PostgreSQL',
      'Neon',
      'Server Actions',
      'Tailwind CSS'
    ],
    images: ['/placeholder.svg', '/placeholder.svg']
  }
];
