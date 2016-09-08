const path = require('path')
const config = require('./base')

module.exports = Object.assign({}, config, {
  entry: './src/index.js',

  output: {
    filename: 'bundle-dev.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
  },

  devServer: {
    inline: true,
  },
})
