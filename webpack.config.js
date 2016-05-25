var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './main.js',
    devtool: debug ? "inline-sourcemap" : null,
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                plugins: ['transform-runtime', 'react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                presets: ['es2015', 'stage-0', 'react'],
            }
        }]
    }
    ,
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]
};