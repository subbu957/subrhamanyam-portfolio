/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#070913',
          card: '#0D1122',
          surface: '#12172D',
          border: 'rgba(255, 255, 255, 0.12)',
        },
        violet: {
          DEFAULT: '#818CF8',
          dim: '#6366F1',
          glow: '#4F46E5',
          light: '#C7D2FE',
        },
        azure: {
          DEFAULT: '#38BDF8',
          dim: '#0284C7',
          cyan: '#06B6D4',
        },
        bloom: '#E0E7FF',
        emerald: {
          DEFAULT: '#10B981',
          light: '#34D399',
        },
      },
      fontFamily: {
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out infinite 2s',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.75', transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        glow: '0 0 50px -10px rgba(99, 102, 241, 0.35)',
        'glow-cyan': '0 0 50px -10px rgba(6, 182, 212, 0.35)',
        'glow-card': '0 10px 40px -15px rgba(0, 0, 0, 0.7), 0 0 20px -5px rgba(99, 102, 241, 0.15)',
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
}
