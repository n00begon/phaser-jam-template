import path from "path";
import webpack from "webpack";
import ZipWebpackPlugin from "zip-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

module.exports = {
    entry: {
        game: "./src/Game.ts",
    },
    mode: "production",
    devServer: {
        contentBase: "./../",
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        pathinfo: false,
        filename: "[name].min.js",
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
            },
        ],
    },
    performance: {
        hints: "warning",
        maxEntrypointSize: 10000000,
        maxAssetSize: 2000000,
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false,
                    },
                },
            }),
        ],
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
        new CleanWebpackPlugin({
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
                }
            ]
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
        }),
        new ZipWebpackPlugin({
            path: "../itch/",
            filename: "game"
        }),
    ],
};
