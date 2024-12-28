/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear',
        bounce: 'bounce 1s',
        pulse: 'pulse 2s',
        flash: 'flash 1.5s',
        swing: 'swing 1s',
        jello: 'jello 1s',
        flip: 'flip 1s',
        wobble: 'wobble 1s',
        rubberBand: 'rubberBand 1s',
      },
      keyframes: {
        flash: {
          '0%, 50%, 100%': { opacity: 1 },
          '25%, 75%': { opacity: 0 },
        },
        swing: {
          '20%': { transform: 'rotate(15deg)' },
          '40%': { transform: 'rotate(-10deg)' },
          '60%': { transform: 'rotate(5deg)' },
          '80%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        jello: {
          '0%, 100%': { transform: 'scale(1, 1)' },
          '25%': { transform: 'scale(0.95, 1.05)' },
          '50%': { transform: 'scale(1.05, 0.95)' },
          '75%': { transform: 'scale(0.95, 1.05)' },
        },
        flip: {
          '0%, 100%': { transform: 'rotateY(0)' },
          '50%': { transform: 'rotateY(180deg)' },
        },
        wobble: {
          '0%': { transform: 'translateX(0%)' },
          '15%': { transform: 'translateX(-25%)' },
          '30%': { transform: 'translateX(20%)' },
          '45%': { transform: 'translateX(-15%)' },
          '60%': { transform: 'translateX(10%)' },
          '75%': { transform: 'translateX(-5%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        rubberBand: {
          '0%, 100%': { transform: 'scale3d(1, 1, 1)' },
          '30%': { transform: 'scale3d(1.25, 0.75, 1)' },
          '40%': { transform: 'scale3d(0.75, 1.25, 1)' },
          '50%': { transform: 'scale3d(1.15, 0.85, 1)' },
          '65%': { transform: 'scale3d(0.95, 1.05, 1)' },
          '75%': { transform: 'scale3d(1.05, 0.95, 1)' },
        },
      },
    },
  },
  plugins: [],
}
