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
        // Luminous cyberpunk colors with glow effects
        'cyber-blue': {
          DEFAULT: '#00ffff',
          'glow': '#00ffff',
          'dim': '#00cccc',
          'bright': '#40ffff',
          'atmospheric': 'rgba(0,255,255,0.3)'
        },
        'cyber-pink': {
          DEFAULT: '#ff00ff',
          'glow': '#ff00ff',
          'dim': '#cc00cc',
          'bright': '#ff40ff',
          'atmospheric': 'rgba(255,0,255,0.3)'
        },
        'cyber-green': {
          DEFAULT: '#00ff00',
          'glow': '#00ff00',
          'dim': '#00cc00',
          'bright': '#40ff40',
          'atmospheric': 'rgba(0,255,0,0.3)'
        },
        'cyber-orange': {
          DEFAULT: '#ff6600',
          'glow': '#ff6600',
          'dim': '#cc5200',
          'bright': '#ff8040',
          'atmospheric': 'rgba(255,102,0,0.3)'
        },
        'cyber-bg': '#0a0a0f',
        'cyber-dark': '#1a1a2e',
        'cyber-darker': '#050508'
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-neon': 'pulse-neon 1.5s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'atmospheric-glow': 'atmospheric-glow 4s ease-in-out infinite',
        'neon-flicker': 'neon-flicker 0.5s ease-in-out infinite'
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 10px rgba(0,255,255,0.3), 0 0 20px rgba(0,255,255,0.1)',
            textShadow: '0 0 5px rgba(0,255,255,0.5)'
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(0,255,255,0.6), 0 0 40px rgba(0,255,255,0.2)',
            textShadow: '0 0 10px rgba(0,255,255,0.8)'
          }
        },
        'pulse-neon': {
          '0%, 100%': { 
            opacity: '1',
            filter: 'brightness(1)'
          },
          '50%': { 
            opacity: '0.8',
            filter: 'brightness(1.2)'
          }
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' }
        },
        'atmospheric-glow': {
          '0%, 100%': { 
            opacity: '0.3',
            filter: 'blur(1px)'
          },
          '50%': { 
            opacity: '0.6',
            filter: 'blur(0.5px)'
          }
        },
        'neon-flicker': {
          '0%, 100%': { opacity: '1' },
          '25%': { opacity: '0.8' },
          '50%': { opacity: '0.9' },
          '75%': { opacity: '0.7' }
        }
      },
      boxShadow: {
        'cyber-glow': '0 0 20px rgba(0,255,255,0.5), 0 0 40px rgba(0,255,255,0.2)',
        'cyber-pink-glow': '0 0 20px rgba(255,0,255,0.5), 0 0 40px rgba(255,0,255,0.2)',
        'cyber-green-glow': '0 0 20px rgba(0,255,0,0.5), 0 0 40px rgba(0,255,0,0.2)',
        'cyber-orange-glow': '0 0 20px rgba(255,102,0,0.5), 0 0 40px rgba(255,102,0,0.2)',
        'atmospheric': '0 0 50px rgba(0,255,255,0.1), 0 0 100px rgba(0,255,255,0.05)'
      },
      textShadow: {
        'cyber-glow': '0 0 10px rgba(0,255,255,0.8)',
        'cyber-pink-glow': '0 0 10px rgba(255,0,255,0.8)',
        'cyber-green-glow': '0 0 10px rgba(0,255,0,0.8)',
        'cyber-orange-glow': '0 0 10px rgba(255,102,0,0.8)'
      }
    },
  },
  plugins: [],
}

export default config 