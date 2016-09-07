const path = require('path')

module.exports = {
  entry: './test/simple.spec.js',

  output: {
    filename: 'bundle-test.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
    ],
  },
}
