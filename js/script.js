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



    var currentCount = 1;
    function reload(){

        var  player = $('.ico-player') ;
        var  watcher = $('.ico-watcher') ;
        var  player_clone = $('.ico-player.clone') ;
        var  watcher_clone = $('.ico-watcher.clone') ;




        var counter = function makeCounter() {
                return currentCount++;
        }
        var count=  counter() ;

        var i=0,plus=0,minus = 0;

        var timerId = setInterval(function() {
            i++;
          plus =  +(i*0.1).toFixed(1)

;
            minus = +(1 - i*0.1).toFixed(1);

            console.log(minus, plus)
            if(count%2) {
                player.css({'opacity': minus});
                watcher.css({'opacity': minus});
                player_clone.css({'opacity': plus});
                watcher_clone.css({'opacity': plus});
            }
            else{
                player.css({'opacity': plus}) ;
                watcher.css({'opacity': plus}) ;
                player_clone.css({'opacity': minus}) ;
                watcher_clone.css({'opacity': minus}) ;
            }
        }, 50);

// через 5 сек остановить повторы
        setTimeout(function() {
            clearInterval(timerId);

        }, 500);


    }

    setInterval(reload, 10000);
})