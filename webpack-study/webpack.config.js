const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 3000,
        open: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'dist/index22.html',
            // TODO 名字不一样无效
            // filename: 'index2.html'
        })
    ]
};




