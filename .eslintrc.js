module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-trailing-spaces': 'off',
    'space-before-function-paren': 'off',
    'comma-dangle': 'off',
    'no-tabs': 'off',
    indent: 'off',
    'no-mixed-spaces-and-tabs': 'off',
    semi: 'off',
    'eol-last': 'off',
    'object-curly-newline': 'off',
    'object-property-newline': 'off',
    'object-curly-spacing': 'off'
  }
}
