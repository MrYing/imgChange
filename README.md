# 基于JQuery的轮换图
 
## 使用方法

1. 调用jquery和imgChang.js
```html
<script src="https://cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
<script src="imgChange.js"></script>
```
注 ：jquery版本必须为3.0或更高版本

2. 为轮换图创建容器DOM
```html
 <div id="imgChange"></div> 
```
3. 定义对象及配置变量
```js
            //配置变量，可根据自己需求修改    
            var imgobj1 = {
                "autoChange": //自动轮换
                {
                    "isAuto": true, //是否开启自动轮换，true开启，false关闭
                    "time": 5, //自动轮换间隔时间，单位秒
                    "keepTime": 0.4, //自动轮换一次所需时间，单位秒
                    "type":"slideLeft",//(Math.floor(Math.random() * 10 + 1)) >= 5 ? "slideTop" : "slideLeft", //轮换方式，现有slideLeft和slideTop两种选择
                },
                "imgBtn": //焦点轮换
                {
                    "is": true, //是否开启焦点轮换，true开启，false关闭
                    "top": 20, //焦点与图片顶端的距离，单位px
                    "left": 10, //焦点与图片左端的距离，单位px
                    "size": 14, //焦点的大小，单位px
                    "interval": 10, //焦点间的间隔，单位px
                    "color": "rgba(255,255,255,0.45)", //焦点的颜色
                    "type": "" //焦点的类型，circular为圆形，其他为方形
                },
                "imgTips":{//图片上面显示的文字信息，内容为title的内容
                  "is":true,//是否开启显示文字，true开启，false关闭
                  "height":50,//tips高度
                  "top":0,//250,//与图片顶端的距离，单位px
                  "fontSize":20,//字体大小
                  "textAlign":"center",//文本位置
                  "color":"#fff",//字体颜色
                  "background":"rgba(0,0,0,0.45)",//tips背景颜色
                },
                "imgWidth": 1000, //图片宽度
                "imgHeight": 600, //图片高度
                "imgUrl": [ //图片地址，可以自由修改内容和数目
                    "http://dev.wangxuefeng.com.cn/pub/asset/img/bg1.jpg",
                    "http://dev.wangxuefeng.com.cn/pub/asset/img/bg2.jpg",
                    "http://dev.wangxuefeng.com.cn/pub/asset/img/bg3.jpg",
                    "http://dev.wangxuefeng.com.cn/pub/asset/img/bg4.jpg"
                ],
                "title": [ //图片标题，可以自由修改内容和数目，数目和顺序需要与图片地址保持一致
                    "风景1",
                    "风景2",
                    "风景3",
                    "风景4"
                ],
                "href": [ //点击图片跳转链接，可以自由修改内容和数目，数目和顺序需要与图片地址保持一致
                    "http://dev.wangxuefeng.com.cn/pub/asset/img/bg1.jpg",
                    "http://dev.wangxuefeng.com.cn/pub/asset/img/bg2.jpg",
                    "http://dev.wangxuefeng.com.cn/pub/asset/img/bg3.jpg",
                    "http://dev.wangxuefeng.com.cn/pub/asset/img/bg4.jpg"
                ]
            }
```
4. 调用函数
```js
imgChange("imgChangeIdLeft", imgobj1); //调用轮换函数，传参整体大容器id与配置信息
```
