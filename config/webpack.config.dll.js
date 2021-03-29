const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'react-router-dom',
      'mobx',
      'mobx-react',
      '@loadable/component',
    ],
  },
  output: {
    filename: 'libs.min.js',
    path: path.resolve(__dirname, '../build/vendor'),
    library: 'libs',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '../build/vendor/manifest.json'),
      name: 'libs',
    }),
  ],
};
