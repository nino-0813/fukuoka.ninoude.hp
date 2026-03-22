import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif-jp': ['var(--font-zen-old-mincho)', 'serif'],
        'en-serif': ['var(--font-cormorant)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
