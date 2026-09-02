/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#05060B',
          panel: '#0C0E1A',
          raised: '#12142400',
        },
        ink: {
          DEFAULT: '#FFFFFF',
          bright: '#FFFFFF',
          muted: '#FFFFFF', // Pure white for complete clarity
          faint: '#F8FAFC', // Crisp white
        },
        violet: {
          DEFAULT: '#C4B5FD', // Light bright violet
          dim: '#8B5CF6',
        },
        azure: {
          DEFAULT: '#93C5FD', // Light bright azure
          dim: '#3E7BFA',
        },
        bloom: '#E9D5FF',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(139, 92, 246, 0.45)',
      },
    },
  },
  plugins: [],
}
