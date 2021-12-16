module.exports = {
  extends: ['eslint:recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
  global: {
    fetch: true
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'react/function-component-definition': 'off'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './app']],
        extensions: ['.js', '.jsx', '.mdx']
      }
    }
  }
};
