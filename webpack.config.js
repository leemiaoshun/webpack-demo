const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 官网的引用方式已经过期最新的 clean-webpack-plugin不能直接引用， 并且传参不支持字符串
const webpak = require('webpack');

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    host: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.NameModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
