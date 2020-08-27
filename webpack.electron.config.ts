import * as path from "path";

module.exports = (env) => {
  const isDev = env.development;

  return {
    target: "electron-main",
    mode: isDev ? "development" : "production",
    entry: {
      main: "./src/electron-main.ts",
    },
    output: {
      path: path.resolve(__dirname, "dist/electron"),
      filename: "main.js",
    },
    externals: [],
    devtool: isDev ? "source-map" : false,
    module: {
      rules: [
        {
          test: /\.ts?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".js", ".ts", ".json"],
    },
    node: {
      __dirname: true,
      __filename: true,
    },
  };
};
