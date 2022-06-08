function timer() {
    ///////////////////////////////////////
    //////////////// TIMER ////////////////
    const deadline = '2022-06-28';
    function getTimeRemaining(endtime) {
        let daysRemaining,
            hoursRemaining,
            minutesRemaining,
            secondsRemaining;
        const t = Date.parse(endtime) - Date.parse(new Date());
        if (t <= 0) {
            daysRemaining = 0;
            hoursRemaining = 0;
            minutesRemaining = 0;
            secondsRemaining = 0;
        } else {
            daysRemaining = Math.floor(t / (1000*60*60*24));
            hoursRemaining = Math.floor((t/ (1000*60*60*24)) % 24);
            minutesRemaining = Math.floor((t / 1000 / 60) % 60);
            secondsRemaining = Math.floor((t / 1000) % 60);
        }
        return {
            'total': t,
            'days': daysRemaining,
            'hours': hoursRemaining,
            'minutes': minutesRemaining,
            'seconds': secondsRemaining
        };
    }
    function prependZero(num) {
        if (num < 10 && num >= 0) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
        updateClock(); // so that the page does not blink
        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = prependZero(t.days);
            hours.innerHTML = prependZero(t.hours);
            minutes.innerHTML = prependZero(t.minutes);
            seconds.innerHTML = prependZero(t.seconds);
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadline);
}

module.exports = timer;