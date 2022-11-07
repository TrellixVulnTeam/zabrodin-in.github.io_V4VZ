'use strict';

console.log(`Data request..`);

/*
//// //// //// //// //// OLD SCHOOL
setTimeout(() => {
    console.log(`Collecting data..`);

    const product = {
        name: `tv`,
        price: 2000
    };

    setTimeout(() => {
        product.status = `ordered`;
        console.log(product);
    }, 2000);
}, 2000);
*/

//// //// //// //// //// NEW SCHOOL
const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Collecting data..`);
    
        const product2 = {
            name: `tv-set`,
            price: 3000
        };

        resolve(product2);
    }, 2000);
});

req.then((product2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(product2);
            reject();
        }, 2000);
}).then((data) => { // data = product2
    console.log(`Data recieved!!`);
    return data;
}).then(data => {
        data.status = `ordered`;
        return data;
    });
}).then((data) => {
    console.log(data);
}).catch(() => { // if ERROR
    console.log(`Error (!!)`);
}).finally(() => { // doesn't matter resolve or reject
    console.log(`..finally`);
});


//// //// ////
const timeTest = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

timeTest(1000).then(() => console.log(`1000 ms`));
timeTest(2000).then(() => console.log(`2000 ms`));

Promise.all([timeTest(1000), timeTest(2000)]).finally(() => { // addresses to every Promise from the array
    console.log(`FINISH`);
});

Promise.race([timeTest(1000), timeTest(2000)]).finally(() => { // will launch after FIRST Promise
    console.log(`FIRST FINISH`);
});