"use strict";
(function ($) {

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.work__next',
            prevEl: '.work__prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },

    });
    $('.header__link').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
    });
    $('.header__button').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
    });


})(jQuery);

