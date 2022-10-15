'use strict';

const boxesQuery = document.querySelectorAll(`.box`),
      boxesGet = document.getElementsByClassName(`box`);

console.log(boxesQuery);
console.log(boxesGet);

boxesQuery[0].remove();
boxesGet[0].remove();

console.log(boxesQuery); // same as at the first log
console.log(boxesGet); // changed as 'live collection'

console.log(Array.from(boxesGet)); // full-fledged array, static


boxesQuery.forEach (box => {
    if (box.matches(`.this`)) console.log(box);
});


console.log(boxesQuery[2].closest(`.wrapper`));