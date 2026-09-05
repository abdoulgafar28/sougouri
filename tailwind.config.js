/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#5B4FCF',
        'primary-dark': '#3D33A0',
        'primary-light': '#EEEAFC',
        success: '#18A96A',
        'success-light': '#E2F6EE',
        warning: '#D97B00',
        'warning-light': '#FFF3D6',
        danger: '#D63333',
        'danger-light': '#FDECEC',
        background: '#F4F3FB',
        border: '#E8E5F5',
        text: '#1A1340',
        muted: '#8F87B3',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}