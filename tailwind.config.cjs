/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Mode Palette
        dark: {
          base: '#0B0F14',      // Charcoal Black
          section: '#121826',   // Graphite Gray
          card: '#161B22',      // Dark Slate
          text: '#9CA3AF',      // Muted Gray
          heading: '#E6EDF3',   // Off-White
          border: '#1F2937',    // Subtle Slate
          primary: '#14B8A6',   // Teal Green
          hover: '#2DD4BF',     // Bright Teal
          icon: '#5EEAD4',      // Soft Cyan
        },
        // Light Mode Palette
        light: {
          base: '#F9FAFB',      // Soft White
          section: '#F1F5F9',   // Light Gray
          card: '#FFFFFF',      // White
          text: '#475569',      // Slate Gray
          heading: '#0F172A',   // Near Black
          border: '#E5E7EB',    // Light Border
          primary: '#0D9488',   // Teal Green
          hover: '#0F766E',     // Dark Teal
          icon: '#14B8A6',      // Teal
        },
        // Mapped default for backward compatibility/simplicity
        primary: {
          500: '#14B8A6', // Default to Teal
          600: '#0D9488',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          lg: '1200px',
        },
      },
    },
  },
  plugins: [],
}
