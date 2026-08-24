export const profile = {
  name: 'Karl Christoper Cusi',
  role: 'Full Stack Developer',
  location: 'Philippines',
  // Sharpened from "I build user-friendly web applications", which described every
  // developer alive. This names the two things the work history actually shows.
  pitch:
    'I build the internal systems companies run on day to day, and audit the smart contracts behind Web3 products.',
  email: 'kcgcusi@gmail.com',
  site: 'https://kcgcusi.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/karl-christoper-cusi-856371209/',
    github: 'https://github.com/kgcusi',
    resume: '/resume.html',
  },
  // Recruiters scan for this. Flip to false when you stop taking work.
  availability: {
    open: true,
    label: 'Open to new work',
  },
} as const;
