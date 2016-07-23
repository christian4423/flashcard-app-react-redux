var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");



module.exports = {
    entry: {
        "bootstrap": "./src/entry-bootstrap.js",
        "main": "./src/entry-base.js",
        "base-javascript": "./src/entry-base-js.js",
        "javascript": "./src/entry-js.js"
    },
    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        path: __dirname + "/public/dist/js",
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!resolve-url!sass-loader?sourceMap")
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!resolve-url?sourceMap")
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: "url-loader",
                query: {
                    limit: 100,
                    name: "../image/[name].[ext]"
                }
            }, {
                test: /\.(woff|woff2)$/,
                loader: "url-loader",
                query: {
                    limit: 10000,
                    mimetype: "application/font-woff",
                    name: "../fonts/[name].[ext]"
                }
            }, {
                test: /\.(ttf|eot)$/,
                loader: "file-loader?name=../fonts/[name].[ext]"
            }, {
                test: /\.(svg)$/,
                loader: "file-loader?name=../fonts/[name].[ext]"
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("../css/[name].css", {
            disable: false,
            allChunks: true
        }),
    ]
};