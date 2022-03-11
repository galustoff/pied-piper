const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "docs"),
        clean: true,
    },
    devtool: isDev ? "inline-source-map" : false,
    devServer: {
        static: "./docs",
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: "html-loader",
            },
            {
                test: /\.sass$/i,
                use: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: ["autoprefixer"],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "PiedPiper",
            favicon: "./src/vendor/images/favicon.ico",
        }),

        new MiniCSSExtractPlugin(),
    ],
};
