const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\s[a|c]ss$/,
        exclude: /node_modules/,
        loader: 'sasslint'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader'
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            'presets': ['env', 'react']
          }
        }
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: './bundle.css'
    }),
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Production'
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/assets/',
        to: 'assets/'
      }
    ])
  ]
}
