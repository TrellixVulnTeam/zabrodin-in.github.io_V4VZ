function tabs(tabContentSelector, tabHeaderSelector, tabLinksSelector, tabActiveClass) {
//// //// //// //// //// //// //// //// tabs on top
    const tabContents = document.querySelectorAll(tabContentSelector),
        tabHeader = document.querySelector(tabHeaderSelector),
        tabLinks = tabHeader.querySelectorAll(`.${tabLinksSelector}`);

    function hideTabContent() {
        tabContents.forEach(item => {
            item.style.display = 'none';
        });
        tabLinks.forEach(item => {
            item.classList.remove(tabActiveClass);
        });
    }

    function showTabContent(tabNumber = 0) {
        hideTabContent();
        tabContents.forEach((item, i) => {
            if (tabNumber == i) {
                item.style.display = 'block';
                tabLinks[i].classList.add(tabActiveClass);
            }
        });
    }

    tabHeader.addEventListener(`click`, (element) => {
        const target = element.target;
        if (target && target.classList.contains(tabLinksSelector)) {
            tabLinks.forEach((item, i) => {
                if (target == item) {
                    showTabContent(i);
                }
            });
        }
    });

    showTabContent();
}

export default tabs;