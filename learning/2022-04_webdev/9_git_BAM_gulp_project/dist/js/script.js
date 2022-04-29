$(document).ready(function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    // $('.catalog-item__link').each(function(i) {
    //     $(this).on('click', function(e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     }
    //     );
    // }
    // );
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // MODAL
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    $('.catalog-item__btn').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    // $('#consultation form').validate({
    //     rules: {
    //         name: {
    //             required: true,
    //             minlength: 2
    //         },
    //         tel: "required",
    //         email:   {
    //             required: true,
    //             email: true
    //         }
    //     },
    //     messages: {
    //         name: {
    //             required: "Пожалуйста, введите свое имя",
    //             minlength: jQuery.validator.format("Минимум {0} символа!")
    //         },
    //         email: {
    //           required: "Мы не можем продолжить без вашей почты",
    //           email: "Пожалуйста, придерживайтесь формата name@domain.com"
    //         },
    //         tel: {
    //             required: "Без указания телефона никуда",
    //             number: "Пожалуйста вводите номер нормально"
    //         }
    //     }
    // });
    // $('#order form').validate();
    // $('#consultation-form').validate();

    function validateForm(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                tel: "required",
                email:   {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Минимум {0} символа!")
                },
                email: {
                  required: "Мы не можем продолжить без вашей почты",
                  email: "Пожалуйста, придерживайтесь формата name@domain.com"
                },
                tel: {
                    required: "Без указания телефона никуда",
                    number: "Пожалуйста вводите номер нормально"
                }
            }
        });
    };

    validateForm('#consultation form');
    validateForm('#order form');
    validateForm('#consultation-form');

    
    $('input[name=tel]').mask("+7 (999) 999-9999");

    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        };

        $.ajax({
            type: 'POST',
            url: 'mailer/smart.php',
            data: $(this).serialize()
        }).done(function() {
            $(this).find('input').val('');
            // closing window, showing message
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn();
            // reset
            $('form').trigger('reset');
        });
        return false;
    });

    // SMOOTH SCROLL + PAGEUP
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        };
    });
    
    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();


});

//     $('.carousel__inner').slick({
//         speed: 1200,
//         adaptiveHeight: true,
//         // autoplay: true,
//         // autoplaySpeed: 2000,
//         prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/icon_arrow_left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="img/icons/icon_arrow_right.png"></button>',
//         // fade: true,
//         // cssEase: 'linear'
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//         // slidesToShow: 4,
//         // slidesToScroll: 1,
//         // responsive: [
//         //     {
//         //     breakpoint: 1024,
//         //         settings: {
//         //             slidesToShow: 3,
//         //             slidesToScroll: 3,
//         //             infinite: true,
//         //             dots: true
//         //         }
//         //     },
//         //     {
//         //         breakpoint: 600,
//         //         settings: {
//         //             slidesToShow: 2,
//         //             slidesToScroll: 2
//         //         }
//         //     },
//         //     {
//         //         breakpoint: 480,
//         //         settings: {
//         //             slidesToShow: 1,
//         //             slidesToScroll: 1
//         //         }
//         //     }
//             // You can unslick at a given breakpoint now by adding:
//             // settings: "unslick"
//             // instead of a settings object
//       });
//   });

// var name = 'Ivan';
// let number = 7;
// const pi = 3.14;

// let obj = {
//     name: 'apple',
//     color: 'green',
//     weight: 200
// }

// console.log(obj);

// alert(1234);
// console.log('qwdqw');
// console.log(number);

// let answere = confirm('Вам есть 18?');
// console.log(answere);


// answere or null
// let answere = prompt('Вам есть 18?', 'Yes');
// console.log(answere);

// console.log(4+4);
// console.log(4-name);
// console.log(4+name);

// let isChecked = true,
//     isClose = false;

// console.log(isChecked && isClose);

// console.log(isChecked || isClose);

// if (3*4 == 8*1) {
//     console.log('Тождественны');
// } else {
//     console.log('Не тождественны');
// }




// let answere = confirm('Вам есть 18?');
// console.log(answere);
// if (answere) {
//     console.log('Проходите');
// } else {
//     console.log('Уходите');
// }

// const num = prompt('Введите число', '');
// if (num < 50) {
//     if (num == null) {
//         console.log('Вы ничего не ввели')
//     } else {
//         console.log('Меньше 50')
//     }
// } else if (num > 50) {
//     console.log('Больше 50')
// } else {
//     console.log('Равно 50')
// }




// for (let i = 1; i < 8; i++) {
//     console.log(i)
// }

// function logging(a, b) {
//     console.log(a + b)
// }
// logging(4, 'text');

// logging(4, 9);



// TINY SLIDER
var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    controlsText: [
        '<img src="img/icons/icon_arrow_left.png">',
        '<img src="img/icons/icon_arrow_right.png">'
    ],
    responsive: {
        320: {
            items: 1,
            nav: true
        },
        640: {
            items: 1,
            edgePadding: 20,
            gutter: 20,
            items: 1,
            nav: true
        },
        700: {
            items: 1,
            gutter: 30,
            nav: true
        },
        1000: {
            items: 1,
            nav: true
        }
    }
});
// document.querySelector('.prev').onclick = function () {
//     slider.goTo('prev');
// };
// document.querySelector('.next').onclick = function () {
//     slider.goTo('next');
// };

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});