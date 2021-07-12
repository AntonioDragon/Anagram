const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const miniCSS = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/js/anagramMain.js'),
        validation: path.resolve(__dirname,'./src/js/inputValid.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist/')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
        }),
        new CleanWebpackPlugin(),
        new miniCSS({
            filename : 'style.css'
        })
    ],
    module:{
       rules:[
            {
                test: /\.(s*)css$/,
                use: [
                    miniCSS.loader,
                    'css-loader',
                    'sass-loader',
                ]
            }
       ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
};