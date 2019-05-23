const { resolve } = require('./../utils');
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = [
  {
    test: /\.tsx$/,
    use: [
      {
        loader: 'awesome-typescript-loader',
        options: {
          transpileOnly: true,
          useCache: true,
          // cacheDirectory: resolve('.cache-loader'), // 加了下面的插件后，没有作用，是这个缓存loader的问题
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'antd',
                libraryDirectory: 'lib',
                style: true,
              })
            ]
          })
        }
      }
    ]
  }
]