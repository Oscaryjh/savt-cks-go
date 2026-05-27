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
        soft: "0 12px 34px rgba(15, 23, 42, 0.07)",
        card: "0 16px 44px rgba(15, 23, 42, 0.08)",
        lift: "0 18px 44px rgba(15, 23, 42, 0.12)",
        button: "0 12px 22px rgba(22, 163, 74, 0.24)",
        nav: "0 -14px 34px rgba(15, 23, 42, 0.10)"
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
