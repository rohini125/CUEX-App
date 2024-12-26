/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./App.tsx", // Add paths to your components
      "./app/**/*.tsx",
      "./app/**/*.{js,ts,jsx,tsx}",
      "./node_modules/nativewind/**/*.js", // Add this line for NativeWind
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  