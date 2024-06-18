$(document).ready(function(){
    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 700) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });

    setTimeout(function(){
        $('.preloader').fadeOut();
    },3000);
     
});