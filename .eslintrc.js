module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'sourceType': 'module',
    'ecmaVersion': 'latest',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'indent': [ 
      'error',
      2
    ],
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
};
