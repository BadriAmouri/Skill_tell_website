/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Background images
      backgroundImage: {
        'custom-gradient': 'linear-gradient(45deg, hsla(28, 74%, 62%, 1) 0%, hsla(15, 48%, 48%, 1) 47%, hsla(306, 38%, 11%, 1) 87%)',
      },
      // Colors
      colors: {
        "primitives-colors-conceptual-error": "var(--primitives-colors-conceptual-error)",
        "primitives-colors-conceptual-mid": "var(--primitives-colors-conceptual-mid)",
        "primitives-colors-conceptual-success": "var(--primitives-colors-conceptual-success)",
        "primitives-colors-neutral-200": "var(--primitives-colors-neutral-200)",
        "primitives-colors-neutral-400": "var(--primitives-colors-neutral-400)",
        "primitives-colors-neutral-500": "var(--primitives-colors-neutral-500)",
        "primitives-colors-neutral-600": "var(--primitives-colors-neutral-600)",
        "primitives-colors-neutral-800": "var(--primitives-colors-neutral-800)",
        "tokens-border-disabled": "var(--tokens-border-disabled)",
        "tokens-border-focused": "var(--tokens-border-focused)",
        "tokens-border-primary": "var(--tokens-border-primary)",
        "tokens-buttons-primary-focused": "var(--tokens-buttons-primary-focused)",
        "tokens-buttons-primary-hovered": "var(--tokens-buttons-primary-hovered)",
        "tokens-buttons-primary-pressed": "var(--tokens-buttons-primary-pressed)",
        "tokens-buttons-primary-static-bg": "var(--tokens-buttons-primary-static-bg)",
        "tokens-buttons-secondary-focused": "var(--tokens-buttons-secondary-focused)",
        "tokens-buttons-secondary-hovered": "var(--tokens-buttons-secondary-hovered)",
        "tokens-buttons-secondary-pressed": "var(--tokens-buttons-secondary-pressed)",
        "tokens-buttons-secondary-static-bg": "var(--tokens-buttons-secondary-static-bg)",
        "tokens-surface-background-01": "var(--tokens-surface-background-01)",
        "tokens-surface-background-02": "var(--tokens-surface-background-02)",
        "tokens-text-text-disabled": "var(--tokens-text-text-disabled)",
        "tokens-text-text-primary": "var(--tokens-text-text-primary)",
        "tokens-text-text-secondary": "var(--tokens-text-text-secondary)",
      },
      // Font family
      fontFamily: {
        abc: ["Urbanist", "sans-serif"],
        "body-b1-light": "var(--body-b1-light-font-family)",
      },
      // Animations
      animation: {
        blob: "blob 7s infinite",
      },
      // Keyframes
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
