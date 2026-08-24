export const profile = {
  name: 'Karl Christoper Cusi',
  role: 'Full Stack Developer',
  location: 'Philippines',
  // Names the two things the work history actually shows.
  pitch:
    'I build the internal systems companies run on, and the APIs that connect them to hardware. I also audit Solidity smart contracts.',
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
