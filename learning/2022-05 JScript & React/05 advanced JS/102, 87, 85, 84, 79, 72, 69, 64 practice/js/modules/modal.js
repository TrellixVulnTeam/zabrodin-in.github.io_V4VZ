function modal() {
    //////////////////////////////////////////////
    //////////////// MODAL WINDOW ////////////////
    const connectBtn = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');
    function openModal() {
        // modal.style.display = 'block';
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }
    function closeModal() {
        // modal.style.display = 'none';
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    connectBtn.forEach((elem) => {
        elem.addEventListener('click', openModal);
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if ((e.code === 'Escape') && (modal.classList.contains('show'))) {
            closeModal();
        }
    });
    // setting timer
    const modalTimerId = setTimeout(openModal, 10000);
    // opening modal window when user scrolled down to the end of page
    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);

    // show loading in the modal
    function showThanksModal(message) {
        const prevModalContent = document.querySelector('.modal__dialog');
        prevModalContent.classList.add('hide');
        openModal();
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
            closeModal();
        }, 3000);
    }
}

module.exports = modal;