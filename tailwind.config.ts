import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette - Limestone & Shadow
        'travertine-cream': '#F5F1E8',
        'warm-white': '#FDFBF7',
        'charcoal': '#2C2C2C',
        'slate-gray': '#5A5A5A',

        // Accent Palette
        'tuscan-terracotta': '#C7705F',
        'aged-bronze': '#6B5A3D',
        'olive-green': '#717C5E',
        'deep-navy': '#1A2B3D',
      },
      fontFamily: {
        'cormorant': ['var(--font-cormorant)', 'Georgia', 'serif'],
        'inter': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'italiana': ['var(--font-italiana)', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'display-lg': ['60px', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'display-md': ['48px', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'heading-xl': ['42px', { lineHeight: '1.3', letterSpacing: '0.01em' }],
        'heading-lg': ['36px', { lineHeight: '1.3', letterSpacing: '0.01em' }],
        'heading-md': ['30px', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        'heading-sm': ['24px', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body-md': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out',
        'slide-up': 'slideUp 1s ease-out',
        'scale-in': 'scaleIn 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'luxury': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'luxury-lg': '0 30px 80px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}

export default config
