jQuery(function ($) {
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.dropdown-submenu .show').removeClass("show");
        });

        return false;
    });

    // On Scroll
    function listenForScrollEvent(el){
        el.on("scroll", function(){
            if($(window).scrollTop() > 20){
                $(".header-classic").css({"background-color":"#774cf3"});   
            }
            else{
                $(".header-classic").css({"background-color":"transparent"});
            }
        });
    }

    //Counter Up
  $('.count').counterUp({delay: 40, time: 3000});

  // new WOW().init();
  new WOW().init({mobile: true});

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        nav:false,
        dots:false,
        fluidSpeed: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});

