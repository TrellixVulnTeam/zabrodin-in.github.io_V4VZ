'use strict';

window.addEventListener('DOMContentLoaded', function() {

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


    //// //// //// //// //// //// //// //// timer
    const endTime = `2022-10-30T23:33`;

    function getTimeInfo(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date());
        let days, hours, minutes, seconds;

        if (t <= 0) {
            days = hours = minutes = seconds = 0;
        } else {
            days = Math.floor(t / 1000 / 60 / 60 / 24);
            hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            minutes = Math.floor((t / (1000 * 60)) % 60);
            seconds = Math.floor((t / 1000) % 60);
        }

        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function showTime(selector, endTime) {
        function showTimeRefresh() {
            const sel = document.querySelector(selector),
                  get = getTimeInfo(endTime);
            
                  sel.querySelector(`#days`).innerHTML = getZero(get.days);
            sel.querySelector(`#hours`).innerHTML = getZero(get.hours);
            sel.querySelector(`#minutes`).innerHTML = getZero(get.minutes);
            sel.querySelector(`#seconds`).innerHTML = getZero(get.seconds);
            
            if (get.total <= 0) {
                clearInterval(interval);
            }
        }
        const interval = setInterval(showTimeRefresh, 1000);
        showTimeRefresh();
    }

    showTime(`.timer`, endTime);
    console.log(getTimeInfo(endTime));

});