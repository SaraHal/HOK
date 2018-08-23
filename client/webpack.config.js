
module.exports = {
    entry: [
        './src/index.js'
    ],
    mode: 'development',
    devtool: 'cheap-module-inline-source-map',
    output: {
        path: __dirname,
        filename: "bundle.js"
    },

    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    }
}