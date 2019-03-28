//存放prod配置
const path = require('path');
//导入合并模块
const merge = require("webpack-merge");
const common = require("./webpack.base");

module.exports=merge(common,{
    module:{},
    plugins:[],
    mode:'production',
    output:{
        //contenthash若文件内容不变，则contenthash名称不变
        filename:'js/[name].[contenthash].js',
        path:path.resolve(__dirname,'../dist')
    }
})