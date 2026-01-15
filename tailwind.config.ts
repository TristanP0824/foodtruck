import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neon RGB palette for energetic design
        neon: {
          cyan: '#00f0ff',
          pink: '#ff00ff',
          lime: '#39ff14',
        },
        // Dark backgrounds
        dark: {
          bg: '#0a0a0a',
          card: '#1a1a1a',
          footer: '#000000',
        },
        // Keep existing colors for backward compatibility
        primary: {
          DEFAULT: '#FF6B35',
          dark: '#E8582A',
          light: '#FF8F5C',
        },
        secondary: {
          DEFAULT: '#2D3142',
          dark: '#1F2230',
          light: '#4F5468',
        },
        accent: {
          DEFAULT: '#FFD23F',
          dark: '#E6BD39',
          light: '#FFE070',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(135deg, #00f0ff 0%, #ff00ff 100%)',
        'gradient-neon-hover':
          'linear-gradient(135deg, #00d4e0 0%, #e600e6 100%)',
        'gradient-neon-reverse':
          'linear-gradient(135deg, #ff00ff 0%, #00f0ff 100%)',
        'gradient-hero':
          'linear-gradient(135deg, rgba(0,240,255,0.2) 0%, rgba(255,0,255,0.2) 100%)',
      },
      backdropBlur: {
        glass: '12px',
        'glass-heavy': '20px',
      },
      boxShadow: {
        'glow-cyan':
          '0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3)',
        'glow-pink':
          '0 0 10px rgba(255, 0, 255, 0.5), 0 0 20px rgba(255, 0, 255, 0.3)',
        'glow-neon':
          '0 0 10px rgba(0, 240, 255, 0.4), 0 0 20px rgba(255, 0, 255, 0.3)',
        'glow-neon-lg':
          '0 0 15px rgba(0, 240, 255, 0.5), 0 0 30px rgba(255, 0, 255, 0.4)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow:
              '0 0 10px rgba(0, 240, 255, 0.4), 0 0 20px rgba(255, 0, 255, 0.3)',
          },
          '50%': {
            boxShadow:
              '0 0 20px rgba(0, 240, 255, 0.6), 0 0 40px rgba(255, 0, 255, 0.5)',
          },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'scale-in': 'scale-in 0.4s ease-out',
      },
      borderRadius: {
        neon: '12px',
        'neon-lg': '20px',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.glass': {
          'background-color': 'rgba(10, 10, 10, 0.8)',
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
        },
        '.glass-heavy': {
          'background-color': 'rgba(10, 10, 10, 0.95)',
          'backdrop-filter': 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
        },
      });
    }),
  ],
};

export default config;
