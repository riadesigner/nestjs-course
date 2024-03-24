const path = require('path');

module.exports = {
  entry: './src/index.ts',

  // ------- typescript \ ----------
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },  
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },  

  // ------- typescript / ----------
    
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  }, 
};