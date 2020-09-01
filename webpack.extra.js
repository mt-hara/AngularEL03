const webpack = require("webpack");
const path = require("path");

/**@type import("webpack").Configuration */
module.exports = {
  // target: "web",
  target: "electron-renderer",
  externals: {
    typeorm: "require('typeorm')",
    sqlite3: "require('sqlite3')",
  },
  resolve: {
    alias: {
      typeorm: path.resolve(__dirname, "../node_modules/typeorm/typeorm-model-shim"),
    },
  },
};
