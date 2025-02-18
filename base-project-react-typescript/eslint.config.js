import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-config-prettier";
import pluginImport from "eslint-plugin-import";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import { fixupPluginRules } from "@eslint/compat";
import tsParser from "@typescript-eslint/parser";
// import unusedImports from "eslint-plugin-unused-imports";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{ts,tsx}"] },
  {
    ignores: [
      "**/node_modules/**",
      "dist/**/*",
      "coverage/**",
      "*.config.js",
      "*.config.ts",
      "src/generated/**",
    ],
  },
  {
    languageOptions: { globals: globals.browser, parser: tsParser, sourceType: "module" },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "unused-imports": unusedImports,
      "react-hooks": pluginReactHooks,
      import: pluginImport,
      "jsx-a11y": fixupPluginRules(jsxA11Y),
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "react/react-in-jsx-scope": "off",
      "import/first": "warn",
      "import/newline-after-import": "warn",
      "import/no-duplicates": "warn",
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "no-trailing-spaces": "warn",
      "no-multi-spaces": "warn",
      "no-multiple-empty-lines": "warn",
      "no-console": "warn",
      "no-lonely-if": "warn",
      "no-var": "warn",
      "no-continue": "warn",
      "vars-on-top": "warn",
      "no-use-before-define": ["warn", { variables: true }],
      "jsx-a11y/label-has-associated-control": "off",
    },
  },
  eslintPluginPrettierRecommended,
];
