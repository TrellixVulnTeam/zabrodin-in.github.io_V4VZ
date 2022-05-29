'use strict';

console.dir(document);
const box = document.querySelector('.box'),
      btn = document.querySelector('button');
// ////// recieving height & width from document
// const width = box.clientWidth;
// const height = box.clientHeight;
// console.log(width, height);

// ////// recieving height & width from with paddings
// const width = box.offsetWidth;
// const height = box.offsetHeight;
// const top2 = box.offsetTop;
// console.log(top2);
// console.log(width, height);

////// recieving height & width from document including scroll (invisible) part
const width = box.scrollWidth;
const height = box.scrollHeight;
console.log(width, height);

// ////// unwrapping the box by click on the button
// btn.addEventListener('click', () => {
//     box.style.height = box.scrollHeight + 'px';
// });

////// we get the number - how far we have read
btn.addEventListener('click', () => {
    console.log(`scrollTop of 'box':`);
    console.log(box.scrollTop);
    console.log(`scrollTop of 'documentElement':`);
    console.log(document.documentElement.scrollTop);
});

////// window.scrollBy(0, 400) - for scrolling from current position

////// recieving coords of the box
console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);
console.log(box.getBoundingClientRect().bottom);
console.log(box.getBoundingClientRect().x);
console.log(box.getBoundingClientRect().y);
console.log(box.getBoundingClientRect().left);
console.log(box.getBoundingClientRect().right);

////// recieving box styles from GLOBAL window.
const style = window.getComputedStyle(box); // WARNING: this is not inLine styles. This is CSS
console.log(style);
console.log(style.display);