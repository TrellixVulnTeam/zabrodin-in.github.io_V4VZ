function slider({sliderTabsSel, sliderPrevSel, sliderNextSel, sliderCurrSel, sliderTotalSel, slidesWrapperSel, slidesInnerSel}) {
    /*
    /////////////////////////////////////////////////// SLIDER 1
    ///////////////////////////////////////////////////
    ///////////////////////////////////////////////////
    const sliderTabs = document.querySelectorAll(`.offer__slide`),
          sliderPrev = document.querySelector(`.offer__slider-prev`),
          sliderNext = document.querySelector(`.offer__slider-next`),
          sliderCurr = document.querySelector(`#current`),
          sliderTotal = document.querySelector(`#total`);
    let sliderIndex = 1;

    sliderTotal.textContent = sliderNumber(sliderTabs.length);

    function sliderSet(num) {
        sliderIndex = num;
        if (sliderIndex > sliderTabs.length) {
            sliderIndex = 1;
        } else if (sliderIndex < 1) {
            sliderIndex = sliderTabs.length;
        }
        sliderTabs.forEach(item => {
            item.style.display = `none`;
        });
        sliderTabs[sliderIndex - 1].style.display = ``;
        sliderCurr.textContent = sliderNumber(sliderIndex);
    }

    sliderSet(sliderIndex);

    sliderPrev.addEventListener(`click`, () => {
        sliderSet(sliderIndex - 1);
    });
    sliderNext.addEventListener(`click`, () => {
        sliderSet(sliderIndex + 1);
    });

    function sliderNumber(num) {
        if (num < 10 && num >= 0) {
            return `0${num}`;
        } else if (num < 0) {
            return `--`;
        } else {
            return num;
        }
    }
    */



    /////////////////////////////////////////////////// SLIDER 2
    ///////////////////////////////////////////////////
    ///////////////////////////////////////////////////
    const sliderTabs = document.querySelectorAll(sliderTabsSel),
          sliderPrev = document.querySelector(sliderPrevSel),
          sliderNext = document.querySelector(sliderNextSel),
          sliderCurr = document.querySelector(sliderCurrSel),
          sliderTotal = document.querySelector(sliderTotalSel),
          slidesWrapper = document.querySelector(slidesWrapperSel),
          slidesInner = document.querySelector(slidesInnerSel),
          slidesWrapperWidth = window.getComputedStyle(slidesWrapper).width;
    let sliderIndex = 1,
        sliderOffset = 0;

                    /////////////////////////////////////////////////// SLIDER DOTS
                    ///////////////////////////////////////////////////
                    ///////////////////////////////////////////////////
                    slidesWrapper.style.position = `relative`;
                    const dotsDiv = document.createElement(`div`);
                    dotsDiv.classList.add(`carousel-indicators`);
                    slidesWrapper.append(dotsDiv);

                    for (let i = 1; i < sliderTabs.length + 1; i++) {
                        const dot = document.createElement(`div`);
                        dot.classList.add(`dot`);
                        dot.setAttribute(`data-slider-dot`, i);
                        dotsDiv.append(dot);
                    }

                    const dots = document.querySelectorAll(`[data-slider-dot]`);
                    dots.forEach((item, i) => {
                        if (item.getAttribute(`data-slider-dot`) == sliderIndex) {
                            item.style.opacity = 1;
                        } else {
                            item.style.opacity = 0.5;
                        }
                        item.addEventListener(`click`, () => {
                            sliderScroll(i + 1);
                        });
                    });

    slidesInner.style.width = 100 * sliderTabs.length + `%`;
    slidesInner.style.display = `flex`;
    sliderTabs.forEach(item => {
        item.style.width = `${slidesWrapperWidth}`;
    });
    slidesWrapper.style.overflow = `hidden`;

    // console.log(slidesWrapperWidth.slice(0, -2));

    function noLetters(str) {
        return +str.replace(/\D/g, '');
    }

    function sliderScroll(num) {
        if (num > sliderTabs.length) {
            sliderIndex = 1;
            sliderOffset = 0;
        } else if (num < 1) {
            sliderIndex = sliderTabs.length;
            sliderOffset = (sliderTabs.length - 1) * noLetters(slidesWrapperWidth);
        } else {
            sliderOffset = (num - 1) * noLetters(slidesWrapperWidth);
            sliderIndex = num;
        }
        // console.log(sliderOffset);
        slidesInner.style.transform = `translateX(-${sliderOffset}px)`;
        slidesInner.style.transition = `0.5s all`;
        sliderCurr.textContent = sliderNumber(sliderIndex);

        dots.forEach(item => {
            if (item.getAttribute(`data-slider-dot`) == sliderIndex) {
                item.style.opacity = 1;
            } else {
                item.style.opacity = 0.5;
            }
        });
    }

    sliderScroll(1);
    sliderTotal.textContent = sliderNumber(sliderTabs.length);

    sliderPrev.addEventListener(`click`, () => {
        sliderScroll(sliderIndex - 1);
    });
    sliderNext.addEventListener(`click`, () => {
        sliderScroll(sliderIndex + 1);
    });

    function sliderNumber(num) {
        if (num < 10 && num >= 0) {
            return `0${num}`;
        } else if (num < 0) {
            return `--`;
        } else {
            return num;
        }
    }
}

export default slider;