const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.[hash].js",
    path: path.join(__dirname, "/dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack-demo",
      filename: "index.html",
      template: "./index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(png|svg|jpe?g|gifs|)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[name].[hash].[ext]", outputPath: "assets" }
          }
        ]
      }
    ]
  }
};
