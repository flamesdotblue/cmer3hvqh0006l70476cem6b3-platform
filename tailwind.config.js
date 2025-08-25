/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        base: {
          50: '#f6f7f9',
          100: '#eef1f5',
          200: '#e4e8ef',
          300: '#d9dee6',
          400: '#c9cfd9',
          500: '#b0b7c4',
        }
      },
      boxShadow: {
        neo: '8px 8px 16px rgba(0,0,0,0.15), -8px -8px 16px rgba(255,255,255,0.9)',
        neoSm: '4px 4px 10px rgba(0,0,0,0.12), -4px -4px 10px rgba(255,255,255,0.8)',
        neoInset: 'inset 6px 6px 12px rgba(0,0,0,0.12), inset -6px -6px 12px rgba(255,255,255,0.9)'
      }
    },
  },
  plugins: [],
};
