var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');
var DATA_DIR = path.resolve(__dirname, 'json');

module.exports = {
    devtool: '#eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',

        APP_DIR + '/index.js',
    ],
    output: {
        path: BUILD_DIR,
        publicPath: '/static/',
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loaders: ['react-hot', 'babel'],
                include: APP_DIR,
            },
            {
                test: /\.json$/,
                loader: 'json',
                include: DATA_DIR,
            },
        ],
    },
};
