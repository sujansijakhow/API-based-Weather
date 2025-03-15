import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",  // Allow `any` type
      "react/react-in-jsx-scope": "off",           // No need for `import React`
      "no-console": "warn",                        // Allow console.log but show a warning
      "react-hooks/exhaustive-deps": "warn",       // Prevent missing dependencies in `useEffect`
    },
  },
];

export default eslintConfig;
