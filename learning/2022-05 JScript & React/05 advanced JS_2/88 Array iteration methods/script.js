'use strict';

//// //// //// //// //// //// //// //// //// //// //// //// //// //// filter

const names = [`Ivan`, `Ann`, `Ksenia`, `Anatoliy`];
const shortNames = names.filter(item => {
    return item.length < 5;
});
console.log(shortNames);

//// //// //// //// //// //// //// //// //// //// //// //// //// //// map

const answers = [`IvAN`, `AnN`, `Hello`];
const result = answers.map(item => item.toLowerCase());
console.log(result);

//// //// //// //// //// //// //// //// //// //// //// //// //// //// every/some
// SOME
const some = [`qweq`, `oiqwbf`, 4];
console.log(some.some(item => typeof(item) === `number`));
// EVERY
console.log(some.every(item => typeof(item) === `number`));

//// //// //// //// //// //// //// //// //// //// //// //// //// //// reduce

const array = [4, 5, 3, 6, 1, 2];
                    /*  0
                        4
                        9
                        12
                        ..
                        21  */
const resulter = array.reduce((sum, current) => {
    return sum + current;
});
console.log(resulter);

const resulter2 = array.reduce((sum, curr) => sum + curr, 2); // with start value
console.log(resulter2);

const array3 = [`Ivan`, `Sofya`, `Vasiliy`, `Anna`];
const resulter3 = array3.reduce((sum, curr) => sum + `, ` + curr);
console.log(resulter3);




//// //// //// //// //// //// ////
//// //// //// //// //// //// ////
//// //// //// //// //// //// ////
//// //// //// //// //// //// ////
//// //// //// //// //// //// ////




const obj = {
    ivan: `persone`,
    anna: `persone`,
    dog: `animal`,
    cat: `animal`
};

const newArray = Object.entries(obj)
.filter(item => item[1] == `persone`)
.map(data => data[0]); // recieving only 'persons'

console.log(newArray);