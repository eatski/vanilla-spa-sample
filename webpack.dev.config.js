/* eslint-disable @typescript-eslint/no-var-requires */
const base = require("./webpack.base.config");
const { merge } = require("webpack-merge");
const path = require("path");

/** @type import('webpack').Configuration */
const config = {
  mode: "development",
  devtool: false,
  cache: {
    type: "filesystem",
    buildDependencies: {
      config: [
        __filename,
        path.resolve(__dirname, ".babelrc"),
        path.resolve(__dirname, "webpack.base.config.js"),
      ],
    },
  },
  devServer: {
    port: 3000,
    host: "127.0.0.1",
    historyApiFallback: true,
    open: false,
  },
};

module.exports = merge(base, config);
