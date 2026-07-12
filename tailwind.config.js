/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        savt: {
          green: "#22C55E",
          dark: "#16A34A",
          light: "#F0FDF4",
          ink: "#111827"
        }
      },
      boxShadow: {
        soft: "0 8px 22px rgba(15, 23, 42, 0.055)",
        card: "0 10px 26px rgba(15, 23, 42, 0.06)",
        lift: "0 14px 34px rgba(15, 23, 42, 0.10)",
        button: "0 10px 18px rgba(22, 163, 74, 0.22)",
        nav: "0 -10px 26px rgba(15, 23, 42, 0.08)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};
