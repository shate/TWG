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

    function Replase(elem){

        this.elem = elem;
        console.log(this.elem)

        this.anim = function(){
            return    this.elem.animate({
                opacity: 1
            }, 1000);
        }

    }

    function reload(){


        var  player = $('.ico-player') ;
        var  watcher = $('.ico-watcher') ;
        var  player_clone = $('.ico-player.clone') ;
        var  watcher_clone = $('.ico-watcher.clone') ;

      if($("i").is(".ico-watcher.clone"))  return;

        var player_opt= {
            marginLeft: 30 ,
            opacity: 0
        }
        var watcher_opt= {
            marginLeft: -540 ,
            opacity: 0
        }


        watcher.clone().appendTo($('#stage')).css(player_opt).addClass('clone');

       var clone= new Replase(watcher_clone) ;
        clone.anim()

    }

    setInterval(reload, 5000);
})