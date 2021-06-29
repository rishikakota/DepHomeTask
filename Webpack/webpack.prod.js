const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");

const WebpackStrip = require("strip-loader");

module.exports = merge(common, {
  mode: "production",

  module: {
    rules: [
      {
        test: /\.js$/,

        exclude: /(node_modules|bower_components)/,

        use: {
          loader: WebpackStrip.loader("debug", "console.log"),
        },
      },
    ],
  },
});
