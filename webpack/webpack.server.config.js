const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './source/server.js',
  output: {
    filename: 'index.js',
    path: './build/server'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['latest-minimal', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules' })
      }
    ]
  },
  target: 'node',
  plugins: [
    new ExtractTextPlugin('../statics/styles.css')
  ]
}
