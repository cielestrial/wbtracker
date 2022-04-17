const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const buildPath = path.resolve(__dirname, "dist");

module.exports = {
  devtool: "source-map",
  entry: {
    main: "./src/js/index.js"
  },
  output: {
    filename: "[name].[fullhash:20].js",
    path: buildPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/html/index.html",
      favicon: "./favicon_io/favicon.ico",
      inject: "body",
      chunks: ["main"],
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/depressionSurvey.html",
      favicon: "./favicon_io/favicon.ico",
      inject: "body",
      chunks: ["main"],
      filename: "depressionSurvey.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/anxietySurvey.html",
      favicon: "./favicon_io/favicon.ico",
      inject: "body",
      chunks: ["main"],
      filename: "anxietySurvey.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/graphs.html",
      favicon: "./favicon_io/favicon.ico",
      inject: "body",
      chunks: ["main"],
      filename: "graphs.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/404.html",
      favicon: "./favicon_io/favicon.ico",
      inject: "body",
      chunks: ["main"],
      filename: "404.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
      linkType: "text/css"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Popper: ["popper.js", "@popperjs/core", "default"]
    })
  ],
  optimization: {
    minimize: true,
    minimizer: ["...", new CssMinimizerPlugin()]
  }
};
