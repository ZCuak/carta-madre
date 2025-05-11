/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF69B4",
        secondary: "#FFB6C1",
        accent: "#FFE4E1",
        softPink: "#FFD1DC",
        lightPink: "#FFE4E1",
        warmPink: "#FFB6C1",
        cream: "#FFF5EE",
        softPurple: "#E6E6FA",
        highlight: "#FF1493",
        deepPink: "#FF1493",
        lightRose: "#FFC0CB",
        darkRose: "#C71585",
        gold: "#FFD700",
        softGold: "#FFE5B4"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        cursive: ['Dancing Script', 'cursive']
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shine': 'shine 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' }
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      backgroundImage: {
        'gradient-shine': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
      }
    },
  },
  plugins: [],
} 