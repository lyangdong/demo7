
$(function(){
    //推荐切换方法
    function myFuct(a){
        $('.main-banner ul li').removeClass('item')
        $(a).addClass('item');
        var index = $(a).index()+1
        $('.main-banner').find('span').css('background','url("images/banner-'+$('.item').text()+'.jpg")');
        $('.main-banner').find('span p').css('display','none');
        $('.main-banner').find('.item'+index).css('display','block')
    }
    $('.main-banner ul li').mouseenter(function(){
       var a =  $(this)
        myFuct(a)
    });
    //自动播放
    setInterval(function(){
        var a= $('.item').next();
        if(a.text()==false){
            a = $('.main-banner ul li').eq(0)
            myFuct(a)
        }
        myFuct(a)
    },2000)
    //传递图片链接
    $('.main-banner').click(function(){
        window.location.href = $('.item').find('a').attr('href')
    });
    //显示分享
    $('.box-img,.main-media-box-img').mouseenter(function(){
        $(this).find('.main-share').css('display','block')
    });
    $('.box-img,.main-media-box-img').mouseleave(function(){
        $('.main-share').css('display','none')
    });

    //更新列表的切换
    $('.update-list .title').mouseenter(function(){
        $('.update-list .title').removeClass('active');
        $(this).addClass('active');
        $('.update-list-rank ul').removeClass('active');
        $('.update-list-rank-'+$(this).attr('name')).addClass('active')
    })
    //偶数列背景色
    $('.update-list-rank  li:odd').css('background-color','#eeeeee');
    $('.update-list-rank  li:even').css('background-color','white');
    $('.main-bar-box:odd').css('background-color','#eeeeee')
});
