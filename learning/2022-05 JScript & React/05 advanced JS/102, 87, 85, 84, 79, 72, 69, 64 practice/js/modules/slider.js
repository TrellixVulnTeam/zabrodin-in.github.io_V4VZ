function slider() {
    /////////////////////////////////////////////
    //////////////// SLIDER VER.1 ///////////////
    const slides = document.querySelectorAll('.offer__slide'),
          btnPrev = document.querySelector('.offer__slider-prev'),
          btnNext = document.querySelector('.offer__slider-next'),
          countCurr = document.querySelector('#current'),
          countTotal = document.querySelector('#total');
    let slideIndex = 1;
    // (slides.length < 10) ? countTotal.textContent = `0${slides.length}` : countTotal.textContent = `${slides.length}`;
    
    // showSlide(slideIndex);
    // function showSlide(index) {
    //     (index < 10) ? countCurr.textContent = `0${index}` : countCurr.textContent = `${index}`;
    //     slides.forEach((elem, id) => {
    //         if (id + 1 == index) {
    //             elem.classList.add('show');
    //             elem.classList.remove('hide');
    //         } else {
    //             elem.classList.add('hide');
    //             elem.classList.remove('show');
    //         }
    //     });
    // }
    // btnPrev.addEventListener('click', () => {
    //     slideIndex--;
    //     if (slideIndex < 1) {
    //         slideIndex = slides.length
    //     }
    //     showSlide(slideIndex);
    // });
    // btnNext.addEventListener('click', () => {
    //     slideIndex++;
    //     if (slideIndex > slides.length) {
    //         slideIndex = 1;
    //     }
    //     showSlide(slideIndex);
    // });
/////////////////////////////////////////////
//////////////// SLIDER VER.2 ///////////////
    (slides.length < 10) ? countTotal.textContent = `0${slides.length}` : countTotal.textContent = `${slides.length}`;
    const slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          slidesField = document.querySelector('.offer__slider-inner'),
          width = window.getComputedStyle(slidesWrapper).width;
    console.log(width);
    slidesWrapper.style.width = width;
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';
    slidesField.style.width = 100 * slides.length + '%';
    slides.forEach(item => {
        item.style.width = width;
    });
    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }
    function changeCount(index) {
        (index < 10) ? countCurr.textContent = `0${index}` : countCurr.textContent = `${index}`;
    }
    changeCount(slideIndex);
    function prevSlide() {
        (slideIndex <= 1) ? slideIndex = slides.length : slideIndex--;
        changeCount(slideIndex);
        slidesField.style.transform = `translateX(-${(slideIndex - 1) * deleteNotDigits(width)}px)`;
        chooseSlide(slideIndex);
    }
    function nextSlide() {
        (slideIndex >= slides.length) ? slideIndex = 1 : slideIndex++;
        changeCount(slideIndex);
        slidesField.style.transform = `translateX(-${(slideIndex - 1) * deleteNotDigits(width)}px)`;
        chooseSlide(slideIndex);
    }
    btnPrev.addEventListener('click', prevSlide);
    btnNext.addEventListener('click', nextSlide);
    ////////////////////////////
    //////// SLIDER DOTS ///////
    const slider = document.querySelector('.offer__slider'),
          dotList = document.createElement('ol');
    dotList.classList.add('carousel-indicators');
    slider.style.position = 'relative';
    slider.append(dotList);
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-carousel-id', i);
        dotList.append(dot);
        if (i == slideIndex - 1) {
            dot.classList.add('dot-bright');
        }
    }
    dotList.addEventListener('click', (event) => {
        if (event.target.matches('li')) {
            // console.log('asidawind');
            // console.log(event.target.getAttribute('data-carousel-id'));
            slideIndex = +event.target.getAttribute('data-carousel-id') + 1;
            // console.log(slideIndex);
            chooseSlide(slideIndex);
        }
    });
    function chooseSlide(index) {
        changeCount(index);
        slidesField.style.transform = `translateX(-${(index - 1) * deleteNotDigits(width)}px)`;
        const dotLi = dotList.querySelectorAll('li');
        dotLi.forEach((elem, id) => {
            if (id == index - 1) {
                elem.classList.add('dot-bright');
            } else {
                elem.classList.remove('dot-bright');
            }
        });
    }
}

module.exports = slider;