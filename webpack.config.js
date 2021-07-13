const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCSS = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/js/anagramMain.js'),
        validation: path.resolve(__dirname, './src/js/inputValid.js'),
    },
    output: {
        filename: 'modules/[name].bundle.js',
        path: path.resolve(__dirname, './dist/')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/public/index.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCSS({
            filename: 'css/style.css'
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/assets/static/Tree.png'),
                to: path.resolve(__dirname, 'dist/assets/static/')
            }]
        })

    ],
    module: {
        rules: [{
                test: /\.(s*)css$/,
                use: [
                    MiniCSS.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(jpeg|png|svg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/img/'
                    }
                }
            },
            {
                test: /\.(ttf|wolf|wolf2|eot)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts/'
                    }
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

        ]
    },
    devServer: {
        port: 9000,
    },
};