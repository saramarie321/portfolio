
$('body').prepend('<a href="#" class="back-to-top fa fa-angle-up"></a>');

var amountScrolled = 300;

$(window).scroll(function() {
    if ($(window).scrollTop() > amountScrolled) {
        $('a.back-to-top').fadeIn('slow');
    } else {
        $('a.back-to-top').fadeOut('slow');
    }
});

$('a.back-to-top, a.simple-back-to-top').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 200);
    return false;
});

$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});