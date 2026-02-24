import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Stitch design tokens ──────────────────────────────
        primary:                '#1D4ED8',
        'primary-hover':        '#1E40AF',
        'background-light':     '#F8FAFC',
        'background-dark':      '#0F172A',
        'surface-light':        '#FFFFFF',
        'surface-dark':         '#1E293B',
        'text-light':           '#1F2937',
        'text-dark':            '#F3F4F6',
        'secondary-text-light': '#4B5563',
        'secondary-text-dark':  '#9CA3AF',
      },
      boxShadow: {
        soft:          '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        glow:          '0 0 15px rgba(29, 78, 216, 0.3)',
        card:          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'glass-light': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
