const DotEnv = require('dotenv-webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  title: 'React Pokemon',
  template: './index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: {
    app: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'less-loader', // compiles Less to CSS
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        }],
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true, // true outputs JSX tags
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    globalObject: 'this',
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new DotEnv({
      path: './.env',
      safe: true,
    })],
  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    alias: {
      views: path.resolve(__dirname, './src/views'),
      lib: path.resolve(__dirname, './src/lib'),
      styles: path.resolve(__dirname, './src/assets/styles'),
      assets: path.resolve(__dirname, './src/assets'),
      enums: path.resolve(__dirname, './src/enums'),
    },
  },
};
