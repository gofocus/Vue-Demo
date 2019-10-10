const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        // 配置访问路径，会从这个路径找index.html
        // contentBase: 'dist',
        contentBase: path.join(__dirname, "dist"),
        hot: true,
        port: 3000,
        open: true,
        // 配置bundle files的访问路径(硬盘中并没有这个文件)
        // TODO 配置devServer.publicPath会导致无法自动打开index.html(可以手动访问)
        // publicPath: "/dist/"
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'src/index.html',
            // 1.不配置filename，默认为index
            // 2.生成的html的位置是基于contentBase的
            // filename: 'index.html'
        })
    ],
    // 配置第三方模块加载器
    module: {
        rules: [
            //一种类型文件有多个loader， 两个loader的顺序不能颠倒，从后往前调用。
            {test: /\.css$/, use: ['style-loader','css-loader']},
            {test: /\.ts$/, use: 'ts-loader'},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    }
};




