var path = require('path');

module.exports = {
    node: {
        fs: 'empty'
    },
    entry: {
        index: './public/views/client.js'
    },
    output: {
        path: '.build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['react']
            }
        }, {
            test: /\.json$/,
            loader: 'json-loader',
        }]
    }
};
