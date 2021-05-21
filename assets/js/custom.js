$(window).on("scroll", function() {

    if ($(document).scrollTop() > 0) {
        $(".custom-nav").addClass("scroll");
        $(".custom-nav").addClass("fixed-top");
    } else {
        $(".custom-nav").removeClass("scroll");
        $(".custom-nav").removeClass("fixed-top");

    }

});
$(function() {
    $('.navbar-nav .nav-item').on('click', function() {
        $('.navbar-nav .nav-item.active').removeClass('active');
        $(this).addClass('active');
    });
});
// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(400); // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(400); // Else fade out the arrow
    }
});
$('#return-to-top').click(function() { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});
////////////////////////////////////////////// 
//!banner-slider
$(".header-slider").owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    loop: true,
    // autoplay: true,
    // autoplayTimeout: 2800,
    responsive: {
        0: {
            items: 1
        }
    }
});
////////////////////////////////////// 
//COUNTER JS

$('.counter').counterUp({
    delay: 10,
    time: 1000
});
///////////////////////////////////////////// 
//! CLIENT*
$('.client-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 2800,
        loop: true,
        margin: 20,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },

            1000: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
    })
    ///////////////////////////////// 
    // ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(400); // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(400); // Else fade out the arrow
    }
});
$('#return-to-top').click(function() { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});
/////////////////////////////////////// 
/* ---------------------------------------------
        portfolio filtering
        --------------------------------------------- */

var $portfolio = $('.portfolio');
if ($.fn.imagesLoaded && $portfolio.length > 0) {
    imagesLoaded($portfolio, function() {
        $portfolio.isotope({
            itemSelector: '.portfolio-item',
            filter: '*'
        });
        $(window).trigger("resize");
    });
}

$('.portfolio-filter').on('click', 'a', function(e) {
    e.preventDefault();
    $(this).parent().addClass('active').siblings().removeClass('active');
    var filterValue = $(this).attr('data-filter');
    $portfolio.isotope({ filter: filterValue });
});


/*---------------------------------------------
 Portfolio popup
 ---------------------------------------------*/

$(".portfolio-gallery").each(function() {
    $(this).find(".popup-gallery").magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        }
    });
});
jQuery(document).ready(function() {
    jQuery('.mean-wrapper').meanmenu();
});