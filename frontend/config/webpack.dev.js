const path = require('path');
const config = require('./webpack.config');
const {merge} = require('webpack-merge');

module.exports = merge(config, {
    mode : "development",
    output : {
        path : path.resolve(__dirname,"../", "dist"),
        filename : "bundle-[contenthash].js", //identifier bundle
        assetModuleFilename: 'img/[name][ext]',
        clean : true, //hapus setiap bundle
    },
    watch : true, //supaya webpack selau melakukan monitor setiap perubahan file
})