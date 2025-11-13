/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-pink': '#FF1B6B',
        'dark-blue': '#0EA5E9',
        'dark-purple': '#A855F7',
        'dark-green': '#10B981',
        'dark-yellow': '#FBBF24',
        'dark-orange': '#F97316',
        'dark-bg': '#0F172A',
        'dark-card': '#1E293B',
        'dark-text': '#F1F5F9',
        'gray-text': '#94A3B8',
        'accent-cyan': '#06B6D4',
        'accent-pink': '#EC4899',
      },
      fontFamily: {
        mono: ['Monaco', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}

