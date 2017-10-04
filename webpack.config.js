const path = require('path')

module.exports = {
    entry: ['babel-polyfill', './source/client.js'],
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'index.js'
    },
    devServer:{
        inline: true,
        contentBase: path.resolve(__dirname, './public'),
        port:3000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            }
        ]
    }
}