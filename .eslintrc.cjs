module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "require-explicit-generics",
    "@typescript-eslint",
    "filename-rules",
    "import",
    "prefer-arrow-functions",
    "simple-import-sort",
    "react-hooks",
    "react-perf",
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "require-explicit-generics/require-explicit-generics": [
      "error",
      // List your functions here
      ["useImmer"],
    ],
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/no-inferrable-types": [
      "error",
      { ignoreParameters: false, ignoreProperties: false },
    ],
    "@typescript-eslint/typedef": "error",
    "react/prefer-stateless-function": "error",
    "react/button-has-type": "error",
    "react/no-unused-prop-types": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-no-script-url": "error",
    "react/no-children-prop": "error",
    "react/no-danger": "error",
    "react/no-danger-with-children": "error",
    "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
    "react/jsx-fragments": "error",
    "react/destructuring-assignment": [
      "error",
      "always",
      { destructureInSignature: "always" },
    ],
    "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],
    "react/jsx-max-depth": ["error", { max: 6 }],
    "react/function-component-definition": [
      "warn",
      { namedComponents: "arrow-function" },
    ],
    "react/jsx-key": [
      "error",
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    "react/jsx-no-useless-fragment": "warn",
    "react/jsx-curly-brace-presence": "warn",
    "react/no-typos": "warn",
    "react/display-name": "warn",
    "react/self-closing-comp": "warn",
    "react/jsx-sort-props": "warn",
    "react/react-in-jsx-scope": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/prop-types": "off",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "default",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "variable",
        // Specify PascalCase for React components
        format: ["PascalCase", "camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "property",
        format: null,
        leadingUnderscore: "allow",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    "filename-rules/match": [
      2,
      {
        ".ts": "camelcase",
        ".tsx": "pascalcase",
        ".css": "camelcase",
      },
    ],
    "import/no-default-export": "error",
    "prefer-arrow-functions/prefer-arrow-functions": [
      "warn",
      {
        classPropertiesAllowed: true,
        disallowPrototype: true,
        returnStyle: "unchanged",
      },
    ],
    "arrow-body-style": "error",
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: true,
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "react-perf/jsx-no-new-array-as-prop": "warn",
    "react-perf/jsx-no-new-object-as-prop": "off",
    "react-perf/jsx-no-jsx-as-prop": "warn",
    "no-console": "warn",
    "no-restricted-imports": [
      "error",
      {
        patterns: ["@mui/*/*/*"],
      },
    ]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts"],
      },
    },
  },
};
