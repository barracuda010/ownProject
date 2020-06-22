var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");

var extractPlugin = new ExtractTextPlugin({
  filename: "main.scss",
});

module.exports = {
  devtool: "eval-cheap-module-source-map",
  entry: {
    index: "./src/js/app.js",
    main: "./src/main-page/main.js",
    result: "./src/movieBase/moviesDataBase.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    // publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["es2015"],
            },
          },
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          // Please note we are not running postcss here
        ],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/",
              publicPath: "img/",
            },
          },
        ],
      },
      {
        test: /\.hbs/,
        loader: "handlebars-loader",
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  plugins: [
    // extractPlugin,
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      chanks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "searchmovies.html",
      template: "src/movieBase/searchmovies.html",
      chunks: ["searchmovies"],
    }),
    new HtmlWebpackPlugin({
      filename: "main.html",
      template: "src/main-page/tmpl.html",
      chunks: ["main"],
    }),
    new CleanWebpackPlugin(["dist"]),
  ],
};
