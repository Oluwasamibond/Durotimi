/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens:{
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1400px',
      },
      colors:{
        sectionColor: 'hsl(209, 100%, 97%)',
        darkBodyColor: 'hsl(216, 100%, 4%)',
        darkBodySectionColor: 'hsl(211, 100%, 12%)', 
        primaryColor: 'hsl(209, 87%, 21%)',
        primaryColorLight: 'hsl(209, 74%, 45%)',
        whiteColor: '#fff',
        textColor: '#DDD',
      },
      fontFamily: {
        signature: ["Great Vibes"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: '30px'
        },
      },
    },
  },
  plugins: [],
};
