

$('#a-carousel').remove();
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