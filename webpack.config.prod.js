/* eslint-disable no-var */
var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './app/scripts/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'https://some-cdn.com/', // 'https://some-cdn.com/' for loading from a CDN
    filename: 'app.js'
  },
  externals: {
    // list packages will be loaded from CDN
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        include: path.join(__dirname, 'app/scripts'),
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-runtime'],
          cacheDirectory: true
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap', 'sass?sourceMap')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map',
  postcss: [
    autoprefixer
  ],
  sassLoader: {
    includePaths: [path.join(__dirname, 'app/scss')]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('app.css')
  ]
};