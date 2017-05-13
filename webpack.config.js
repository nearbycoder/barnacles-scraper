var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(path.join(__dirname, 'dist'));
var APP_DIR = path.resolve(path.join(__dirname, 'src'));
var config = {
  devtool: 'source-map',
  entry: path.join(APP_DIR + '/index.js'),
  output: {
    path: BUILD_DIR,
    filename: 'barnacles-scraper.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
