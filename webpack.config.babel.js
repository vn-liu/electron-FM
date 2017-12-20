import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import autoprefixer from 'autoprefixer'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import path from 'path'

const ENV = process.env.NODE_ENV ||  'development'
const CSS_MAPS = ENV !== 'production'
module.exports = {
    target: 'electron-renderer',
    context: path.resolve(__dirname, 'app'),
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: ENV === 'production' ? '[name].[chunkhash:8].js' : 'bundle.js',
        chunkFilename: '[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.less'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            'node_modules'
        ],
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: path.resolve(__dirname, 'src'),
                enforce: 'pre',
                use: 'source-map-loader'
            },
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            sourceMaps: true,
                        }
                    }
                ]
            },
            {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: CSS_MAPS,
                                importLoaders: 1
                            }
                        },
                        {
                            loader: `postcss-loader`,
                            options: {
                                sourceMap: CSS_MAPS,
                                plugins: () => {
                                    autoprefixer({browsers: ['last 2 versions']});
                                }
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {sourceMap: CSS_MAPS}
                        }
                    ]
                })
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.(xml|html|txt|md)$/,
                use: 'raw-loader'
            },
            {
                test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
                use: ENV === 'production' ? 'file-loader?name=[path][name]_[hash:base64:5].[ext]' : 'url-loader'
            }
        ]
    },
    node: {
        fs: "empty"
    },
    plugins: ([
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:8].css',
            allChunks: true,
            disable: ENV !== 'production'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(ENV)
        }),
        new HtmlWebpackPlugin({
            template: '../index.html',
            minify: {collapseWhitespace: true}
        }),
    ]).concat(ENV === 'production' ? [
        new CleanWebpackPlugin(['build'], {
            root: __dirname
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                properties: true,
                keep_fargs: false,
                pure_getters: true,
                collapse_vars: true,
                unsafe: true,
                warnings: false,
                screw_ie8: true,
                sequences: true,
                dead_code: true,
                drop_debugger: true,
                comparisons: true,
                conditionals: true,
                evaluate: true,
                booleans: true,
                loops: true,
                unused: true,
                hoist_funs: true,
                if_return: true,
                join_vars: true,
                cascade: true,
                drop_console: true
            }
        }),
    ] : []),

    stats: {
        colors: true,
        errors: true,
        errorDetails: true
    },

    node: {
        global: true,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false,
        setImmediate: false
    },

    devtool: ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map',

    devServer: {
        port: process.env.PORT || 5555,
        host: 'localhost',
        publicPath: '/',
        historyApiFallback: true,
        openPage: '',
    }
}