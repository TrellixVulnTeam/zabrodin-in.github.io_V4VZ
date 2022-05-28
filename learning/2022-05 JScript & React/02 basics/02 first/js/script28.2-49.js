'use strict';

// touchstart
// при возникновении касания по элеиенту

// touchend
// палец оторвался от элемента

// touchmove
// движение после касания

// touchenter
// когда ведем пальцем по экрану и при этом папали на пределы этого элемента с touchenter

// touchleave
// когда палец вели по элементам и он попал на touchenter (например), а потом сошел с него

// touchcancel
// когда точка соприкосновения больше не регистрируется на поле (вышел за пределы браузера)

// .touches
// помогает разобраться сколько пальцев приложили + target и другое
// .targetTouches
// .changedTouches

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        console.log('Start');
        console.log(e.touches);
    });
    box.addEventListener('touchmove', (e) => {
        console.log('Move');
        console.log(e.targetTouches[0].pageX);
    });
    // box.addEventListener('touchend', (e) => {
    //     console.log('End');
    // });
});