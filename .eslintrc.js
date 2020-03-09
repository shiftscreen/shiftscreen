module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "import/no-unresolved": "off",
    "no-console": "off",
    "import/prefer-default-export": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
