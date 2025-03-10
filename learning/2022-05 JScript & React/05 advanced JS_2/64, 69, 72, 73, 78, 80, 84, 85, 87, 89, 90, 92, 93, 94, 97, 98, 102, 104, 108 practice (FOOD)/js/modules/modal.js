import {postData} from '../services/services';

function modalAndForms(modalSelector, modalBtnsSelector, formsSelector) {
    //// //// //// //// //// //// //// //// MODAL
    const modal = document.querySelector(modalSelector),
          modalOpenBtns = document.querySelectorAll(modalBtnsSelector),
          modalContent = modal.innerHTML;
    let timeOut;

    function modalOpenClose() {

        if (modal.classList.contains(`show`)) {
            modal.classList.remove(`show`);
            document.body.style.overflow = ``;
            modal.innerHTML = modalContent;
            formsEvent();
        } else {
            modal.classList.add(`show`);
            document.body.style.overflow = `hidden`;
        }
        clearInterval(modalOpenTimer);
        clearTimeout(timeOut);
        window.removeEventListener(`scroll`, modalScrollOpen);
    }

    // OPEN
    modalOpenBtns.forEach((btn) => {
        btn.addEventListener(`click`, modalOpenClose);
    });

    // Open with timer
    const modalOpenTimer = setTimeout(modalOpenClose, 10000);

    // Open with scroll
    function modalScrollOpen() {
        if (document.documentElement.clientHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight - 1) {
            modalOpenClose();
            window.removeEventListener(`scroll`, modalScrollOpen);
        }
    }
    window.addEventListener(`scroll`, modalScrollOpen);

    // CLOSE
    modal.addEventListener(`click`, (e) => {
        if (e.target === modal || e.target.getAttribute(`data-modalClose`) == ``) {
            modalOpenClose();
        }
    });
    document.addEventListener(`keydown`, (e) => {
        if (e.code === `Escape` && modal.classList.contains(`show`)) {
            modalOpenClose();
        }
    }); 






    //// //// //// //// //// //// //// //// FORMS
    const msg = {
        loading: `Loading.. <img src="img/form/spinner.svg" style="display: block; margin: auto;">`,
        success: `Thx, We'll call u soon`,
        error: `Smth went wrong`
    };

    function formsEvent() {
        const forms = document.querySelectorAll(formsSelector);

        forms.forEach(item => {
            bindPostData(item);
        });
    }

    formsEvent();



    function bindPostData(form) {
        form.addEventListener(`submit`, (event) => {
            event.preventDefault();

            // const spinner = document.createElement(`img`);
            // spinner.src = msg.loading;
            // spinner.style.cssText = `
            //     margin: auto;
            //     display: block;
            // `;
            showThanksModal(msg.loading);
            // form.append(spinner);


            //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// ////  CHANGING TO FETCH
            //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// 

            // const request = new XMLHttpRequest();
            // request.open(`POST`, `server.php`);

            /*
            //// //// AS A FORM_DATA //// //// 111
            // request.setRequestHeader(`Content-type`, `multipart/form-data`);
            const formData = new FormData(form);

            request.send(formData);

            request.addEventListener(`load`, () => {
                if (request.status === 200) {
                    console.log(request.response);
                    statusMsg.textContent = msg.success;
                    form.reset();
                    setTimeout(() => {
                        statusMsg.textContent = "";
                    }, 2000);
                } else {
                    statusMsg.textContent = msg.error;
                }
            });
            */

            //// //// AS A JSON //// //// 222
            // request.setRequestHeader(`Content-type`, `application/json`);
            const formData = new FormData(form);
            /*
            const obj = {};
            formData.forEach((element, key) => {
                obj[key] = element;
            });
            */
            // const json = JSON.stringify(obj);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            // console.log(obj);
            // console.log(JSON.stringify(obj));

            // request.send(json);

            /*
            request.addEventListener(`load`, () => {
                if (request.status === 200) {
                    console.log(request.response);
                    form.reset();
                    showThanksModal(msg.success);
                } else {
                    showThanksModal(msg.error);
                }
            });
            */

            //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// 
            //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// 

            // fetch(`server.php1`, {
            //     method: `POST`,
            //     headers: {
            //         'Content-type': 'application/json'
            //     },
            //     body: json // formData
            // })
            
            postData(`http://localhost:3000/requests`, json) // instead of "json" was "JSON.stringify(obj)"
            // .then(data => data.text())
            .then(data => {
                console.log(data);
                showThanksModal(msg.success);
            }).catch(() => {
                showThanksModal(msg.error);
            }).finally(() => {
                form.reset();
            });
        });
    }

    //// //// //// modal window after sending the data
    function showThanksModal(message) {
        modal.innerHTML = `
            <div class="modal__dialog">
                <div class="modal__content">
                    <div data-modalClose class="modal__close">&times;</div>
                    <div class="modal__title">${message}</div>
                </div>
            </div>
        `;
        if (!modal.classList.contains(`show`)) {
            modal.classList.add(`show`);
            document.body.style.overflow = `hidden`;
        }
        if (message == msg.success) {
            timeOut = setTimeout(() => {
                modalOpenClose();
            }, 4000);
        }
    }

    //// //// //// //// //// //// //// //// //// //// //// //// 87 FETCH API
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: `POST`,
        body: JSON.stringify({name: `Alex`}),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(json => console.log(json));



    fetch(`http://localhost:3000/menu`)
    .then(data => data.json())
    .then(res => console.log(res));
}

export default modalAndForms;