const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/main.js', //入口
  output: {// 出口
    path: path.resolve(__dirname, 'dist'), // 出口路径文件夹的名字
    filename: 'bundle.js', // 出口文件名字
  },
  plugins: [new HtmlWebpackPlugin({  //pulgins插件  配置HTML文件
    template:'./public/index.html' // 告诉webpack使用插件时以谁为模板
  })],
  module: {  //加载器  打包css文件
    rules: [//规则
      {
        test: /\.css$/i,//匹配css结尾的文件
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(gif|png|jpg|jpeg)/,
        type: 'asset',
       },
       {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource', //所有的字体图标文件都输入到dist里面
        generator: { //生成文件的名字
          filename: 'fonts/[name].[hash:6][ext]' //后缀名
        },
       },
       {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'] //降级的规则
          }
        }
      },
    ],
  },
};