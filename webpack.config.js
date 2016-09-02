var webpack = require('webpack');
var path = require('path');
var ROOT_PATH = path.join(__dirname, "/dist/");
var APP_PATH = path.resolve(__dirname, './src/index.js');
var BUILD_PATH = path.resolve(__dirname, './dist/');
module.exports = {
  entry: [
    APP_PATH
  ],
  output: {
    path: BUILD_PATH,
    filename: 'main.js',
    publicPath: ROOT_PATH
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      loaders: ["style", "css", "sass"]
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loaders: ["style", "css"]
    }, {
      test: /\.less$/,
      exclude: /node_modules/,
      loaders: ["style", "css", "less"]
    }, {
      test: /\.(gif|jpg|png|woff|svg|eot|ttf|pdf)\??.*$/,
      loader: 'url?limit=8192&name=img/[name].[ext]'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}