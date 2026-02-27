import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F9F9F7',
        charcoal: '#1A1A1A',
        olive: '#7A7A62',
        slate: '#5F6B72',
        tan: '#A58C73'
      },
      letterSpacing: {
        editorial: '0.16em'
      }
    }
  },
  plugins: []
};

export default config;