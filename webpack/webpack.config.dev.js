const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  entry: {
    // vendors: ['assert'],
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(process.cwd(), 'webpack/build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ]
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'async',
  //     minChunks: 2,
  //     name: true,
  //     cacheGroups: {
  //       vendors: {
  //         test: /[\\/]node_modules[\\/]|/,
  //         priority: -10
  //       },
  //       commons: {
  //         name: 'vendors',
  //         chunks: 'all'
  //       }
  //     }
  //   }
  // },
  resolve: {
    alias: {
      it: 'it',
      describe: 'describe',
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'webpack/index.html',
      inject: true,
    })
  ],
  // devtool: 'inline-source-map',
  devServer: {
    progress: false,
    contentBase: path.resolve(process.cwd(), 'webpack'),
  },
};

function setEntries(dir, filename) {
  const root = filename ? `${dir}/${filename}` : dir;
  const stat = fs.statSync(root);
  if (stat.isFile() && /\.test\.js$/.test(filename)) {
    config.entry[filename.replace('.test.js', '-test')] = root;
    return;
  }
  if (!stat.isDirectory()) {
    return;
  }
  const list = fs.readdirSync(root);
  for (let i = 0; i < list.length; i++) {
    setEntries(root, list[i]);
  }
}
setEntries(path.resolve(process.cwd(), 'test'));

module.exports = config;
