$(document).ready(function () {
    const gallerySlider = new Swiper(".section7 .swiper", {
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
        },
        loop : true
    });

    let fixStart = $("nav").offset().top;
    $(window).on("scroll", function() {
        let scr = $(this).scrollTop();
        if(scr >= fixStart) {
            $("nav").css({
                "position" : "fixed",
                "top" : 0,
                "left" : 0
            });
        } else {
            $("nav").css({
                "position" : "unset"
            });
        }
    });
});