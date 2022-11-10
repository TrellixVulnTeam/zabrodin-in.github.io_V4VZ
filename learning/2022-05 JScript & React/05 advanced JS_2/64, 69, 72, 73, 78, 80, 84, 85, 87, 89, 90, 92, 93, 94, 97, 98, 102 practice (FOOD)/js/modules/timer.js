function timer() {
    //// //// //// //// //// //// //// //// timer
    const endTime = `2022-11-13T00:00`;

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
}

module.exports = timer;