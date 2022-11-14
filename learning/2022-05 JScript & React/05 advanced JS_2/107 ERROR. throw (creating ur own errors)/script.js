'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: '',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: 'span'
    }
];

try {
    data.forEach((blockObj, index) => {
        const block = document.createElement(blockObj.tag);
        if (!blockObj.id) throw new Error(`There is no ID in ${index} tag "${blockObj.tag}"`);
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
} catch(e) {
    console.error(`>>>>>>>>>>>>>`);
    console.log(e.name);
    console.log(e.message);
    console.log(e.stack);
}

console.log(`//// //// //// //// //// //// ////`);
let err = new SyntaxError('SomeErrorTEST');
console.log(err.name);
console.log(err.message);
console.log(err.stack);

console.log(`//// //// ////`);
err = new TypeError('SomeErrorTEST2');
console.log(err.name);
console.log(err.message);
console.log(err.stack);