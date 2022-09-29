function openModal() {
    const modal = document.querySelector('.modal'),
          modalBtns = document.querySelectorAll('[data-modal]');
    modalBtns.forEach((e) => {
        e.addEventListener('click', () => {
            modal.classList.add('modal__active');
            document.body.style.overflow = "hidden";
        });
    });
}

function closeModal() {
    const modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('.modal__close'),
          modalContent = document.querySelector('.modal__content');
    modal.addEventListener('click', (elem) => {
        // Closing if click 'X' & somwhere out of the MODAL__CONTENT
        if (elem.target === modal || elem.target === modalCloseBtn) {
            modal.classList.remove('modal__active');
            document.body.style.overflow = "";
        }
    });
    // closing if ESC
    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && modal.classList.contains('modal__active')) {
            modal.classList.remove('modal__active');
            document.body.style.overflow = "";
        }
    });
}

export default openModal;
export {closeModal};