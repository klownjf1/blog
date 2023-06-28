import webpack from 'webpack';
import {BuildOptions} from './types/config';
import {buildCssLoader} from './loaders/buildCssLoaders';
import {buildSvgLoader} from './loaders/buildSvgLoader';

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    // Если не используем тайпскрипт - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    // loader for svg
    const svgLoader = buildSvgLoader()
    // loader for png, jpg...
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = buildCssLoader(isDev)

    const reactRefreshPlugin = {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: require.resolve('babel-loader'),
                options: {
                    plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
                },
            },
        ],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],

                ],
            },
        },
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
}
