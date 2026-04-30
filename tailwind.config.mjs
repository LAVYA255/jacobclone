/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#04234d',
        'navy-dim': '#031835',
        'navy-light': '#07397d',
        ink: '#1c1d1d',
        cream: '#f5f5f0',
        'border-soft': '#e8e8e1',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        serif: ['Cormorant', 'Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Cormorant', 'Cormorant Garamond', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
};
