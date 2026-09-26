import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

// Import Next.js ESLint configs (CommonJS)
const nextCoreWebVitals = require("eslint-config-next/core-web-vitals");
const nextTypeScript = require("eslint-config-next/typescript");

// Convert to flat config format
const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    rules: {
      "@next/next/no-document-import-in-page": "off",
      "@next/next/no-img-element": "off",
      "@next/next/no-script-tags-in-head": "off",
      // These files use useEffect to sync with external systems (DOM, localStorage, animation frames)
      // which is the documented use case for effects. Downgrade to warning.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
];

export default eslintConfig;
