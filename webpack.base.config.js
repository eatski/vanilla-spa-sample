/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: [/\.js$/, /\.ts$/],
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: [/\.ts$/],
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules: ["node_modules"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
