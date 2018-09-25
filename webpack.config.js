const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'js', 'index.jsx'),
  output: {
     path: path.resolve(__dirname, 'export'),
     filename: 'bundle.js'
  },
  //optimization: {
  //  splitChunks: { chunks:  'all' }
  //},
  resolve: {
     extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:  {
          loader:   'babel-loader',
          options:  { // .babelrc directives can go here
            presets: ['@babel/preset-env','@babel/preset-react'] 
          }
        }
      },
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    port:         5000,
    contentBase:  './js',
    publicPath:   '/export',
    compress:     true,
  }
};
