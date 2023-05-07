module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      'tsconfig.json',
      'tsconfig.node.json'
    ]
  },
  plugins: [
    'react'
  ],
  rules: {
  },
  settings: {
    react: {
      version: "^18.2.0"
    }
  }
}
