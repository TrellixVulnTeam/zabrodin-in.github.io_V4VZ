"use strict";


//////// 1 ЗАДАНИЕ:
// Написать функцию showExperience, которая будет принимать в себя объект с данными и возвращать строку с опытом
// Пример: showExperience(personalPlanPeter) ==> '1 month'

//////// 2 ЗАДАНИЕ:
// написать function showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде
// Пример: showProgrammingLangs(personalPlanPeter) ==> "Язык js изучен на 20% Язык php изучен на 10%"
// Причем, функция должна работать вне зависимости от кол-ва языков. Если не указан ни один, то возвращается пустая строка
// Для переноса строки используем \n

//////// 3 ЗАДАНИЕ:
// Создать метод showAgeAndLangs, внутри объекта personalPlanPeter.
// Принимает объект и возвращает строку в нужном виде:
// "Мне 29 и я владею языками: RU ENG" (именно в верхнем регистре)


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////// 1 ЗАДАНИЕ ВЫПОЛНЕНИЕ
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

// function showExperience(plan) {
//     return plan.skills.exp;
// }

// console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {

// }

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// //////// 2 ЗАДАНИЕ ВЫПОЛНЕНИЕ
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%',
//             ruby: '30%'
//         },
//         exp: '1 month'
//     }
// };

// function showExperience(plan) {
//     return plan.skills.exp;
// }

// console.log(showExperience(personalPlanPeter) + '\n');

// function showProgrammingLangs(plan) {
//     let key,
//         result = '';
//     for (key in plan) {
//         if (key === 'skills') {
//             let keyLang;
//             for (keyLang in plan[key]) {
//                 if (keyLang === 'programmingLangs') {
//                     let length = Object.keys(plan[key][keyLang]).length,
//                         keys = Object.keys(plan[key][keyLang]);
//                     for (let i = 0; i < length; i++) {
//                         result += `Язык ${keys[i]} изучен на ${plan[key][keyLang][keys[i]]}`;
//                         // if (i < length-1) {
//                             result += '\n';
//                         // }
//                     }
//                     console.log(result);
//                     return result;
//                 }
//             }
//             console.log(`Не найден раздел "skills.programmingLangs"`);
//             return result;
//         }
//     }
//     console.log('Не найден раздел "skills"');
//     return result;
// }
// showProgrammingLangs(personalPlanPeter);





////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////// 3 ЗАДАНИЕ ВЫПОЛНЕНИЕ

// // "Мне 29 и я владею языками: RU ENG" (именно в верхнем регистре)

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            ruby: '30%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(name) {
        let result = `Мне ${name.age} и я владею языками: `;
        for (let i = 0; i < name.skills.languages.length; i++) {
            result += `${name.skills.languages[i].toUpperCase()} `;
        }
        console.log(result);
        return result;
    }
};

function showExperience(plan) {
    return plan.skills.exp;
}

console.log(showExperience(personalPlanPeter) + '\n');

function showProgrammingLangs(plan) {
    let key,
        result = '';
    for (key in plan) {
        if (key === 'skills') {
            let keyLang;
            for (keyLang in plan[key]) {
                if (keyLang === 'programmingLangs') {
                    let length = Object.keys(plan[key][keyLang]).length,
                        keys = Object.keys(plan[key][keyLang]);
                    for (let i = 0; i < length; i++) {
                        result += `Язык ${keys[i]} изучен на ${plan[key][keyLang][keys[i]]}`;
                        // if (i < length-1) {
                            result += '\n';
                        // }
                    }
                    console.log(result);
                    return result;
                }
            }
            console.log(`Не найден раздел "skills.programmingLangs"`);
            return result;
        }
    }
    console.log('Не найден раздел "skills"');
    return result;
}
showProgrammingLangs(personalPlanPeter);

personalPlanPeter.showAgeAndLangs(personalPlanPeter);