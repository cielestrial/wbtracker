const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/js/index.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 1234
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      favicon: './favicon_io/favicon.ico',
      inject: true,
      chunks: ['main'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/html/depressionSurvey.html',
      favicon: './favicon_io/favicon.ico',
      inject: true,
      chunks: ['main'],
      filename: 'depressionSurvey.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/html/anxietySurvey.html',
      favicon: './favicon_io/favicon.ico',
      inject: true,
      chunks: ['main'],
      filename: 'anxietySurvey.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/html/graphs.html',
      favicon: './favicon_io/favicon.ico',
      inject: true,
      chunks: ['main'],
      filename: 'graphs.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/html/404.html',
      favicon: './favicon_io/favicon.ico',
      inject: true,
      chunks: ['main'],
      filename: '404.html'
    }),
    new MiniCssExtractPlugin({
      linkType: 'text/css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', '@popperjs/core', 'default']
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
};
