function modal() {
    //// //// //// //// //// //// //// //// MODAL
    const modal = document.querySelector(`.modal`),
          modalOpenBtns = document.querySelectorAll(`[data-modal]`),
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
}

module.exports = modal;