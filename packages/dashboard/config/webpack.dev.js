const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const path = require('path');
const commonConfig = require('./webpack.common');
const packagesJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8083/',
  },
  devServer: {
    port: 8083,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '../public'),
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },

  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardApp': './src/bootstrap'
      },
      shared: Object.keys(packagesJson.dependencies),
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ]
};

module.exports = merge(commonConfig, devConfig);