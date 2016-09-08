const path = require('path')
const config = require('./base')

module.exports = Object.assign({}, config, {
  entry: `mocha!${path.resolve(__dirname, '../test/index.js')}`,

  output: {
    filename: 'bundle-test.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
  },

  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },

  devServer: {
    inline: true,
    port: '8081',
    contentBase: path.resolve(__dirname, '../test/'),
  },
})
