/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--color-bg)',
          card: 'var(--color-card)',
          'card-hover': 'var(--color-card-hover)',
          primary: 'var(--color-primary-text)',
          secondary: 'var(--color-secondary-text)',
          muted: 'var(--color-muted-text)',
          border: 'var(--color-border)',
          accent: 'var(--color-accent)',
          'accent-light': 'var(--color-accent-light)',
          secondaryAccent: 'var(--color-secondary-accent)',
          success: 'var(--color-success)',
          highlight: 'var(--color-highlight)',
          darkPanel: 'var(--color-dark-panel)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'slide-card': '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.02)',
        'slide-card-hover': '0 10px 25px -3px rgba(15, 23, 42, 0.08), 0 4px 10px -2px rgba(15, 23, 42, 0.04)',
      }
    },
  },
  plugins: [],
}

