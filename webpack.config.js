const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    devtool: 'inline-source-map',
    
    entry: './src/app.ts',
    
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    
    resolve: {
        extensions: ['.ts', '.js'],
    },
    
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./src/extension/manifest.json", to: "manifest.json" }
            ],
        }),
    ],
    
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
