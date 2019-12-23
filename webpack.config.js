const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = { 
  entry: './src/index.js', 
  output: { 
    path: path.resolve('dist'), 
    filename: 'bundle.js'
  }, 
  module: { 
    rules: [
      { 
        test: /\.js$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/ 
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  }, 
  plugins: [
    HtmlWebpackPluginConfig,
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ]
}