const OFF = 0
const WARNING = 1
const ERROR = 2

const SRC_DIRS = ['assets', 'components', 'config', 'consts', 'modules', 'pages', 'services', 'store', 'themes', 'utils']

module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  globals: {
    document: true,
    window: true,
  },
  plugins: ['react-hooks'],
  rules: {
    'arrow-parens': [ERROR, 'always'],
    'global-require': [OFF],
    'import/no-extraneous-dependencies': [ERROR, { devDependencies: ['**/*.stories.js', 'webpack.config.js'] }],
    'import/no-unresolved': [ERROR, { ignore: SRC_DIRS }],
    'import/prefer-default-export': [OFF],
    'jsx-a11y/click-events-have-key-events': [WARNING],
    'object-curly-newline': [OFF],
    'padding-line-between-statements': [
      ERROR,
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'react-hooks/rules-of-hooks': [ERROR],
    'react/destructuring-assignment': [OFF],
    'react/jsx-filename-extension': [ERROR, { extensions: ['.js'] }],
    'react/no-did-update-set-state': [WARNING],
    'react/prop-types': [OFF],
    'react/require-default-props': [OFF],
    camelcase: [WARNING],
    curly: [ERROR, 'all'],
    eqeqeq: [WARNING],
    radix: [OFF],
    semi: [ERROR, 'never'],

    // FIXME: remove
    'max-len': [WARNING],
    'react/button-has-type': [WARNING],
    'react/no-find-dom-node': [WARNING],
  },
}
