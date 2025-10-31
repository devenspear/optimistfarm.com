/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'rainbow': 'linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080)',
      },
      colors: {
        'brown': {
          800: '#3e2723',
        },
      },
      fontFamily: {
        'whimsical': ['var(--font-bubblegum)', '"Comic Neue"', 'cursive', 'system-ui', 'sans-serif'],
        'story': ['var(--font-baloo)', '"Comic Neue"', 'system-ui', 'sans-serif'],
        'heading': ['var(--font-fredoka)', '"Comic Neue"', 'system-ui', 'sans-serif'],
        'baloo': ['var(--font-baloo)', 'system-ui', 'sans-serif'],
        'bubblegum': ['var(--font-bubblegum)', 'cursive', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'story': ['1.5rem', { lineHeight: '2.25rem', letterSpacing: '0.025em' }],
        'story-lg': ['2rem', { lineHeight: '3rem', letterSpacing: '0.025em' }],
        'story-xl': ['2.5rem', { lineHeight: '3.5rem', letterSpacing: '0.025em' }],
        'heading-child': ['3rem', { lineHeight: '3.5rem', letterSpacing: '0.05em' }],
        'heading-child-lg': ['4rem', { lineHeight: '4.5rem', letterSpacing: '0.05em' }],
        'sub-heading': ['1.75rem', { lineHeight: '2.5rem', letterSpacing: '0.025em' }],
      },
      animation: {
        'bounce-gentle': 'bounce 2s infinite',
        'pulse-gentle': 'pulse 3s infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      }
    },
  },
  plugins: [],
}