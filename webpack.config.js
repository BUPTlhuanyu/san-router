const path = require('path');
const fs = require('fs')

let config = {
    entry: './src/main.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'san-router.source.js',
        publicPath: '/dist',
        library: 'san-router',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,

                exclude: [
                    /node_modules\/(?!mini-event)/,
                ],

                use: ['babel-loader']
            }
        ]
    },

    resolve: {
        alias: {
            // 'mini-event': 'mini-event/src'
        }
    },

    performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
    }
};

var pkgInfo = JSON.parse(fs.readFileSync('package.json', 'UTF-8'));
Object.keys(pkgInfo.dependencies).forEach(dep => {
    config.resolve.alias[dep] = dep + '/src';
})

module.exports = exports = config;
