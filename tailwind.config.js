/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        astra: {
          primary: '#7C3AED', // Vibrant Purple
          secondary: '#0EA5E9', // Blue
          accent: '#F59E42', // Orange
          glass: '#E0F2FE', // Glassy Blue
          black: '#18181B', // True Black
          white: '#FFFFFF',
          success: '#10B981', // Green
          warning: '#F59E0B', // Amber
          danger: '#EF4444', // Red
        },
      },
      boxShadow: {
        'soft': '0 4px 24px 0 rgba(60,72,88,0.08)',
        'glass': '0 8px 32px 0 rgba(14,165,233,0.08)',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'voice-trigger': 'voice-trigger 0.5s ease-in-out',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        'voice-trigger': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slideUp': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
    },
  },
  plugins: [],
} 