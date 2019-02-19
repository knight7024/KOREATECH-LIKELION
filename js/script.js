$(document).ready(function () {
    new WOW().init();

    $('.popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 10,
        preloader: true,
        fixedContentPos: false
    });

    $('#scroll-to-top').on('click', function () {
        $('body, html').animate({
            scrollTop: 0
        }, 200);
    });
});

$(window).on('scroll', function () {
    var scrollTop = 0;
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        scrollHeight = screen.availHeight - 250;

        if (scrollTop >= scrollHeight) {
            $('#main-nav').addClass('scrolled-nav');
            $('#scroll-to-top').addClass('hideElement');
        } else if (scrollTop < scrollHeight) {
            $('#main-nav').removeClass('scrolled-nav');
            $('#scroll-to-top').removeClass('hideElement');
        }
    });
});