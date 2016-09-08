const path = require('path')
const config = require('./base')

module.exports = Object.assign({}, config, {
  entry: `mocha!${path.resolve(__dirname, '../test/index.js')}`,

  output: {
    filename: 'bundle-test.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
  },

  devServer: {
    inline: true,
    port: '8081',
    contentBase: path.resolve(__dirname, '../test/'),
  },
})
