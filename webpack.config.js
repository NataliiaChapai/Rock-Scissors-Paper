const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'production',
   entry: './js/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   devServer: {
    open: true,
  },
   module: {
      rules: [{
         test:/\.(s*)css$/,
         use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
         ]
      },  {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },]
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: 'style.css',
      }),
      new HtmlWebpackPlugin({template: './index.html'}),
   ]
};