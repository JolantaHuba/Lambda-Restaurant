$('.nav__burger').on('click', function () {
    $('.nav__icon').toggleClass('active');
    $('.nav__list').slideToggle();
})