module.exports = {
  parserOptions: {
    ecmaVersion: 9,
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended','prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  rules: {
    '@typescipt-eslint/interface-name-prefix': ['always'],
    'no-underscore-dangle': 'error',
  },
};
