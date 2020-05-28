$(document).ready(function(){
    // Modal

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
validateForms('#contact-form');
validateForms('#contact form');

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
    
});

    
