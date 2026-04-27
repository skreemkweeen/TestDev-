import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void:     '#08080A',
        obsidian: '#111114',
        graphite: '#1C1C21',
        dim:      '#2E2E35',
        smoke:    '#4A4A54',
        ivory:    '#F7F3EC',
        cream:    '#EDE7DA',
        linen:    '#DDD6C8',
        parchment:'#C8C0AE',
        gold: {
          bright:  '#D4AF6E',
          DEFAULT: '#C09A58',
          muted:   '#8A6D3B',
          dim:     '#3D2F18',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans:  ['var(--font-sans)',  'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        caps:   '0.15em',
        wider:  '0.12em',
        widest: '0.2em',
      },
      lineHeight: {
        tight:   '1.1',
        snug:    '1.25',
        relaxed: '1.7',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-pulse': {
          '0%, 100%': { opacity: '1',   transform: 'scaleY(1)' },
          '50%':      { opacity: '0.3', transform: 'scaleY(0.6)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee:       'marquee 32s linear infinite',
        'scroll-pulse':'scroll-pulse 2.2s ease-in-out infinite',
        'fade-up':     'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },
  plugins: [],
}

export default config
