'use strict';

const btn = document.querySelector('.btn');
let timerId3,
    timerId4,
    i = 0;

/////////////////// setTimeout ///////////////////
// ////// setting timer for const timerId
// const timerId = setTimeout((text) => {
//     console.log(text);
// }, 2000, 'Hello'); // miliseconds
// ////// erasing the interval
// clearInterval(timerId);

////// timeuot for function
function logger() {
    i++;
    console.log('some text');
    console.log(i);
    if (i == 3) {
        clearInterval(timerId4);
    }
}
// const timerId2 = setTimeout(logger, 4000);

////// console.log after click
btn.addEventListener('click', () => {
    timerId3 = setTimeout(() => {
        console.log('test text');
    }, 1000);
});
clearInterval(timerId3); // underlined because of timerID3 is a local const

/////////////////// setInterval ///////////////////
////// trying to set setInterval (repeat)
btn.addEventListener('click', () => {
    timerId4 = setInterval(logger, 2000);
});


////////////// recursion setTimer BETTER than setInterval //////////////
////// EXAMPLE
let id = setTimeout(function log() {
    console.log('Hellllllo');
    id = setTimeout(log, 500);
}, 500);