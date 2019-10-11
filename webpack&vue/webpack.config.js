const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        hot: true,
        port: 3000,
        open: true,
        // publicPath: "/dist/"
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'src/index.html',
            // filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.ts$/, use: 'ts-loader'},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.(jpg|png|gif|jpeg|bmp)$/, use: 'url-loader'},
            // {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
            {
                test: /\.js$/, exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {test: /\.vue$/, use: 'vue-loader'},

        ]
    },
    resolve: {
        alias: {
            // 改变默认导入的vue文件
            "vue$": "vue/dist/vue.js"
        }
    }
};




