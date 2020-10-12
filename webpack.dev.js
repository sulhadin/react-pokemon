const { merge } = require('webpack-merge');
const path = require('path');
const ConfigCodeBase = require('./webpack.common');

module.exports = merge(ConfigCodeBase, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    hot: true,
    historyApiFallback: true,
  },
});
