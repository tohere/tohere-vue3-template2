/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 边框
        "border-1": "#252837",
        "border-2": "#1d2129",
        "border-3": "#383c44",
        "border-4": "#636364",
        "border-5": "#D0D1D7",
        "border-6": "#F2F3F5",
        // 文本
        "text-1": "#1d2129",
        "text-2": "#4E5969",
        "text-3": "#A1ABB8",
        "text-4": "#E7E7E7",
        // 填充
        "fill-1": "#4E5969",
        "fill-2": "#C9CDD4",
        "fill-3": "#E5E6EB",
        "fill-4": "#4E5969",
        "fill-5": "#F7F8FA",
      },
    },
  },
  plugins: [],
};
