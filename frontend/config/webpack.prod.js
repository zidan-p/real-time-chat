const path = require('path');
const config = require('./webpack.config');
const {merge} = require('webpack-merge');


module.exports = merge(config,{
    mode : "production",
    output : {
        path : path.resolve(__dirname,"../", "dist"),
        filename : "bundle.js",
        clean : true, //hapus setap bundle
        assetModuleFilename: 'img/[name]-[hash][ext]',
    },
})