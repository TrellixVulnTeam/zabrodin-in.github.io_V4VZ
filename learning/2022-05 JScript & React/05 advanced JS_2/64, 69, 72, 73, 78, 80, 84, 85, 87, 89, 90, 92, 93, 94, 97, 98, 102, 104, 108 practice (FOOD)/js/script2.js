'use strict';

const array = [
    { label: 'label 1', id: 1, des: 'des tion 1' },
    { label: 'label 2', id: 1, des: 'des tion 2' },
    { label: 'label 3', id: 1, des: 'des tion 3' },
    { label: 'label 4', id: 1, des: 'des tion 4' },
    { label: 'label 5', id: 1, des: 'des tion 5' }
];

const getArrayByKey = (array, key) => {
    let resultArray = [];
    array.forEach((item, index) => {
        resultArray[index] = item[key];
    });
    return resultArray;
};

console.log(getArrayByKey(array, `label`));
console.log(getArrayByKey(array, `des`));