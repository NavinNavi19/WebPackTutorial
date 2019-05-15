const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // devtool none to see the exact code without any shorthand and in an order
  // devtool: "none",
  entry: "./src/index.js",
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
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif|jpeg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  }
};
