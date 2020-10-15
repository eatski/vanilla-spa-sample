/* eslint-disable @typescript-eslint/no-var-requires */
const base = require("./webpack.base.config");
const { merge } = require("webpack-merge");

/** @type import('webpack').Configuration */
const config = {
  mode: "production",
};

module.exports = merge(base, config);
