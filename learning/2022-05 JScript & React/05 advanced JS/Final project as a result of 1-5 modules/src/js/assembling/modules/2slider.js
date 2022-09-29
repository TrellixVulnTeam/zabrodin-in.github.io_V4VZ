function slider() {
    const offerSlides = document.querySelectorAll('.offer__slide'),
          btnPrev = document.querySelector('.offer__slider-prev'),
          btnNext = document.querySelector('.offer__slider-next'),
          countCurr = document.querySelector('#current'),
          countTotal = document.querySelector('#total'),
          offerSlider = document.querySelector('.offer__slider-wrapper'),
          slideWrap = document.querySelector('.offer__slider-wrap');
    if (offerSlides.length > 9) {
        countTotal.textContent = offerSlides.length;
    } else {
        countTotal.textContent = `0${offerSlides.length}`;
    }
    let slideIndex = offerSlides.length;
    function nextSlide() {
        slideIndex++;
        if (slideIndex >= offerSlides.length) {
            slideIndex = 0;
        }
        slideWrap.style.transform = `translateX(-${slideIndex * 650}px)`;
        if (slideIndex < 9) {
            countCurr.textContent = `0${slideIndex + 1}`;
        } else {
            countCurr.textContent = slideIndex + 1;
        }
    }
    nextSlide(slideIndex);

    function prevSlide() {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = offerSlides.length - 1;
        }
        slideWrap.style.transform = `translateX(-${slideIndex * 650}px)`;
        if (slideIndex < 9) {
            countCurr.textContent = `0${slideIndex + 1}`;
        } else {
            countCurr.textContent = slideIndex + 1;
        }
    }

    btnPrev.addEventListener('click', () => prevSlide());
    btnNext.addEventListener('click', () => nextSlide());

    // dots
    let sliderDotsBox = document.querySelector('.slider__dots');
    // dotList.classList.add('offer__slider__dots');
    // sliderDotsWrap.append(dotList);
    for (let i = 0; i < offerSlides.length; i++) {
        let dotList = document.createElement('div');
        dotList.classList.add('slider__dots-item');
        dotList.setAttribute('data-dot-id', i);
        sliderDotsBox.append(dotList);
    }
}
export default slider;