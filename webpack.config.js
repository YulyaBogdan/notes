const webpack = require('webpack');

module.exports  = {
    entry: "./client/index.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "env", "stage-2"]
                },
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                exclude: [/node_modules/, /public/],
                loader: "style-loader!css-loader!autoprefixer-loader"
            },
            {
                test: /\.less$/,
                exclude: [/node_modules/, /public/],
                loader: "style-loader!css-loader!autoprefixer-loader!less-loader"
            },
            {
                test: /\.jsx$/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "env", "stage-2"]
                },
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.json?/,
                loader: "json-loader",
                exclude: [/node_modules/, /public/]
            },
        ]
    }
};