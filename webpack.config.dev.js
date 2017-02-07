var webpack             = require('webpack');
var HtmlWebpackPlugin   = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',

    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8000',
            'webpack/hot/dev-server',
            './src/main.js',
        ],
        vendor: [
            'react',
            'react-dom',
        ],
    },

    output: {
        path: __dirname,
        pathinfo: true,
        filename: 'app.js',
        publicPath: '/',
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.svg'],
        modules: [
            'src',
            'node_modules',
        ],
    },

    devServer: {
        stats: 'errors-only',
        historyApiFallback: {
          index: '/'
        }
    },

    module: {
        loaders: [
            {
                test: /\.(scss|css)$/,
                loaders: ["style", "css", "sass"]
            }, {
                test: /\.jsx?$/,
                exclude: [/node_modules/, /.+\.config.js/],
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.(jpe?g|gif|png)$/i,
                loader: 'url-loader?limit=10000'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.ttf$/,
                loader: "url-loader?limit=10000"
            }, {
                test: /\.svg?$/,
                loader: 'svg-sprite?name=[name]_[hash]'
            }
        ],
    },

    plugins: [
        // Generates an `index.html` file with the <script> injected.
        new HtmlWebpackPlugin({
            inject: true,
            template: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: 'vendor.js',
        }),
        new webpack.DefinePlugin({
            __CLIENT__: JSON.stringify(true),
            __DEVELOPMENT__: true,
            __DEVTOOLS__: true
        }),
    ]
};
