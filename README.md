imgSlider
=========

图片轮播jquery插件,暂时命名为jquery.imgSlider.js



###说明
  1.  由于兼容性， jqeury版本需要为 1.x；

  2.  初始状态为图片自动轮播；

  3.  直接打开index.html即可查看效果；

  4.  暂时只支持淡入淡出的轮播效果

###参数说明
    imgList： 需要轮播的图片列表(Array)
    previous: 需要绑定上一张图片的选择器(String)
    next: 需要绑定下一张图片的选择器(String)
    auto: 是否自动轮播(Boolean)
    timeout: 自动轮播的时间间隔,单位为毫秒(Number)
###使用示例

````javascript
$('#div-carousel-img').imgSlide({
    imgList: [
        './images/lunbo_3.png',
        './images/lunbo_4.png',
        './images/lunbo_5.png',
        './images/lunbo_7.png'
    ],
    auto: true,
    previous: '#div-pre',
    next: '#div-next',
    timeout: 5000
});
```

