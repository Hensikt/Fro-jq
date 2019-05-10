$(document).ready(function () {
    // test
    // $('body').hide(3000).delay(1000).show(1000);

    // muis event
    $('section img').mouseenter(function () {
        $(this).fadeTo(600, .01);
    }).mouseleave(function () {
        $(this).fadeTo(1000, 1);
    }).click(function () {
        $(this).next().toggle(700)
    });

    //footer
    $('footer').click(function () {
        $(this).animate({
            top: '-=50px',
            opacity: '-=.2'
        }, 900)
    }).dblclick(function () {
        $(this).animate({
            top: '0',
            opacity: '1'
        }, 900)
    });

    //slick slider
    $(".regular").slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});
