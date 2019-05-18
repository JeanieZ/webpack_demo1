const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
  //打包入口
  entry:"./src/main.js",
 
  //打包文件存放位置
  output:{
    path:path.resolve(__dirname,"./dist"),
    filename:"bundle.js"
  },

  mode:"development",

   module:{
        rules:[
            /*css-loader解析.css文件  遇到@import就将相应的样式文件引入（如果没有css-loader，就没法解析这类语句）
                最后计算完  通过style-loader生成一个内容为解析完的css代码的style标签
                放到head标签中
            */
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            //图片处理
            {
                test:/\.(png|jpg|gif)$/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            output:"/images",
                        }
                    }
                ]
            }
        ]
  },
  //相应的插件
  plugins:[
    new HtmlWebpackPlugin({
        filename:"index.html", //输出文件名
        template:path.resolve(__dirname+"/index.html") // 以当前文件目录下的index.html文件为模板生成dist/index.html文件
    }),
    new CleanWebpackPlugin(),
  ],

  devServer:{//配置此静态文件的服务器，用来预览打包的项目
    inline:true,//打包后加入一个websocket客户端
    hot:true,//热加载
    contentBase:path.resolve(__dirname+"dist"),//开发服务运行时的根目录
    host:"localhost",//主机地址
    port:9090,//端口号
    compress:true,//开发服务器是否启动gzip等压缩
  }
}