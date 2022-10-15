const { watch } = require('fs');
const path = require('path');

module.exports = {
    mode : "development",
    entry : "./src/index.js",
    output : {
        path : path.resolve(__dirname, "dist"),
        filename : "bundle.js"
    },
    watch : true, //supaya webpack selau melakukan monitor setiap perubahan file
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