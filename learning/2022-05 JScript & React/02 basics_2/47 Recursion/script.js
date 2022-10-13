'use strict';

function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log(pow(5, 5));

///////////////////////////////////////
let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],
    html: {
        basic: [{
            name: 'Petr',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],
        pro: [{
            name: 'Sam',
            progress: 10
        }],
        semi: {
            students: [{
                name: 'Kolya',
                progress: 12
            }]
        }
    }
};


function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }
        return [total, data.length];
    } else {
        let total = [0, 0];
        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }
}

console.log(getTotalProgressByRecursion(students));
const result = getTotalProgressByRecursion(students);
console.log(`Mean = ${(result[0]/result[1]).toFixed(2)}`);