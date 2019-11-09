const base = require("./webpack.base.config");
const merge = require("webpack-merge");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const file = (...args) => path.resolve(__dirname, ...args);

const config =  {
  mode: "development",
  entry: {
    main: ["@babel/polyfill", file("src", "index.ts")]
  },
  output: {
    path: file("dist"),
    filename: "index.js"
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    open: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: file("src", "index.html"),
      filename: "index.html"
    })
  ]
};

module.exports = merge(base,config);
