$('.nav__burger').on('click', function () {
    $('.nav__icon').toggleClass('active');
    $('.nav__list').slideToggle();
})

$('.nav__link').hover(function () {
    $(this).parent().toggleClass('active');
})

$(document).on('scroll', function () {
    if ($(document).scrollTop() > 10) {
        $('.nav, .nav__logo, .nav__burger').addClass('scrolled');
    } else $('.nav, .nav__logo, .nav__burger').removeClass('scrolled');
})