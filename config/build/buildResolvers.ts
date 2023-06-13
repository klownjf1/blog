import webpack from "webpack";
// показываем какие файлы будут импортироваться без указания расширения
export function buildResolvers(): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}