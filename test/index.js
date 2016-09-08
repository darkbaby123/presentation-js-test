const support = require.context('./support', false, /\.js$/)
support.keys().forEach(support)

const spec = require.context('./', true, /\.spec\.js$/)
spec.keys().forEach(spec)
