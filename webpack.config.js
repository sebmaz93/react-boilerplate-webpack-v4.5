const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ResourceHintWebpackPlugin = require("resource-hints-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
// const DashboardPlugin = require("webpack-dashboard/plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  devtool: "source-map",
  devServer: {
    // Display only errors to reduce the amount of output.
    stats: "errors-only",
    historyApiFallback: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
    compress: true
  },
  optimization: {
    splitChunks: {
      chunks: "initial"
    },
    minimizer: [new UglifyWebpackPlugin({ sourceMap: true, parallel: true })],
    runtimeChunk: {
      name: "manifest"
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(css|sass|scss)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            query: {
              modules: true,
              localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
              minimize: true
            }
          },
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-resources-loader",
            options: {
              resources: "./src/global.scss"
            }
          }
        ]
      },
      // new OptimizeCssAssetsPlugin({
      //   assetNameRegExp: /\.optimize\.css$/g,
      //   cssProcessor: require("cssnano"),
      //   cssProcessorOptions: { discardComments: { removeAll: true } },
      //   canPrint: true
      // }),
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader"
        }
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000
          }
        }
      },
      {
        test: /\.(eot?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/,
        use: "file-loader?name=assets/[name]-[hash].[ext]"
      }
      // {
      //   test: /\.(gif|png|jpe?g|svg)$/i,
      //   use: [
      //     "file-loader",
      //     {
      //       loader: "image-webpack-loader",
      //       options: {
      //         bypassOnDebug: true
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    // new ErrorOverlayPlugin(),
    // new DashboardPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    new ResourceHintWebpackPlugin(),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: "defer"
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/favicon.png",
      persistentCache: false,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
