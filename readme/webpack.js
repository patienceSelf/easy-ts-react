// webpack中使用到的插件
/**
 * 1. extract-text-webpack-plugin:将入口中引入的css文件，都打包到独立的css文件中，而不是内嵌在js包文件中
 *    目的：用来提取css文件，并希望使用hash
 *    这个插件的3.0的版本不支持webpack4.0, 会有一个警告。需要指定安装extract-text-webpack-plugin的4.0beta版，但是依然不支持hash,
 *    采用mini-css-extract-plugin
 * 
 * 2. html-webpack-plugin: 根据一个html模版，生成一个自动引用打包后的js文件的html文件
 * 
 * 3. hot-module-replacement-plugin: 动态跟新文件变更的插件
 * 
 * 4. 
 */



 /**
  * 1. webpack 优化系列--slc。 webpack版本使用的是3.12.0
  * 开发环境打包总耗时:38-54s
  *   还有就是分析模块依赖耗时较久
  *   additional asset processing：比较耗时
  *   asset optimization
  * 分析：
  *   sit环境下打包出来的app.js:1.2M
  *                   common.bundle.js: 920kb,将近1M
  *   
  *   1. 先采用 webpack-bundle-analyzer。这个分析工具来分析包的大小
  *     
  */



  /**
   * 问题
   * clean-webpack-plugin only accepts an options object
   * 升级webpack4后，webpack.optize.commonsChunkPlugin 被移除了，使用splitCodePlugin代替
   * module的loaders属性移除，换成了rules
   * TypeError: compilation.mainTemplate.applyPluginsWaterfall is not a function： html-webpack-plugin的2.7的版本不匹配webpack4.0, 更新html-webpack-plugin到最新版本
   * extract-text-webpack-plugin报错，升级extract-text-webpack-plugin
   * webpack-parallel-uglify-plugin: 中的compress的很多参数不能使用
   * 
   * 经过上面的打包优化后， 时间从39s降低到10s
   * 包的大小在经过gzip压缩后由最初的900多k,降低到400多k, 又降低到200多k, 

   */


   /**
    * 总结：
    * 在production模式下：
    *   1.减少主包的大小。
    *     方法：去掉只在开发阶段运行的代码（怎么去）
    *          tree-shaking: 通过extract-text-webpack-plugin提取css到单独的文件中，webpack4.0通过mini-css-extract-plugin
    *          代码压缩： uglifyJS,webpack4.0可通过webpack-pararllel-uglify-plugin来做。（原来的uglifyJS插件是集成在webpack里的），现在是一个剥离的单独的插件.压缩有很多选项，去掉注释，空格
    *          公共代码提取。通过webpack内置的commonsChunkPlugin。现在webpack4.0通过splitCodePlugin, 为了提升打包速度，采用dllPlugin和dllReferencePlugin
    *          
    *   2. 提升打包构建速度
    *      利用dllPlugin,dllReferencePlugin代替commonsChunkPlugin
    *      利用webpack-parall-uglify-plugin代替uglifyJS插件
    *      利用resolve alias设置别名，优化webpack的搜索路径，利用exclude去除不需要遍历的组件。比如babel-loader把node_modules去掉
    */