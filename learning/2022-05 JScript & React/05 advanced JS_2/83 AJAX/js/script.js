'use strict';

const inputRub = document.querySelector(`#rub`),
      inputUsd = document.querySelector(`#usd`);

inputRub.addEventListener(`input`, () => {
    const request = new XMLHttpRequest();
    // request.open(method, url, async, login, pass);
    request.open(`GET`, `js/current.json`);
    request.setRequestHeader(`Content-type`, `application/json; charset=utf-8`);
    request.send();

    // status
    // statusText
    // response
    // readyState

    /*
    request.addEventListener(`readystatechange`, () => {
        if (request.readyState == 4 && request.status == 200) {
            console.log(typeof(+inputRub.value));
            console.log(request.response);
            const data = JSON.parse(request.response);
            console.log(data);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = `Smth went wrong`;
        }
    });
    */

    request.addEventListener(`load`, () => {
        if (request.status == 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = `Smth went wrong`;
        }
    });
});