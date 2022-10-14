window.addEventListener(('DOMContentLoaded'), () => {
    const box = document.querySelector(`.box`);

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log(`touchstart`);
        console.log(e.touches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log(`touchMOVE`);
        console.log(e.touches);
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log(`touchend`);
        console.log(e.touches);
    });
});

// e.touches
// targetTouches
// changedTouches