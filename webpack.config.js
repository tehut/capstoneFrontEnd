'use strict'
var webpack = require('webpack');
var DashboardPlugin = require('webpack-dashboard/plugin');

var config = {
  entry: [ './src/app.js'],
  output: {
    path: './build',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  devtool: 'source-map',
  // devServer: {
  //   contentBase: './build',
  //   historyApiFallback: true,
  //   // hot: true,
  //   inline: true,
  //   port: process.env.PORT
  // },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin({
  //     multiStep: true
  //   }),
  //   new DashboardPlugin()
  // ],
  resolve: {
    alias: {
      fs: 'graceful-fs/fs'
    }
  }
};

if (process.env.NODE_ENV !== 'production') {
  config.devServer = {
    contentBase: './build',
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8080
  }
}

module.exports = config
