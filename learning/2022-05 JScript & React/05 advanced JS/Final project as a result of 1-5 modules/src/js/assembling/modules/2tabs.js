
function tabs() {
    const tabContents = document.querySelectorAll('.tabcontent'),
          tabHeaderItems = document.querySelectorAll('.tabheader__item');
    tabContents.forEach(elem => elem.classList.add('hide'));
    function showTab(i) {
        tabContents.forEach((elem, num) => {
            if (num === i) {
                elem.classList.remove('hide');
            } else {
                elem.classList.add('hide');
            }
        });
        tabHeaderItems.forEach((elem, num) => {
            if (num === i) {
                elem.classList.add('tabheader__item_active');
            } else {
                elem.classList.remove('tabheader__item_active');
            }
        });
    }
    showTab(0);

    function tabsClick() {
        tabHeaderItems.forEach((elem, num) => {
            elem.addEventListener('click', () => {
                showTab(num);
            });
        });
    }
    tabsClick();
}

export default tabs;