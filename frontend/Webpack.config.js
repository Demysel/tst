const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  // ... autres configurations
  plugins: [
    new NodePolyfillPlugin()
  ]
};
