const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // devtool none to see the exact code without any shorthand and in an order
  // devtool: "none",
  entry: "./src/index.js",
  output: {
    filename: "main.[contentHash].js",
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
};
