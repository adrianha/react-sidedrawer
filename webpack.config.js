var webpack = require('webpack');

module.exports = {

  entry: './src/demo.js',

  output: {
    path: './dist',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ['style','css', 'sass']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ]

};
