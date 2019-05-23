const plugins = require('./plugin');
const { resolve } = require('./utils');
const jsRules = require('./rules/jsRules');
const styleRules = require('./rules/styleRules');

module.exports = {
  mode: 'production',
  entry: {
    app: resolve('src/index.tsx')
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js'
  },
  module: {
    rules: [...jsRules, ...styleRules]
  },

  plugins: [...plugins],

  resolve: {
    extensions: ['.ts', '.tsx','.js','.jsx'],
    alias: {
      "@components": resolve('src/components')
    },
    
  }
}