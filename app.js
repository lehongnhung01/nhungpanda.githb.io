$(function () {
    $('.menu').click(function (e) { 
        e.preventDefault();
        $('.menu').removeClass('active');
        $(this).addClass('active');
    });

    $(window).scroll(function () { 
        if (window.pageYOffset >= 200) {
            $('nav').addClass('thunho');
        } else {
            $('nav').removeClass('thunho');
        }
        
    });

    $('.logo').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop:$('.header').offset().top - 80
    }, 1000);
    });

    $('.menu1').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('header').offset().top - 80
        }, 1000)
    });

    $('.menu2').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi1').offset().top - 80
        }, 1000)
    });

    $('.menu3').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi2').offset().top - 80
        }, 1000)
    });



    

    $(window).scroll(function () { 
        if (window.pageYOffset >= ($('.khoi2').offset().top -80)) {
            $('.menu').removeClass('active');
            $('.menu3').addClass('active');
        } else if (window.pageYOffset >= ($('.khoi1').offset().top -80)) {
            $('.menu').removeClass('active');
            $('.menu2').addClass('active');
   
        } else {
            $('.menu').removeClass('active');
            $('.menu1').addClass('active');
        }
            
    });

});