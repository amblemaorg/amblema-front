module.exports = {
  // Empty configuration. By removing externals, we force Webpack to bundle 
  // all node_modules dependencies into the server bundle. This solves 
  // the 'Unexpected token export' issue by transpiling all ESM code.
}
