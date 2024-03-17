const path = require('path');

module.exports = {
  entry: './src/home-work/main.ts', // El punto de entrada de tu aplicación
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Para archivos .ts y .tsx
        use: 'ts-loader', // Usa ts-loader para transpilar TypeScript a JavaScript
        exclude: /node_modules/, // No transpiles los archivos en node_modules
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Extensiones de archivo a manejar
  },
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), // Directorio de salida
  },
};
