module.exports = {
  env: {
    'node': true,
    'browser': true,
    'es6': true
  },
  'extends': ['xo-react'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'indent': ['error', 2],
    'semi': ['error', 'never'],
    'curly': ['error', 'multi-line'],
    'node/no-unpublished-require': 0,
    'node/no-unpublished-import': 0,
    'react/jsx-indent': [2, 2],
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    }
  }
}
