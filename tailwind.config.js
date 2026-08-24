/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#DFEBF6',
        surface: '#FFFFFF',

        // Text roles. Contrast ratios measured against #FFFFFF.
        ink: {
          DEFAULT: '#29353C', // 13.4:1
          body: '#44576D', //  7.4:1
          muted: '#546675', //  5.9:1 on white, 4.9:1 on canvas: passes on both surfaces
        },

        // #AAC7D8 is 1.75:1 on white: decorative only, never text on a light surface.
        accent: {
          DEFAULT: '#AAC7D8',
          ink: '#3F6B87', //  5.7:1  the accent when it has to be read
          wash: '#EEF4F9',
        },

        line: {
          DEFAULT: '#E4EBF2',
          strong: '#CBD8E4',
        },
      },
      fontFamily: {
        sans: ['"Inter var"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.08em' }],
        eyebrow: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.14em' }],
      },
      boxShadow: {
        card: '0 1px 2px rgba(41,53,60,0.04), 0 10px 30px -18px rgba(41,53,60,0.28)',
        lift: '0 2px 6px rgba(41,53,60,0.06), 0 22px 48px -22px rgba(41,53,60,0.36)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
