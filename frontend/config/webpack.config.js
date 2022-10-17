const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : path.resolve(__dirname, "../", "src", "index.js"),
    plugins: [
        // plugin supaya file html juga iku digenerate
        new HtmlWebpackPlugin({
            template : path.resolve(__dirname, "../", "src", "template.html"),// "./src/template.html"
        }),
    ], 
    devtool : false, //merujuk pada penggunakan eval untuk hasil bundle
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"], //hati2 dengan urutanya, karena webpack membcaa loader dari kanan ke kiri
            },
        ],
    },
}