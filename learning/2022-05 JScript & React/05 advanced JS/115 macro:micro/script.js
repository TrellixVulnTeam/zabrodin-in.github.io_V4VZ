'use strict';

console.log('1');
setTimeout(() => {console.log('2');}); // with NO timeout
Promise.resolve()
    .then(() => console.log('3'));
queueMicrotask(() => console.log('3.5'));
Promise.resolve()
    .then(() => console.log('4'));
console.log('5');

// () => {}
// microtasks await/catch/then/finally
// render
// () => {}
// microtasks await/catch/then/finally
// render
// <..>
'use strict';
 
function getSum(a, b) {
    function sum() {
        console.log(this.a);
        return a + b;
    }
 
    console.log(sum());
}
 
getSum(4, 5);