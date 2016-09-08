const nodeExternals = require('webpack-node-externals')
const config = require('./base')

module.exports = Object.assign({}, config, {
  target: 'node',
  externals: [nodeExternals()],
})
