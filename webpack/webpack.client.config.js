const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './source/client.js',
  output: {
    filename: 'app.js',
    path: './build/statics',
    publicPath: 'http://localhost:3001/'
  },
  devtool: '#eval-source-map',
  target: 'web',
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2016', 'es2017', 'react'],
          plugins: ['transform-es2015-modules-commonjs']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules' })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../statics/styles.css')
  ]
}
