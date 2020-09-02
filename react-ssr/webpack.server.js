const path = require('path');
const nodeExternals = require('webpack-node-externals'); // 把原生 node 内置的包 排除在外 不需要打包
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const serverConfig = {
  target: 'node', // 打包完的代码的目标平台
  mode: 'development', // 打包模式 开发的时候 不会压缩代码
  entry: './src/server/index.js', // 入口 顺着哪里打包
  output: { // 打包到哪里去
    filename: 'bundle.js', // 输出文件名
    path: path.resolve(__dirname, 'build'), // 输出目录
  },
  externals: [nodeExternals()]
}
// module.exports = serverConfig;
module.exports = merge(baseConfig, serverConfig); // 导出的时候 合并