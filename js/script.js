$(document).ready(function(){
    $('.slider').slick({
        slidesToShow:4
    });
    $('.header_nav li a, .footer_nav li a').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); //
        }
        return false;
    });

    $("a.fancy").fancybox({
        'transitionIn' : 'none',
        'transitionOut' : 'none',
        'titlePosition' : 'over'
    });
})