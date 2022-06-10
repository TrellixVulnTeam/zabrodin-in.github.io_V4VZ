'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'test',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: 'span'
    },
    {
        id: 'test',
        tag: ''
    }
];

try {
    data.forEach((blockObj, i) => {
        console.log(`${blockObj.id}, ${blockObj.tag}`);
        // if (blockObj.tag == '' || !blockObj.tag) {
        //     throw new Error (`there is tag in ${blockObj} id = ${i + 1}`);
        // }
        const block = document.createElement(blockObj.tag);
        if (blockObj.id == '' || !blockObj.id) {
            throw new SyntaxError (`there is no id in ${blockObj} id = ${i + 1}`);
        }
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
} catch(e) {
    if (e.name === 'SyntaxError') {
        console.log('----');
        console.error(e.name);
        // console.log(e.message);
        // console.log(e.stack);
    } else {
        throw e;
    }
}

console.log('------------');
const err = new Error('wkqf21pf2m1k2f ');
console.log(err.name);
console.log(err.message);
console.log(err.stack);
console.log('------------');
const err2 = new SyntaxError('2222222wkqf21pf2m1k2f ');
console.log(err2.name);
console.log(err2.message);
console.log(err2.stack);