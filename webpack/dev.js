const path = require('path')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle-dev.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
    ],
  },

  devServer: {
    inline: true,
  },
}
