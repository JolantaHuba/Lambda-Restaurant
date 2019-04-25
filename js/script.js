$('.menu__burger').on('click', function () {
    $('.menu__icon').toggleClass('active');
    $('.menu__list').slideToggle();
})