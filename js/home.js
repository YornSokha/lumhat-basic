$("#down-arrow-blog").click(function () {
    $('body,html').animate({
        scrollTop: $("img#down-arrow").offset().top + $("img#down-arrow").outerHeight(true) - 60
    }, 900);
});