/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        main: "1100px",
      },
      height: {
        textarea: "600px",
      },
      fontFamily: {
        Pretendard: ["Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
};
