import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "next"],
    rules: {
      "react/no-unnecessary-usememo": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "react/no-unescaped-entities": "off",
    },
  }),
];

export default eslintConfig;
