const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

console.log(__dirname, "--");
module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: path.resolve(__dirname, "node_modules"),
      //   include: path.resolve(__dirname, "src"),
      //   use: "babel-loader",
      // },
      // {
      //   test: /\.ts|\.tsx$/,
      //   use: "awesome-typescript-loader",
      //   include: __dirname,
      // },
      {
        test: /\.ts|\.tsx$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      // index.html에 output에서 만들어진 bundle.js를 적용하여, dist에 새로운 html 파일 생성
      template: `./public/index.html`,
    }),
  ],

  devServer: {
    static: { publicPath: path.join(__dirname, "dist") },
    compress: true,
    host: "localhost",
    port: 3000,
  },
};
