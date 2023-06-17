import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    // Если не используем тайпскрипт - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    // loader for svg
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    // loader for png, jpg...
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev? 'style-loader': MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base:64:5]'
                            : '[hash:base64:8]'
                    },

                }
            },
            "sass-loader",
        ]
    }
    return [
        typescriptLoader,
        cssLoader,
        svgLoader,
        fileLoader
    ]

}