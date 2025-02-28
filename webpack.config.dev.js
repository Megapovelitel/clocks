const webpack = require("webpack");
const { merge } = require("webpack-merge");

const webpackCommonConfig = require("./webpack.config.common");

module.exports = merge(webpackCommonConfig, {
  mode: "development",
  plugins: [new webpack.EnvironmentPlugin({ NODE_ENV: "development" })],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devtool: "source-map",
  devServer: {
    hot: true,
  },
});
