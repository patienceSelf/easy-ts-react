const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { resolveAssets } = require('./utils');

module.exports = [
  new CleanWebpackPlugin({

  }),
  new HtmlWebpackPlugin({
    template: 'build/tpl/index.html'
  }),

  new MiniCssExtractPlugin({
    filename: resolveAssets('css/[name].css')
  })
]