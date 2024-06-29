const path = require('path');

module.exports = {
  mode: 'production', // You can set this to 'production' for production builds
  entry: './index.js', // Entry point of your application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build') // Output directory
  },
  target: 'node', // Since this is a Node.js application
  stats: {
    errorDetails: true // Show error details for easier debugging
  },
  ignoreWarnings: [
    {
      // Match the specific warning you want to ignore
      module: /express\/lib\/view\.js/,
      message: /the request of a dependency is an expression/,
    },
  ],
};
