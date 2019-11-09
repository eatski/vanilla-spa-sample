const path = require("path");
const file = (...args) => path.resolve(__dirname, ...args);

module.exports = {
  module: {
    rules: [
      {
        test: [/\.js$/, /\.ts$/],
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: [/\.ts$/],
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules: ["node_modules"],
    alias: {
      "@": file("src")
    }
  }
};