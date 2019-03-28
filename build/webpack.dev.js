//存放dev配置
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const path = require("path");

module.exports = merge(common,{
    devtool:'inline-source-map',
    //开发服务器
    devServer:{
        contentBase:'../dist'
    },
    //输出
    output:{
        //每次保存hash都变化
        filename:'js/[name].[hash].js',
        path:path.resolve(__dirname,'../dist')
    },
    module:{},
    mode:'development'
})