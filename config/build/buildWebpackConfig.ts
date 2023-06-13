import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {paths, mode} = options

    return {
        mode: mode,
        entry: paths.entry, //стартовая точка приложения
        output: {
            filename: '[name].[contenthash].js', //как будет называться гланый файл в сборке
            path: paths.build, // путь куда будет происходить сборка,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers(),
    }
}