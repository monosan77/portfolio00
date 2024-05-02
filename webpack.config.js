const path = require("path");

module.exports = {
  entry: "./src/index.js", // エントリーポイント
  output: {
    path: path.resolve(__dirname, "dist"), // 出力先ディレクトリ
    filename: "bundle.js", // 出力ファイル名
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js または .jsx ファイルを対象にする
        exclude: /node_modules/, // node_modules ディレクトリは除外する
        use: {
          loader: "babel-loader", // Babelを使用してトランスパイルする
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Babelのプリセットを設定
          },
        },
      },
    ],
  },
};
