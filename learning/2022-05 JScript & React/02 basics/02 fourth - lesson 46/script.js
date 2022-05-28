'use strict';

// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);


// console.log(document.querySelector('#current').parentNode.parentNode);


// console.log(document.querySelector('[data-current]').nextElementSibling);

// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text' || node.nodeName == '#comment') {
//         continue;
//     }
//     console.log(node);
// }




///////////////////////////// RECURSION ////////////////////
// function pow(a, b) {
//     let result = 1;
//     for (let i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }

// function pow(a, b) {
//     let result = 1;
//     if (b == 0) {
//         return result;
//     } else {
//         return a * pow(a, b - 1);
//     }
// }

// console.log(pow(2, 0));


///////////////////////////// PRACTISE RECURSION ////////////////////
///////////////////////////// PRACTISE RECURSION ////////////////////
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
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],
        pro: [{
            name: 'Sam',
            progress: 10
        }],
        semi: [{
            name: 'Test',
            progress: 50
        }],
        /////// FOR TESTING ITERATIONS VS RECURSIONS
        semi2: {
            students: [{
                name: 'NAME',
                progress: 50
            }]
        }
    }
};

// console.log((100+60+38+10)/5);

function getTotalProgressByIteration(data) {
    let total = 0,
        students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;
            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;
                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total/students;
}

console.log(getTotalProgressByIteration(students));



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

const result = getTotalProgressByRecursion(students);

console.log(result[0]/result[1]);
