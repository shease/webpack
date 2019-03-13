const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:{
        index:path.resolve(__dirname,'src/index.js')
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "[name].js",
        publicPath: "/"
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.(htm|html)$/,
                loader: 'html-loader'
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-html-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    devServer: {
        contentBase:path.resolve(__dirname,'dist'),
        port:8015,
        publicPath:'/',
        host:'localhost',
        hot:true,
        inline:true

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'html-loader!./src/index.ejs',
            chunks: ['index'],
            filename: '[filename].html'
        })
    ],

}