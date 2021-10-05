const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require('path');
const isDevelopment = process.env.NODE_ENV !== 'production';
const LiveReloadPlugin = require("webpack-livereload-plugin");

module.exports = (_, argv) => ({
  output: {
    publicPath: 
      argv.mode === "development"
        ? "http://localhost:3000/"
        : "https://LINK-PRODUCAO",
  },
  entry: { 
    main: './src/index.js',
  },
  mode: isDevelopment ? 'development' : 'production',
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  devServer: {
    hot: false,
    static: path.join(__dirname, "dist"),
    port: 3000,
    historyApiFallback: {
      index: "index.html",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "consumer",
      filename: "remoteEntry.js",
      remotes: {  
        children: "children@http://localhost:3001/remoteEntry.js",
      },
      exposes: {},
      shared: require("./package.json").dependencies,
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
    new LiveReloadPlugin({
      port: 35729,
    }),
  ]
});