/* eslint-env node */
var webpack = require('webpack');
var path = require('path');

module.exports = {

  context: __dirname,
  entry: [
    './src/public/js/app.jsx',
    'webpack-dev-server/client?http://localhost:8899',
    'webpack/hot/only-dev-server'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/src/public/dist'),
    publicPath: 'http://localhost:8899/src/public/dist/',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    modulesDirectories: [ 'node_modules'],
    alias: {
      'actions': path.join(__dirname, '/src/public/js/actions'),
      'components': path.join(__dirname, '/src/public/js/common'),
      'screens': path.join(__dirname, '/src/public/js/screens'),
      'stores': path.join(__dirname, '/src/public/js/stores'),
      'services': path.join(__dirname, '/src/public/js/services')
    },
    extensions: [ '', '.js', '.jsx' ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [ 'react-hot', 'babel' ],
        exclude: /(node_modules)/
      },
      {
        test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000' }
    ],
    noParse: []
  },
  externals: {},
  devtool: 'eval'
};
