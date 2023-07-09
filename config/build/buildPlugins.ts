import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import {BuildOptions} from './types/config';

// применения плагинов

// eslint-disable-next-line max-len
export function buildPlugins({paths, isDev, apiUrl}: BuildOptions): webpack.WebpackPluginInstance[] {

    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),

        // этот плагин позволяет пробрасывать из webpack переменные
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
        }),

    ]

    if (isDev) {
        plugins.push(new BundleAnalyzerPlugin({openAnalyzer: false}))
        plugins.push(new webpack.HotModuleReplacementPlugin())
    }
    return plugins
}
