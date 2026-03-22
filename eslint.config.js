import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        // Browser globals
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        localStorage: "readonly",
        fetch: "readonly",
        FormData: "readonly",
        URL: "readonly",
        URLSearchParams: "readonly",
        alert: "readonly",
        confirm: "readonly",
        FileReader: "readonly",
        IntersectionObserver: "readonly",
        MutationObserver: "readonly",
        ResizeObserver: "readonly",
        // React JSX transform (React 17+)
        React: "readonly",
      },
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "no-console": "warn",
      "no-undef": "error",
      "no-empty": ["error", { allowEmptyCatch: true }],
    },
  },
  prettierConfig,
];
