function calculator() {
    /////////////////////////////////////////////
    //////////////// CALCULATOR /////////////////
    let sex, ratio, age, height, weight;
    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }
    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', '1.375');
    }
    function calcTotal() {
        const result = document.querySelector('.calculating__result span');
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '---';
        } else {
            if (sex == 'male') {
                result.textContent = `${+Math.round(88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age) * ratio)}`;
            } else {
                result.textContent = +Math.round(447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age) * ratio);
            }
        }
        return;
    }
    function getStaticInfo(parentSelector, activeClass) {
        const div = document.querySelectorAll(`${parentSelector} div`);
        div.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }
                div.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
                e.target.classList.add(activeClass);
                calcTotal();
            });
        });
        return;
    }
    function getDynamicInfo(selector) {
        const item = document.querySelector(selector);
        item.addEventListener('input', () => {
            if (item.value.match(/\D/g)) {
                item.style.border = '1px solid red';
            } else {
                item.style.border = 'none';
            }
            switch(item.getAttribute('id')) {
                case 'weight':
                    weight = +item.value;
                    break;
                case 'height':
                    height = +item.value;
                    break;
                case 'age':
                    age = +item.value;
                    break;
            }
            calcTotal();
        });
        return;
    }
    function initLocalStorage(selector, activeClass) {
        const div = document.querySelectorAll(`${selector} div`);
        console.log(div);
        div.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        });
    }
    initLocalStorage('#gender', 'calculating__choose-item_active');
    initLocalStorage('.calculating__choose_big', 'calculating__choose-item_active');
    getStaticInfo('#gender', 'calculating__choose-item_active');
    getStaticInfo('.calculating__choose_big', 'calculating__choose-item_active');
    getDynamicInfo('#height');
    getDynamicInfo('#weight');
    getDynamicInfo('#age');
    calcTotal();
}

module.exports = calculator;