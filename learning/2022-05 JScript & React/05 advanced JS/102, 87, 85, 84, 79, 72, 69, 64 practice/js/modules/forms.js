function forms() {
    ///////////////////////////////////////
    //////////////// FORMS ////////////////
    const forms = document.querySelectorAll('form'),
          message = {
            loading: 'img/form/spinner.svg',
            success: "Thanks. Soon we'll call you",
            failure: 'Smth went wrong',
            thanks: 'Thankssss'
          };
    forms.forEach(item => {
        bindPostData(item);
    });

    // 5-89
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data // it was JSON.stringify(object) here
        });
        return await res.json();
    };


    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // // don't need if working showThanksModal()
            // const statusMsg = document.createElement('div');
            // statusMsg.classList.add('status');
            // statusMsg.textContent = message.loading;
            // form.append(statusMsg);
            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;            
            // form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);
            

        // ///// FIRST VARIANT - XMLHttpRequest();
            // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php');
            
            // // WE DON'T NEED THIS WITH FORMS:
            // // request.setRequestHeader('Content-type', 'multipart/form-data');
            // const formData = new FormData(form);

        // ////// SECOND VARIANT - JSON
            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            const formData = new FormData(form),
                  object = {};
            
            formData.forEach(function(value, key) {
                object[key] = value;
                // console.log(object[key], value);
            });
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            // ////// Changed for Fetch
            // const json = JSON.stringify(object);
            // request.send(json);

            // fetch('server.php', { // changed to http://localhost:3000/requests
            //     method: 'POST',
            //     headers: {
            //         'Content-type': 'application/json'
            //     },
            //     body: JSON.stringify(object)
            postData('http://localhost:3000/requests', json) // here was "'server.php', JSON.stringify(object))
            // .then(data => data.text()) // do not needed anymore
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });

            console.log(object);

            // request.send(formData);
            request.addEventListener('load', () => {
                if (request.status === 200) {
                    // console.log(request.response);
                    // statusMsg.textContent = message.success;
                    showThanksModal(message.success);
                    statusMessage.remove();
                    form.reset();
                    // setTimeout(() => {
                        // statusMsg.remove();
                    // }, 2000);
                } else {
                    // console.log(request.response);
                    // statusMsg.textContent = message.failure;
                    showThanksModal(message.failure);
                    statusMessage.remove();
                }
            });
        });
    }
    // fetch('http://localhost:3000/menu')
    //     .then(data => data.json())
    //     .then(res => console.log(res));
}

module.exports = forms;