/* eslint-disable import/no-commonjs */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const postcssNesting = require('postcss-nesting');
const postcssFlexBugsFixes = require('postcss-flexbugs-fixes');
const autoprefixer = require('autoprefixer');
const dotenv = require('dotenv');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const validateEnv = require('./validateEnv');

module.exports = (env, argv) => {
    /* ENV VARIABLES START */
    const envConfig = validateEnv(dotenv.config().parsed);

    console.log('ENV variables: \n', JSON.stringify(envConfig, null, 4));

    const DEV_MODE = envConfig.NODE_ENV === 'development';
    const ANALYZE_MODE = envConfig.NODE_ENV === 'anal';
    /* ENV VARIABLES END */

    const HASH_MASK = `[name]${DEV_MODE ? '' : '--[contenthash:8]'}.min`;

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
                            modules: {
                                mode: 'local',
                                localIdentName: DEV_MODE ? '[name]__[local]--[hash:base64:5]' : '[hash:base64]',
                                exportLocalsConvention: 'dashesOnly',
                            },
                            importLoaders: 1,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                plugins: [
                                    postcssNesting(),
                                    !DEV_MODE && postcssFlexBugsFixes(),
                                    !DEV_MODE && autoprefixer({flexbox: 'no-2009'}),
                                ].filter(Boolean),
                            },
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: [
                    DEV_MODE ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.(ttf|png|jpe?g|svg)$/i,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: 'media/[name].[contenthash:8].[ext]',
                },
            },
        ],
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
        minimize: !DEV_MODE,
        minimizer: DEV_MODE ? [] : [new TerserPlugin({
            terserOptions: {
                ecma: 2017,
                // Fix Safari 10/11 bugs
                safari10: true,
            },
            parallel: true,
            extractComments: false,
        })],
    };

    return {
        devServer: {
            contentBase: path.join(__dirname, 'dist/'),
            compress: true,
            port: envConfig.PORT || 4200,
            watchContentBase: true,
            progress: true,
            hot: true,
            historyApiFallback: true,
        },
        resolve: {
            modules: ['node_modules', path.resolve(__dirname, 'src')],
            extensions: ['.js', '.ts', '.tsx'],
            alias: {
                src: path.resolve('./src'),
            },
        },
        module,
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: `css/${HASH_MASK}.css`,
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
            new WebpackNotifierPlugin({ alwaysNotify: false }),
            ...ANALYZE_MODE ? [new BundleAnalyzerPlugin()] : [],
            new webpack.DefinePlugin({
                'process.env': JSON.stringify(envConfig),
            }),
        ],
        entry: {
            main: './src/App.tsx',
        },
        devtool: 'source-map',
        output: {
            filename: DEV_MODE ? `assets/${HASH_MASK}.js` : `assets/${HASH_MASK}.js`,
            path: path.resolve(__dirname, 'dist/'),
            publicPath: '/',
        },
        performance: {
            hints: false,
        },
        optimization: optimizations,
    };
};
