import webpack from 'webpack';
import {BuildOptions} from './types/config';
import {buildPlugins} from './buildPlugins';
import {buildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers';
import {buildDevServer} from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;
    console.log(mode)
    return {
        mode,
        entry: paths.entry, // стартовая точка приложения
        output: {
            filename: '[name].[contenthash].js', // как будет называться гланый файл в сборке
            path: paths.build, // путь куда будет происходить сборка,
            clean: true,
        },
        plugins: buildPlugins(options),

        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),

        devtool: isDev ? 'inline-source-map' : undefined, // чтобы видеть в каком из файлов будет ошибка
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
