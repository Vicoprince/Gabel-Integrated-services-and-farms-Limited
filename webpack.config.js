const path = require('path');

module.exports = {
  mode: 'production', // You can set this to 'production' for production builds
  entry: './app.js', // Entry point of your application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public') // Output directory
  },
  target: 'node', // Since this is a Node.js application
  stats: {
    errorDetails: true // Show error details for easier debugging
  }
};
