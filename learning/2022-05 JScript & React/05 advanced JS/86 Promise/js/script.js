'use strict';

console.log('Data requested..');

const req = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Data prepairing..');
        const product = {
            name: 'TV',
            price: 2000
        };
        resolve(product);
    }, 2000);
});


// ////// FIRST VARIANT
// req.then((product) => {
//     const req2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
//     req2.then(data => {
//         console.log(data);
//     });
// });


////// SECOND VARIANT
req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
            // reject();
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
}).catch(() => {
    console.error('Error occured');
}).finally(() => {
    console.log('finally');
});


///// TEST PROMISE
const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};
// test(2000).then(() => console.log('2000 ms'));
// test(3000).then(() => console.log('3000 ms'));


////// PROMISE ALL
Promise.all([test(2000).then(() => console.log('2000 ms')),
             test(3000).then(() => console.log('3000 ms'))])
             .then(() => {
                console.log('PROMISE ALL');
             });

////// PROMISE RACE
Promise.race([test(1000), test(4000)]).then(() => { // .then will start after first func
    console.log('PROMISE RACE');
});