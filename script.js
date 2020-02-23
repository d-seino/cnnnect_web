$(function () {
    $(function () {
        var $header = $('#top-head');
        // Nav Fixed
        $(window).scroll(function () {
            if ($(window).scrollTop() > 350) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });
        // Nav Toggle Button
        $('#nav-toggle').click(function () {
            $header.toggleClass('open');
        });
    });
    // ページ内リンクスムーズスクロール
    $('a[href^="#"]').click(function () {
        var speed = 1000;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
    // slick
    $('.slick_slider').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
        autoplaySpeed: 100,
        // variableWidth: true,
    });
    
    $('.accordion-content').hide();

    $('.accordion-click').click(function () {
        $(this).next().slideToggle();
    });
    //faqs_accordion
    // $(".accordion li a").on("click", function () {
    //     $(this).next().slideToggle();
    //     // activeが存在する場合
    //     if ($(this).children(".accordion_icon").hasClass('active')) {
    //         // activeを削除
    //         $(this).children(".accordion_icon").removeClass('active');
    //     }
    //     else {
    //         // activeを追加
    //         $(this).children(".accordion_icon").addClass('active');
    //     }
    // });
});

