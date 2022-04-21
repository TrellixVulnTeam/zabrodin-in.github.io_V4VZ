$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/icon_arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/icon_arrow_right.png"></button>',
        // fade: true,
        // cssEase: 'linear'
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
        // slidesToShow: 4,
        // slidesToScroll: 1,
        // responsive: [
        //     {
        //     breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
      });
  });

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