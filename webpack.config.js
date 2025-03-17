const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Appliquer la règle sur tous les fichiers .js
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader', 
          // Les options sont prises par défaut depuis .babelrc
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',   
          'sass-loader',  
        ],
      },
      {
        test: /\.css$/i, 
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js'], 
    }),
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
      },
    compress: true,
    port: 9000,
    hot: true, // pour activer le hot reload
  },
};