/* eslint-disable @typescript-eslint/no-var-requires */
const base = require("./webpack.base.config");
const {merge} = require("webpack-merge");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "src", "index.ts")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  devServer: {
    port: 3000,
    host: "127.0.0.1",
    historyApiFallback: true,
    open: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "index.html"
    })
  ]
};

module.exports = merge(base, config);
