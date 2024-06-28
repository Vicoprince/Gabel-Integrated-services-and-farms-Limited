const path = require("path");

module.exports = {
  entry: "./app.js", // Replace with your main entry file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  target: "node", // Since this is a Node.js application
};
