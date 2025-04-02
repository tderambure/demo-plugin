module.exports = {
  languageOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    globals: {
      browser: true,
      node: true,
    },
  },
  rules: {
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-unused-vars': ['warn'],
    'no-console': 'warn',
    'eqeqeq': 'error',
    'no-multi-spaces': ['error', {
      "ignoreEOLComments": true
    }],
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'eol-last': ['error', 'always'],
  },
}
