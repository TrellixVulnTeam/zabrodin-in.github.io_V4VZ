'use strict';

/*
Задачи:

1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// Пример:
showExperience(personalPlanPeter) => '1 month'
P.S. желательно использовать деструктуризацию, но не обязательно
*/
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    /* showAgeAndLangs: function(name) {
        let result = `Мне ${name.age} и я владею языками: `;
        for (let i = 0; i < name.skills.languages.length; i++) {
            result += `${name.skills.languages[i].toUpperCase()} `;
        }
        console.log(result);
        return result;
    } */
    showAgeAndLangs: function() {
        return `I'm ${this.age} and I can speak languages: ${[...this.skills.languages]}`;
    }
};
function showExperience(ppp) {
    return ppp.skills.exp;
}
console.log(showExperience(personalPlanPeter));

/*
2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Пример:
showProgrammingLangs(personalPlanPeter)  =>
"Язык js изучен на 20% Язык php изучен на 10%"
Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
P.S. Для переноса строки используется \n в конце строки.
*/
function showProgrammingLangs(ppp) {
    let result = '';
    for (let key in ppp.skills.programmingLangs) {
        result += `${key} language is learned for ${ppp.skills.programmingLangs[key]}\n`;
    }
    return result;
}
console.log(showProgrammingLangs(personalPlanPeter));

/*
3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// Пример:
personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> 'Мне 29 и я владею языками: RU ENG'
Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.
*/
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));