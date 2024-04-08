$(document).ready(function () {
 
    
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });


    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    
    $('.navbar .menu li a').click(function (e) {
        e.preventDefault(); 
        var targetSection = $(this).attr('href');
        var targetPosition = $(targetSection).offset().top - $('.navbar').outerHeight();
        
        $('html, body').animate({
            scrollTop: targetPosition
        }, 500);
    });

    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    
    $(".carousel.owl-carousel").owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Creator", "Innovator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});
