const { resolve } = require('../utils');

module.exports = [
  {
    test: /\.scss$/,
    include: [resolve('src')],
    use: [
      'style-loader',
      {
        loader:'typings-for-css-modules-loader',
        options: {
          modules: true,
          namedExport: true,
          camelCase: true,
          sass: true
        }

      },
      {
        loader:'sass-loader',
        options: {
          includePaths: [resolve('src/styles')]
        }
      }
      
    ]
  },
  {
    test: /\.less$/,
    include: [resolve('node_modules')],
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true,
        }
      }
    ]
  }
]