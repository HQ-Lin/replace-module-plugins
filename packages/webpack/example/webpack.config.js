const path = require("path");
const WebpackPluginReplaceNpm = require("../index");

module.exports = {
  mode: "development",
  entry: "./main.js",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
    ],
  },
  plugins: [
    new WebpackPluginReplaceNpm({
      rules: [
        {
          originModule: "test",
          replaceModule: "lodash-es",
        },
        {
          originModule: "tdesign-react",
          replaceModule: "tdesign-react/lib/",
        },
        {
          originModule: "tdesign-icons-react",
          replaceModule: "tdesign-icons-react-tea",
          context: /node_modules\/tdesign-react/,
        },
      ],
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
