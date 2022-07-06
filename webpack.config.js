const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  devServer: {
    // 服务监听构建后的项目路径
    static: {
      directory: resolve(__dirname, 'public'),
      watch: {
        usePolling: false,
      },
    },
    host: "localhost",
    port: 8000,
    open: true,
    hot: true, // 开启HMR
    historyApiFallback: true, // 解决前端路由刷新404问题
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),
  ]
}