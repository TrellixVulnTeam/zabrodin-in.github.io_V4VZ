// show loading in the modal
function showThanksModal(message, modalSelector) {
    const prevModalContent = document.querySelector('.modal__dialog');
    prevModalContent.classList.add('hide');
    openModal(modalSelector);
    const thanksModalContent = document.createElement('div');
    thanksModalContent.classList.add('modal__dialog');
    thanksModalContent.innerHTML = `
    <div class="modal__content">
        <div data-close class="modal__close">×</div>
        <div class="modal__title">${message}</div>
    </div>
    `;
    document.querySelector('.modal').append(thanksModalContent);
    setTimeout(() => {
        thanksModalContent.remove();
        prevModalContent.classList.remove('hide');
        closeModal(modalSelector);
    }, 3000);
}

function openModal(modalSelector, modalTimerId) {
    // modal.style.display = 'block';
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}
function closeModal(modalSelector) {
    // modal.style.display = 'none';
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('show');
    document.body.style.overflow = '';
}


function modal(modalSelector, modalTimerId) {
    //////////////////////////////////////////////
    //////////////// MODAL WINDOW ////////////////
    const connectBtn = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector(modalSelector);

    // here was openModal() & closeModal()

    connectBtn.forEach((elem) => {
        elem.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });
    document.addEventListener('keydown', (e) => {
        if ((e.code === 'Escape') && (modal.classList.contains('show'))) {
            closeModal(modalSelector);
        }
    });

    // inserted to the global script.js
    // // setting timer
    // const modalTimerId = setTimeout(openModal, 10000);

    // opening modal window when user scrolled down to the end of page
    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {showThanksModal};
export {openModal};