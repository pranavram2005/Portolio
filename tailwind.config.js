/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        // Parchment design system (ported from portfolio1)
        serif: ['Cormorant Garamond', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        hand: ['Caveat', 'Comic Sans MS', 'cursive'],
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#010103',
          200: '#0E0E10',
          300: '#1C1C21',
          500: '#3A3A49',
          600: '#1A1A1A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
        // Deep-navy "room" palette
        navy: {
          900: '#050713',
          800: '#070B1C',
          700: '#0B1026',
          600: '#111833',
          500: '#1B2447',
        },
        // Parchment design system (ported from portfolio1)
        ink: {
          DEFAULT: '#14202b',
          2: '#0e1720',
          soft: '#1b2b39',
        },
        parch: {
          DEFAULT: '#f3eee3',
          2: '#ece4d4',
          panel: '#f8f4ec',
        },
        brass: {
          DEFAULT: '#b08540',
          lo: '#8f6a2c',
        },
        tx: {
          DEFAULT: '#20211d',
          dim: '#6a6459',
          ink: '#eae3d4',
          inkdim: '#9aa7b1',
        },
        // Per-section accents
        accent: {
          indigo: '#5B5BF6',
          cyan: '#4FD6E3',
          violet: '#8B6CF0',
          blue: '#3B6DF5',
          amber: '#F0A63C',
          sky: '#2f9fb8',
          coral: '#e2725b',
          mint: '#4bbf8f',
        },
      },
      backgroundImage: {
        terminal: "url('assets/terminal.png')",
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-28px) translateX(14px)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 92%, 100%': { opacity: '1' },
          '96%': { opacity: '0.2' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
        scrollHint: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '35%': { opacity: '1' },
          '100%': { transform: 'translateY(14px)', opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'scroll-hint': 'scrollHint 1.8s ease-in-out infinite',
        float: 'float 9s ease-in-out infinite',
        bob: 'bob 3.2s ease-in-out infinite',
        blink: 'blink 3.4s infinite',
        'spin-slow': 'spin 22s linear infinite',
      },
    },
  },
  plugins: [],
};
