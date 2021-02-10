/* eslint-disable import/no-commonjs */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    const DEV_MODE = env === 'development';

    const module = {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /\.module\.css$/,
                exclude: /node_modules/,
                use: [
                    DEV_MODE ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|svg)$/i,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: 'media/[name].[contenthash:8].[ext]',
                },
            },
        ]
    };

    const optimizations = {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
        minimizer: DEV_MODE ? [] : [new UglifyJsPlugin()],
    };

    return {
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            port: 4200,
            watchContentBase: true,
            progress: true,
            hot: true,
            open: true,
            historyApiFallback: true,
        },
        resolve: {
            modules: ['node_modules', path.resolve(__dirname, 'src')],
            extensions: ['.js', '.ts', '.tsx'],
            alias: {
                src: path.resolve('./src'),
            }
        },
        module,
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
            new WebpackNotifierPlugin({ alwaysNotify: false }),
        ],
        entry: {
            main: './src/App.tsx',
        },
        output: {
            filename: DEV_MODE ? 'assets/[name].[hash].js' : 'assets/[name].[chunkhash].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
        },
        performance: {
            hints: false,
        },
        optimization: optimizations,
    };
};
