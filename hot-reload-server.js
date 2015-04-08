var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(8899, 'localhost', function callback (err) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost:8899');
  });
