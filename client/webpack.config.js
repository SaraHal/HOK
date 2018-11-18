
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
        rules:[
            {
                loader: 'babel-loader',
                exclude: /node_modules\/(?!(react-bootstrap-sidebar)\/).*/
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader"],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    }
}