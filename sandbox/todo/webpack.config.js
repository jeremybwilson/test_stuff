const path = require('path');
const webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let glob = require('glob');

module.exports = {
  entry: './src/app.js',
  watch: true,
  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test:/\.css$/, loader: "style-loader!css-loader"
      }
    ]
  }
};