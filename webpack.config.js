const path = require("path");

module.exports = {
  mode: "development",
  // devtool none to see the exact code without any shorthand and in an order
  // devtool: "none",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname + "/dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //CSS Loader loads the CSS and converts them into JS.
        //Style Loader loads that CSS JS into the DOM.
        //Should be arranged in a reverse order
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
