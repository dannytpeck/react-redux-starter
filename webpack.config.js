var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, 'js'),
    publicPath: './js/',
    filename: 'bundle.js'
  },
  watch: true,
  plugins: [
    new BrowserSyncPlugin({
      host: process.env.IP || 'localhost',
      port: process.env.PORT || 3000,
      server: {
        baseDir: ['./', './build']
      }
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], include: path.join(__dirname, 'src') }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
