$(document).ready(function(){
/* открытие модального окна */
$('[data-modal=back_form]').on('click', function() {
    $('.modal_back, #back_form').fadeIn('slow');
});

$('[data-modal=contact]').on('click', function() {
    $('.modal_contact, #contact').fadeIn('slow');
});

/* закрытие модального окна */
$('.modal__close').on('click', function() {
    $('.modal_back, .modal_contact, #back_form, #contact, #thanks').fadeOut('slow');
});

/* Кнопка вверх */
$(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});
$("a[href=#up]").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

    new WOW().init();
});
