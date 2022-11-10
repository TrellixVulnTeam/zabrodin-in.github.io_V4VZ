function tabs() {
//// //// //// //// //// //// //// //// tabs on top
    const tabContents = document.querySelectorAll(`.tabcontent`),
        tabHeader = document.querySelector(`.tabheader__items`),
        tabLinks = tabHeader.querySelectorAll(`.tabheader__item`);

    function hideTabContent() {
        tabContents.forEach(item => {
            item.style.display = 'none';
        });
        tabLinks.forEach(item => {
            item.classList.remove(`tabheader__item_active`);
        });
    }

    function showTabContent(tabNumber = 0) {
        hideTabContent();
        tabContents.forEach((item, i) => {
            if (tabNumber == i) {
                item.style.display = 'block';
                tabLinks[i].classList.add(`tabheader__item_active`);
            }
        });
    }

    tabHeader.addEventListener(`click`, (element) => {
        const target = element.target;
        if (target && target.classList.contains(`tabheader__item`)) {
            tabLinks.forEach((item, i) => {
                if (target == item) {
                    showTabContent(i);
                }
            });
        }
    });

    showTabContent();
}

module.exports = tabs;