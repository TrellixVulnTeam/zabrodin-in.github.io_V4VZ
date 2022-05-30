'use strict';

// ////// XMLHttpRequest //////
const inputRUB = document.querySelector('#rub'),
      inputUSD = document.querySelector('#usd');
inputRUB.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'js/current.json'); // METHOD, URL, ASYNC, username, password
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send(); // body - for POST

    // Properties:
    // status (404 etc) https://ru.wikipedia.org/wiki/Список_кодов_состояния_HTTP
    // statusText
    // response
    // responseText
    // readyState https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState

    // ///// OLD VERSION
    // request.addEventListener('readystatechange', () => {
    //     // 'readystatechange' - watching for status changing
    //     // 'load' - waiting for full load (or error)
       
    //     if (request.readyState == 4 && request.status == 200) {
    //         // console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUSD.value = (+inputRUB.value / data.current.usd).toFixed(2);
    //     } else {
    //         inputUSD.value = 'Smth went wrong';
    //     }
    // });

    // ////// NEW VERSION
    request.addEventListener('load', () => { // 'load' - waiting for full load (or error)
        if (request.status == 200) {
            // console.log(request.response);
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputRUB.value / data.current.usd).toFixed(2);
        } else {
            inputUSD.value = 'Smth went wrong';
        }
    });
});