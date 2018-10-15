/* eslint indent: [2, 2] */
/* eslint semi: ["error", "never"] */

module.exports = {
  env: {
    'cypress/globals': true,
    node: true,
    browser: true,
    es6: true,
    jest: true
  },
  plugins: ['cypress'],
  extends: ['xo-react'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    indent: ['error', 2],
    semi: ['error', 'never'],
    curly: ['error', 'multi-line'],
    'node/no-unpublished-require': 0,
    'node/no-unpublished-import': 0,
    'react/jsx-indent': [2, 2],
    'capitalized-comments': ['error', 'never', {
      ignorePattern: '^((?!(abc|def)).)*$',
      ignoreInlineComments: true,
      ignoreConsecutiveComments: true
    }]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx'
        ]
      }
    },
    react: {
      version: '15.0'
    }
  },
  globals: {
    page: true,
    browser: true,
    cookiesAccepted: true
  }
}
