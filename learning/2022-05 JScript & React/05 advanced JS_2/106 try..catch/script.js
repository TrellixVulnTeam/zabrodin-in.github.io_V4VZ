'use strict';

try {
    console.log('Hello try');
    console.log(i) // error with var
    console.log('Hello try second');
} catch(error) {
    console.log('\ncatch Hi!');
    console.log(error);
    console.dir(error.name);
    console.dir(error.message);
    console.dir(error.stack);
} finally {
    console.log('finally');
}

console.log('\nstill works');

document.querySelector('.active').addEventListener('click', () => {
    console.log('Click');
});

console.log('Normal');



console.log('/// /// /// /// /// /// /// /// ///');
try {
    document.querySelector('.activeSSS').addEventListener('click', () => {
        console.log('Click');
    });
} catch(error) {
    console.log(error);
} finally {
    console.log('finally');
}