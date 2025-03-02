import * as path from 'path'
import  webpack from 'webpack'
import {buildPaths, buildEnv, buildOptions} from "./config/build/types/config";
import {WebpackConfiguration} from "webpack-cli";
import {buildPlugins} from "./config/build/buildPlugins";
import {buildLoaders} from "./config/build/buildLoaders";
import {buildResolvers} from "./config/build/buildResolvers";
import {buildDevServer} from "./config/build/buildDevServer";

function buildWebpackConfig(options: buildOptions): WebpackConfiguration{
    const {mode, isDev, paths} = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.output,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map': undefined,
        devServer: isDev ? buildDevServer(options): undefined,
    }
}

export default (env: buildEnv) =>{
    const paths: buildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;
    const config: webpack.Configuration = buildWebpackConfig({
        mode: mode,
        paths,
        isDev,
        port: PORT,
    })
    return config
};