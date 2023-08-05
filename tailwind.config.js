/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: [
  //     "forest",
  //     "winter"
  //   ],
  // }
  daisyui: {
    themes: [
      {
        myDarkTheme: {
          primary: "#0284c7",

          secondary: "#ce0d50",

          accent: "#4f46e5",

          neutral: "#ffff",

          "base-100": "#000",

          "base-200": "#101010",

          info: "#0284c7",

          success: "#16a34a",

          warning: "#eab308",

          error: "#b91c1c"
        }
      },
      {
        myWhiteTheme: {
          primary: "#0284c7",

          secondary: "#ce0d50",

          accent: "#4f46e5",

          neutral: "#ffff",

          "base-100": "#ffff",

          "base-200": "#e3e5e8",

          info: "#0284c7",

          success: "#16a34a",

          warning: "#eab308",

          error: "#dc2626",
        }
      }
    ]
  }
};
