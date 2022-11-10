function calc() {
    //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// CALCULATOR
    //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// 
    //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// 
    
    const calcResult = document.querySelector(`.calculating__result span`),
          calcGenderParent = document.querySelector(`#gender`),
          calcActivityParent = document.querySelector(`.calculating__choose_big`);
    let gender, height, weight, age, activity, tempElem;

    if (localStorage.getItem(`genderLS`)) {
        tempElem = document.querySelector(`[data-gender = ${localStorage.getItem(`genderLS`)}]`);
        gender = localStorage.getItem(`genderLS`);
        calcResetActivity(calcGenderParent);
        tempElem.classList.add(`calculating__choose-item_active`);
    } else {
        gender = `female`;
    }

    if (localStorage.getItem(`activityLS`)) {
        switch (+localStorage.getItem(`activityLS`)) {
            case (1.2):
                tempElem = document.querySelector(`#low`);
                break;
            case (1.375):
                tempElem = document.querySelector(`#small`);
                break;
            case (1.55):
                tempElem = document.querySelector(`#medium`);
                break;
            case (1.725):
                tempElem = document.querySelector(`#high`);
                break;
        }
        activity = localStorage.getItem(`activityLS`);
        calcResetActivity(calcActivityParent);
        tempElem.classList.add(`calculating__choose-item_active`);
    } else {
        activity = 1.375;
    }

    function calcCalculation() {
        if (!gender || !height || !weight || !age || !activity) {
            calcResult.textContent = `??`;
            return;
        }
        if (gender == `female`) {
            calcResult.textContent = Math.floor((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * activity);
        } else {
            calcResult.textContent = Math.floor((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * activity);
        }
        return;
    }
    calcCalculation();

    function calcResetActivity(parent) {
        const elems = parent.querySelectorAll(`div`);
        elems.forEach(elem => {
            elem.classList.remove(`calculating__choose-item_active`);
        });
    }

    function calcStaticELements(parent) {
        const elems = parent.querySelectorAll(`div`);
        elems.forEach(elem => {
            elem.addEventListener(`click`, () => {
                calcResetActivity(parent);
                elem.classList.add(`calculating__choose-item_active`);
                if (elem.getAttribute(`data-gender`) == `male`) {
                    gender = `male`;
                    localStorage.setItem(`genderLS`, `male`);
                } else if (elem.getAttribute(`data-gender`) == `female`) {
                    gender = `female`;
                    localStorage.setItem(`genderLS`, `female`);
                } else {
                    switch (elem.getAttribute(`id`)) {
                        case `low`:
                            activity = 1.2;
                            localStorage.setItem(`activityLS`, 1.2);
                            break;
                        case `small`:
                            activity = 1.375;
                            localStorage.setItem(`activityLS`, 1.375);
                            break;
                        case `medium`:
                            activity = 1.55;
                            localStorage.setItem(`activityLS`, 1.55);
                            break;
                        case `high`:
                            activity = 1.725;
                            localStorage.setItem(`activityLS`, 1.725);
                            break;
                    }
                }
                calcCalculation();
            });
        });
    }

    calcStaticELements(calcGenderParent);
    calcStaticELements(calcActivityParent);

    function calcAddDynamicEvent(elem) {
        elem.addEventListener(`input`, () => {
            switch (elem.getAttribute(`id`)) {
                case `height`:
                    height = +elem.value;
                    break;
                case `weight`:
                    weight = +elem.value;
                    break;
                case `age`:
                    age = +elem.value;
                    break;
            }
            calcCalculation();
        });
    }

    document.querySelectorAll(`.calculating__choose_medium input`).forEach(item => {
        calcAddDynamicEvent(item);
    });
}

module.exports = calc;