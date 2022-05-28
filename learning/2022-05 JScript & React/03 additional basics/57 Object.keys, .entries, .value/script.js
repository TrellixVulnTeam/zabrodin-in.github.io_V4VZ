'use strict';

// SYMBOL is ENUMERABLE: true, но не отражается при переборе!!!!!!!

////////////////////////////////////////////////////////
///////////////////// 1/2 - - - ПРО ДЕСКРИПТОРЫ СВОЙСТВ
////////////////////////////////////////////////////////
const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

user.showMyPublicData();

// writable
// enumerable
// configurable

console.log(Object.getOwnPropertyDescriptor(user, 'name'));
console.log('-----');
Object.defineProperty(user, 'name', {writable: false});
console.log(Object.getOwnPropertyDescriptor(user, 'name'));
console.log('-----');
// user.name = 'owooo'; // ERROR ROW


Object.defineProperty(user, 'gender', {value: 'male'});
console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

console.log('-----'); console.log('----- Например, когда пользователь указывает свою ДР, он может указать ее только один раз. Тогда, мы изменим флаг "writable" (после добавления пользователя) в значение "false"');
// Например, когда пользователь указывает свою ДР, он может указать ее только один раз. Тогда, мы изменим флаг 'writable' (после добавления пользователя) в значение 'false'
Object.defineProperty(user, 'birthday', {writable: false});
console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));


        console.log('-----'); console.log('----- Вариант динамического добавления такого объекта, с неизменяемым ключом "birthday"');
        // Вариант динамического добавления такого объекта, с неизменяемым ключом 'birthday'
        let obj = {
            name: 'Ivan Ivanovich'
        };
        Object.defineProperty(obj, 'birthday', {value: prompt('Data of ur birthday?'), enumerable: true, configurable: true}); // writable сразу "встанет" в false
        console.log(Object.getOwnPropertyDescriptor(obj, 'birthday'));


console.log('-----'); console.log('----- Чтобы не выводить какой-либо из ключей в спиок (например через цикл), меняем дескриптор "enumerable"');
// Чтобы не выводить какой-либо из ключей в спиок (например через цикл), меняем дескриптор "enumerable"
for (let key in user) console.log(key);
Object.defineProperty(user, 'showMyPublicData', {enumerable: false});
console.log('>>> Изменили свойство десриптора enumerable на false:');
for (let key in user) console.log(key);

// Пример на объекте.ключе Math.PI - вообще ничего нельзя с ним делать. Только читать
// {value: 3.141592653589793, writable: false, enumerable: false, configurable: false}
console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

// ВАЖНО (!!) Если флаг configurable установлен в false, ТО С КЛЮЧОМ УЖЕ НИЧЕГО НЕЛЬЗЯ БУДЕТ СДЕЛАТЬ!!

console.log('-----'); console.log('----- ПРИМЕР КАК УСТАНАВЛИВАТЬ СРАЗУ НЕСКОЛЬКО ФЛАГОВ (на примере объекта user)');
// ПРИМЕР КАК УСТАНАВЛИВАТЬ СРАЗУ НЕСКОЛЬКО ФЛАГОВ
Object.defineProperties(user, {
    name: {writable: true},
    surname: {writable: true, configurable: false},
    birthday: {writable: true}
});
console.log(Object.getOwnPropertyDescriptor(user, 'name'));
console.log(Object.getOwnPropertyDescriptor(user, 'surname'));
console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));


////////////////////////////////////////////////////////
///////////////////// 2/2 - - - ПРО ПОЛЕЗНЫЕ МЕТОДЫ
////////////////////////////////////////////////////////

// 1) Object.preventExtensions()
// Исключает любое расширение объекта
// (Не добавить новые свойства)
// Для проверки - Object.isExtensible()

// 2) Object.seal()
// Закрывает свойства и устанавливает configurable: false
// Для проверки - Object.isSealed()

// 3) Object.freeze()
// Запрещает добавлять, удалять или изменять свойства
// configurable: false & writable: false
// "эффективно неизменный"
// Для проверки - Object.isFrozen()

console.log(' ');

////////////////////////////////////////////////////////
///////////////////// 3 - - - OBJECT.IS()
////////////////////////////////////////////////////////
// Object.is()
// Проверяет являются ли 2 значения различимыми (одинаковыми)
////////////////////////////////////////////////////////