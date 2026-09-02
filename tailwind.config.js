/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040E1C',
          900: '#071A33',
          800: '#0E2A50',
          700: '#173B6C',
          600: '#224F8B',
        },
        electric: {
          500: '#1677FF',
          600: '#0958D9',
          400: '#4096FF',
          300: '#69B1FF',
          cyan: '#00D2FF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(22, 119, 255, 0.4)' },
          '100%': { boxShadow: '0 0 25px rgba(22, 119, 255, 0.8), 0 0 35px rgba(0, 210, 255, 0.5)' },
        }
      }
    },
  },
  plugins: [],
}
