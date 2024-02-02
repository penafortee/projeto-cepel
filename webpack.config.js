const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Arquivo de entrada do seu aplicativo React
  output: {
    path: path.resolve(__dirname, "dist"), // Pasta de saída onde o Webpack irá colocar os arquivos compilados
    filename: "bundle.js", // Nome do arquivo de saída
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Regra para arquivos JavaScript e JSX
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Use os presets env e react do Babel
          },
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/", // Onde os arquivos SVG serão copiados
            },
          },
        ],
      },
      {
        test: /\.css$/, // Regra para arquivos CSS
        use: ["style-loader", "css-loader"], // Use o style-loader e css-loader para lidar com arquivos CSS
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Limpa a pasta de saída antes de cada compilação
    new HtmlWebpackPlugin({
      // Gera um arquivo HTML com o bundle injetado
      template: "./index.html",
    }),
  ],
};
