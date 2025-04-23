/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'aero-dark': '#0C1322',
        'aero-darker': '#070D18',
        'aero-blue': {
          50: '#E5F2FF',
          100: '#CCE5FF',
          200: '#99CCFF',
          300: '#66B2FF',
          400: '#3399FF',
          500: '#007FFF',
          600: '#0066CC',
          700: '#004C99',
          800: '#003366',
          900: '#001933',
        },
        'aero-accent': {
          300: '#61EFFF',
          400: '#00D9F5',
          500: '#00A9C0',
        },
        'aero-warning': {
          300: '#FFD166',
          400: '#FFC145',
          500: '#FFA500',
        },
        'aero-danger': {
          300: '#FF7C66',
          400: '#FF5C45',
          500: '#FF3A20',
        },
        'aero-success': {
          300: '#70E1C0',
          400: '#39DAA5',
          500: '#0BBC8B',
        },
      },
      fontFamily: {
        'display': ['Oxanium', 'sans-serif'],
        'mono': ['Roboto Mono', 'monospace'],
      },
      boxShadow: {
        'aero': '0 0 15px rgba(0, 127, 255, 0.5)',
        'aero-glow': '0 0 20px rgba(0, 217, 245, 0.5)',
        'aero-warning': '0 0 15px rgba(255, 165, 0, 0.5)',
        'aero-danger': '0 0 15px rgba(255, 58, 32, 0.5)',
      },
      backgroundImage: {
        'radar-grid': 'radial-gradient(circle, rgba(0, 127, 255, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(0, 127, 255, 0.05) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};