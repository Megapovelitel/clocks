const { merge } = require("webpack-merge");

const webpackCommonConfig = require("./webpack.config.common");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(webpackCommonConfig, {
  mode: "production",
  devtool: "source-map",
  devServer: {
    compress: true,
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
});
