const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const path = require('path')
const webpack = require('webpack')
const pkg = require('./package.json')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: 'index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  resolve: {
    modules: [
      `${__dirname}/src`,
      'node_modules',
    ] },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /(node_modules)/, use: 'babel-loader' },
      {
        test: /\.(jpe?g|png)$/i,
        loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
      },
      { test: /\.(less|css)$/,
        exclude: [
          // `${__dirname}/node_modules`,
        ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', { loader: 'less-loader', options: { strictMath: true } }],
        }),
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
    ],
  },
  devServer: {
    contentBase: false,
    port: 8000,
    host: '0.0.0.0',
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/html/index.html'),
    })
  ],
}
