$(document).ready(function () {
    new WOW().init();
    var scrollTop = 0;
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        scrollHeight = screen.availHeight - 200;
        // $('.counter').html(scrollTop);

        if (scrollTop >= scrollHeight) {
            $('#main-nav').addClass('scrolled-nav');
        } else if (scrollTop < scrollHeight) {
            $('#main-nav').removeClass('scrolled-nav');
        }
    });

	$('.popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 10,
		preloader: true,
		fixedContentPos: false
	});
});