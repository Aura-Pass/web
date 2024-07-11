import { colors } from './src/styles/colors';
import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        xl: '1366px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: { ...colors },
      fontWeight: {
        semibold: '650',
      },
      fontFamily: {
        sans: ['var(--red-hat)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        login: "url('/backgrounds/login_background.png')",
        'gradient-primary': 'linear-gradient(90deg, #5174A9 0%, #22B2B4 93.5%)',
        'gradient-light': 'linear-gradient(90deg, #62E7DE 0%, #24DBE7 100%)',
        'event-banner-gradient':
          'linear-gradient(270deg, rgba(0, 0, 0, 0.00) 38.4%, rgba(0, 0, 0, 0.60) 57.98%, rgba(0, 0, 0, 0.80) 68.85%, rgba(0, 0, 0, 0.90) 79.77%, #000 98.1%);',
      },
      boxShadow: {
        brand: '0px 5px 10px 0px rgba(73, 187, 187, 0.30)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
