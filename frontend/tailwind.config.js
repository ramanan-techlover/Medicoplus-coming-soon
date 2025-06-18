/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'mp-blue': '#3b82f6',
        'mp-blue-dark': '#1e40af',
        'mp-blue-light': '#60a5fa',
      },
      backdropBlur: {
        glass: '12px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease',
        'fade-in-down': 'fadeInDown 1s ease',
        'gradient-x': 'gradientX 8s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}