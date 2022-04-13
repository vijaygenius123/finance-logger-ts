const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{
            test: /\.ts/,
            use: 'ts-loader',
            exclude: /node_modules/
        },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader','postcss-loader']
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [{from: 'src/index.html', to: 'index.html'}]
        })
    ],
    devServer: {
        watchFiles: ["src/**/*"],
    }
}
