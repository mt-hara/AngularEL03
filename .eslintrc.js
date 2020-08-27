module.exports = {
  extends: ["plugin:@angular-eslint/recommended", "plugin:prettier/recommended"],
  rules: {
    "@angular-eslint/directive-selector": ["error", { type: "attribute", prefix: "app", style: "camelCase" }],
    "@angular-eslint/component-selector": ["error", { type: "element", prefix: "app", style: "kebab-case" }],
  },
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: ["*/tsconfig.json", "./tsconfig.**.json"],
      },
      extends: ["plugin:@typescript-eslint/recommended", "prettier/@typescript-eslint", "plugin:prettier/recommended"],
      plugins: ["@angular-eslint/template", "@typescript-eslint"],
      processor: "@angular-eslint/template/extract-inline-html",
      rules: {
        "@typescript-eslint/explicit-function-return-type": ["off"],
        "@typescript-eslint/no-var-requires": ["warn"],
        "@typescript-eslint/no-inferrable-types": ["off"],
      },
    },
    {
      files: ["*.js"],
      env: {
        es6: true,
        browser: true,
        node: true,
        commonjs: true,
      },
      parser: "babel-eslint",
      extends: ["eslint:recommended", "plugin:prettier/recommended"],
      parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
      },
      rules: {
        "no-unused-vars": "warn",
      },
    },
  ],
};
