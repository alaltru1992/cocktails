import * as path from 'path'
import  webpack from 'webpack'
import {buildPaths, buildEnv, buildOptions} from "./types/config";
import HTMLWebpackPlugin from "html-webpack-plugin";
import {WebpackConfiguration} from "webpack-cli";
import {Configuration as DevServerConfiguration} from "webpack-dev-server";
import miniCssExtractPlugin from "mini-css-extract-plugin";

function buildDevServer({port}: buildOptions): DevServerConfiguration{
    return {
        port,
        open: true,
        historyApiFallback: true,
    }
}

function buildLoaders(options:buildOptions): webpack.RuleSetRule[]{
    const {isDev} = options;

    const tsLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            }
        ]
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : miniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options:{
                    modules: {
                        auto : (path: string) => path.includes('.module.'),
                        localIdentName: isDev ? "[local]__[hash:base64:5]" : "[hash:base64:5]",
                    },
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }
    return [
        tsLoaders,
        cssLoaders,
        svgLoader,
        fileLoader
    ]
}

function buildPlugins(options: buildOptions): webpack.WebpackPluginInstance[] {
    const {paths} = options;
    return [
        new webpack.ProgressPlugin(),
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new miniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"
        })
    ]
}

function buildResolvers(options:buildOptions): webpack.ResolveOptions{
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [
            options.paths.src,
            'node_modules'
        ],
        alias:{},
        mainFiles:['index']
    }
}

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