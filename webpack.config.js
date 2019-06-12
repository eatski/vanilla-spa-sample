const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const file = (...args) => path.resolve(__dirname,...args)

module.exports = {
    mode: 'development',
    entry: {
        main: ['@babel/polyfill',file("src","index.ts")]
    },
    output: {
        path: file("dist"),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: [/\.js$/,/\.ts$/],
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx','.ts','.tsx'],
        modules: ['node_modules'],
        alias: {
            '@': file("src")
        }
    },
    devServer: {
        port: 3000,
        historyApiFallback:true,
        open:false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: file("src",'index.html'),
            filename: 'index.html'
        })
    ]
}
