var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/main.js',
    'webpack-dev-server/client?http://localhost:8080'
  ],

  output: {
    publicPath: '/',
    filename: 'main.js'
  },

  debug: true,

  devtool: 'source-map',

  resolve: {
    modulesDirectories: ['node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=2',
          'less-loader',
          require.resolve('./lib/bootstrap-module-loader')
        ]
      }
    ]
  },

  bootstrapModuleLoader: {
    variables: path.resolve('./src/components/variables.less')
  },

  devServer: {
    contentBase: './src'
  }
};
