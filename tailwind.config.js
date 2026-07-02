/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14265A",
        royal: "#1A56D6",
        deepblue: "#123FA8",
        tint: "#EDF3FE",
        paper: "#F7F9FE",
        amber: "#F7B32B",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(20,38,90,0.06), 0 12px 32px -12px rgba(20,38,90,0.18)",
        lift: "0 2px 4px rgba(20,38,90,0.08), 0 24px 48px -16px rgba(26,86,214,0.28)",
      },
    },
  },
  plugins: [],
};
