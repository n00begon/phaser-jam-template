const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        game: "./src/Game.ts",
    },
    mode: "development",
    devServer: {
        contentBase: "./dist",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        pathinfo: false,
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
            },
        ],
    },
    optimization: {
        minimize: false,
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    stats: "errors-warnings",
    plugins: [
        new webpack.DefinePlugin({
            CANVAS_RENDERER: JSON.stringify(true),
            WEBGL_RENDERER: JSON.stringify(true),
        }),
        new CopyWebpackPlugin({ 
            patterns: [
            {
                from: "./assets",
                to: "./assets",
                force: true,
            },
            {
                from: "./web",
                to: "./web",
                force: true,
            },
        ]}),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
        }),
    ],
};
