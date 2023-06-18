import webpack from 'webpack';
import {BuildOptions} from './types/config';
// показываем какие файлы будут импортироваться без указания расширения
export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}
