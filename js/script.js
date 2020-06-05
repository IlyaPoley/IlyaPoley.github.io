$(document).ready(function(){
    // Modal
    $('[data-modal=contacts]').on('click', function() {
        $('.overlay, #contacts').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #contacts, #thanks').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });
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
                },
                textarea: {
                    required: true,
                    minlength: 5
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
                },
                textarea: {
                    required: "Пожалуйста, введите текст",
                    textarea: "Сообщение слишком короткое"
                },
            },
        });
        
       
    
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#contacts').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
}

validateForms('#contacts-form');
validateForms('#contacts form');

    $('ul.jobs__tabs').on('click', 'li:not(.jobs__tab_active)', function() {
        $(this)
          .addClass('jobs__tab_active').siblings().removeClass('jobs__tab_active')
          .closest('div.container').find('div.jobs__content').removeClass('jobs__content_active').eq($(this).index()).addClass('jobs__content_active');
    });

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
    


// Smooth scroll and pageup
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

jQuery(function($){
$('a[href*="#"]').on('click.smoothscroll', function( e ){
    var hash    = this.hash, _hash   = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
    if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
    var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
    if( ! $target.length ) return;
    e.preventDefault();
    $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 900, 'swing', function(){
    window.location.hash = hash;
    });
    });
    });

new WOW().init();
});
