const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname + "/dist")
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        //SCSS Loader loads the SCSS into CSS.
        //CSS Loader loads the CSS and converts them into JS.
        //Style Loader loads that CSS JS into the DOM.
        //Should be arranged in a reverse order.
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
});
