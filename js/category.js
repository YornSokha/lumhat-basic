
//BackToTop
$(function () {
    $(".subject").on("click",function () {
        $('#loading').show();
    });

    $('#loading').hide();
     $(".scrollTop").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollTop').fadeIn();
        } else {
            $('.scrollTop').fadeOut();
        }
    });

    $('.scrollTop').click(function () {
        "use strict";
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    /** END BACK TO TOP **/

        $("#langkm").click(function () {
            $.ajax({
                url:"/?lang=km",
                method:"get",
                success:function () {
                    location.reload();
                }
            })
        });

    $("#langen").click(function () {
        $.ajax({
            url:"/?lang=en",
            method:"get",
            success:function () {
                location.reload();
            }
        })
    });

});


















