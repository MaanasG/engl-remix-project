// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this matches your project's structure
  ],
  theme: {
    extend: {
      keyframes: {
        flashColor: {
          '0%, 100%': { color: 'white' },
          '33%': { color: 'red' },
          '66%': { color: 'blue' },
        },
      },
      animation: {
        flashColor: 'flashColor 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
