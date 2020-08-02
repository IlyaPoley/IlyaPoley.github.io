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
/* Проверка формы */
function validateForms(form){
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа!")
              },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            }
        }
    });
}

validateForms('#contact-form');
validateForms('#contact form');


$('input[name=phone]').mask("+7 (999) 999-99-99");

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#back_form, #contact-form').fadeOut();
        $('.modal, #contact').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});

$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

/* Листать работу*/
function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.jobs-item__content').eq(i).toggleClass('jobs-item__content_active');
            $('.jobs-item__list').eq(i).toggleClass('jobs-item__list_active');
        });
    });
}

toggleSlide('.jobs-item__link');
toggleSlide('.jobs-item__back');

    new WOW().init();
});