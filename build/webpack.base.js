//存放dev和prod的通用配置
const path = require('path')
const webpack = require('webpack');
//导入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//导入html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //入口
    entry:'./src/index.js',
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    plugins:[
        //解决vender后面的hash每次都改变
        new webpack.HashedModuleIdsPlugin(),
        //引入vue-loader插件
        new VueLoaderPlugin(),
        //引用html插件
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../index.html')
        })
    ]
}