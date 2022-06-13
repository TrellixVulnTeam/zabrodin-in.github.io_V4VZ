'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');

// const phoneAnimation = images[0].animate([
//     // first point, final point and middle points
//     {transform: 'translateY(0px)'},
//     {transform: 'translateY(100px)'},
//     {transform: 'translateY(-100px)'},
//     {transform: 'translateY(0px)'}
// ], {
//     duration: 3000,
//     iterations: Infinity
// });


let phoneAnimation;
btnPhone.addEventListener('click', () => {
    if (!phoneAnimation) {
        phoneAnimation = images[0].animate([
            {
                transform: 'translateY(0px) rotate(0deg)',
                filter: 'opacity(1)'
            },
            {
                transform: 'translateY(100px) rotate(180deg)',
                filter: 'opacity(.5)'
            },
            {
                transform: 'translateY(-100px) rotate(270deg)',
                filter: 'opacity(.75)'
            },
            {
                transform: 'translateY(0px) rotate(360deg)',
                filter: 'opacity(1)'
            }
        ], {
            duration: 3000,
            iterations: Infinity
        });
    } else if (phoneAnimation.playState == 'paused') {
        phoneAnimation.play();
    } else {
        phoneAnimation.pause();
    }
});