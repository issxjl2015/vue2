var path = require('path')
var webpack = require('webpack')

module.exports = {
  // 入口文件
  entry: './src/main.js',
  // 输出目录
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  // 模块管理
  module: {
    rules: [
      // .vue
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      // .js
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // .css inline
      // css-loader 是处理css文件中的url()等
      // style-loader 将css插入到页面的style标签
      {
        test: /\.css/,
        loader: 'style-loader!css-loader'
      },
      // .less
      // less-loader 是将less文件编译成css
      // 编译顺序 从右往左
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
      },
      // pic
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    // 用 webpack-2 之类打包工具时, 使用该版本, 需要配置别名,
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
