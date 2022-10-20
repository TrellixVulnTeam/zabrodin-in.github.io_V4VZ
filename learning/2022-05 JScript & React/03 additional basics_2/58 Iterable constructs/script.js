'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

for (const key in user) {
    console.log(user[key]);
}

/////////////     FOR .. IN не рекомендуется для перебора массивов и строк, потому что может изменить порядок символов/значений

const arr = ['b', 'a', 'c'];

for (const key in arr) {
    console.log(arr[key]);
}

////////////

const str = '\nstring';

for (const key in str) {
    console.log(str[key]);
}

//////////// FOR OF <<<<

for (const key of arr) {
    console.log(arr[key]);
}

for (const key of arr) {
    console.log(key);
}

////////////
////////////
////////////
////////////
console.log(`\nFOR .. OF. Handmade method for object iteration`);

const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function() {
        console.log(`Hello`);
    }
};

// ЧТОБЫ СДЕЛАТЬ ОБЪЕКТ ИТЕРИРУЕМЫМ (перебираемым), НУЖНО ДОБАВИТЬ SYMBOL.ITERATOR
salaries[Symbol.iterator] = function() {
    // Метод должен возвращать объект с методом next() в формате "done-value"
    return {
        current: this.john,
        last: this.ann,
        next() {
            if (this.current < this.last) {
                this.current += 500;
                return {done: false, value: this.current};
            } else {
                return {done: true};
            }
        }
    };
};
for (let res of salaries) {
    console.log(res);
}