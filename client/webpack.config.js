const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

// Added and configured workbox plugins for a service worker and manifest file.
// Added CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: "production",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    plugins: [
      // Plugin to generate an HTML file
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "J.A.T.E",
        scriptLoading: "defer",
      }),

      // Inject the custom service worker
      new InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "service-worker.js",
      }),

      // Create a manifest.json for the PWA
      new WebpackPwaManifest({
        name: "Just Another Text Editor",
        short_name: "JATE",
        description: "A Progressive Web App text editor.",
        start_url: "/",
        display: "standalone",
        background_color: "#225ca3",
        theme_color: "#225ca3",
        orientation: "portrait",
        icons: [
          {
            src: path.resolve("src/images/logo.png"),
            sizes: [96, 192, 512],
            destination: path.join("assets", "icons"),
          },
        ],
        filename: "manifest.json",
        publicPath: "./",
      }),
    ],

    module: {
      rules: [
        // CSS loader
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        // Babel loader for JS
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
  };
};
