/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React files ka path
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#0d131a",       
        cardDark: "#131c26",     
        neonCyan: "#00f2fe",     
        neonPurple: "#9b51e0",   
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0, 0.6) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}