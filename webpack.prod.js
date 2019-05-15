const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const cleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [new cleanWebpackPlugin()],
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname + "/build")
  }
});
