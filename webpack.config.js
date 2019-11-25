const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build")
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new CopyPlugin([{ from: "src/assets", to: "assets" }])
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  resolve: {
    plugins: [new TsconfigPathsPlugin({})],
    extensions: [".tsx", ".ts", ".js"]
  },

  devServer: {
    contentBase: "./dist",
    hot: true,
    port: 8000
  }
};
