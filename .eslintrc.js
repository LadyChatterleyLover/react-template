module.exports = {
  root: true,
  extends: ['alloy', 'alloy/react'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    semi: 0,
    'no-unused-vars': 1,
  },
  parser: '@typescript-eslint/parser',
}
