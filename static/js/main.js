(function ($) {
    var carousel = $('.js-carousel');
    carousel.jcarousel({
        wrap: 'circular'
    });
    $('.js-carousel-prev').click(function (clickEvent) {
        clickEvent.preventDefault();
        carousel.jcarousel('scroll', '-=1');
    });
    $('.js-carousel-next').click(function (clickEvent) {
        clickEvent.preventDefault();
        carousel.jcarousel('scroll', '+=1');
    });
} (jQuery));