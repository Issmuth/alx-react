const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(_dirname, "./js/dashboard_main.js"),
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(_dirname, "./public/"),
  },
};