/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}' // Note the addition of the `app` directory.
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        main: ['var(--font-poppins)', 'sans-serif'],
        jp: ['var(--font-raleway)', 'sans-serif']
      },
      colors: {
        black: '#211E25',
        purple: {
          50: '#A093C5',
          100: '#9A67EC',
          200: '#9B58AB',
          300: '#6B4EDF',
          400: '#58417C',
          500: '#3C314D'
        },
        gray: {
          50: '#F8F8F8',
          100: '#D8D8D8',
          200: '#C9C9C9',
          300: '#747276'
        },
        beige: {
          50: '#EAE4DD'
        }
      },
      maxWidth: {
        container: '73.25rem' /* 1172px */
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        skew: 'skew .5s forwards',
        wiggle: 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        skew: {
          '100%': { left: '-20%' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-18deg)' },
          '50%': { transform: 'rotate(18deg)' }
        }
      }
    }
  }
}
