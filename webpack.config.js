const path = require('path');
module.exports = {
  mode: 'production',
  entry: {
    index: './lib/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'), /* 将当前目录（BUI-R1） 和 dist 连接 */
    library: 'BUI-R1',
    libraryTarget: 'umd'/* 兼容 amd 和 commonJS 的模块定义 */
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
}
