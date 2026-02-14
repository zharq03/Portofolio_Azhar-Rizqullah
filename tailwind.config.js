/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  // ← penting! pakai class .dark untuk toggle
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warna light mode (default tanpa .dark)
        'bg-light': '#dddddd',
        'text-light': '#111827',
        'card-light': '#e6e6e6',

        // Warna dark mode (dipakai dengan dark:)
        'bg-dark': '#0f0f0f',
        'text-dark': '#e0e0e0',
        'card-dark': '#1a1a1a',
        'accent-red': '#ef4444',  // tetap merah di kedua mode
      },
    },
  },
  plugins: [],
}