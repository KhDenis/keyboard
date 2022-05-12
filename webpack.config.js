// import path from "path";
// import { CleanWebpackPlugin } from 'clean-webpack-plugin';
// import MiniCssExtractPlugin from "mini-css-extract-plugin";
// import HtmlWebpackPlugin from 'html-webpack-plugin';
const path = require("path");
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin');
const MiniCssExtractPlugin = require( "mini-css-extract-plugin");
const HtmlWebpackPlugin = require( 'html-webpack-plugin');

module.exports = (env, options) => {
    const isProduction = options.mode === "production";
    const webpackConfig = {
        mode: isProduction ?  "production" : "development",
        entry: "./src/index.js",
        devtool: isProduction ? "eval" : "source-map",
        watch:  !isProduction,
        output: {
            path: path.join (__dirname, "./dist"),
            filename: "main.js"
        },
        plugins:[
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [
                  '**/*',
                  '!.git',
                ],
              }), 
            new HtmlWebpackPlugin({template:"./src/index.html"}), new MiniCssExtractPlugin(),
        ],
        module: {
            rules:[
                // {
                //     test: /\.js$/,
                //     exclude: /(node_modules|bower_components)/,
                //     use: {
                //         loader: 'babel-loader',
                //         options: {
                //             presets: ['@babel/preset-env']
                //         }
                //     }
                // },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ]
                },
                // {
                //     test: /\.html$/i,
                //     loader: "html-loader",
                // },
            ]
        }
    }
    
    return webpackConfig;
}