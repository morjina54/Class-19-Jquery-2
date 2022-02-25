$(function(){
    'use strict'

    $(window).on('scroll',function(){
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 500){
            $("#top").fadeIn(500)
        }
        else{
            $("#top").fadeOut(500)
        }
    })

    $('#top').on('click', function(){
        $('html, body').animate(
        {
            scrollTop:0
        },
        600
        );
    });
    $ ('a').on('click', function (e){
        e.preventDefault()
        var hash =this.hash
        if (this.hash !== '') {
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top
                },
                800
            );
        }
    })
  

    // $(window).on("load", function () {
    //     $("#preloader").fadeOut(500);
    // });
})