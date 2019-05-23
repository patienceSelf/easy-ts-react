const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = [
  new CleanWebpackPlugin({

  }),
  new HtmlWebpackPlugin({
    template: 'build/tpl/index.html'
  }),

  
]