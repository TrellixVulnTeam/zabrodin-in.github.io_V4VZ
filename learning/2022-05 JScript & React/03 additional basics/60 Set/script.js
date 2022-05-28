'use strict';

const arr = [1, 1, 2, 2, 4, 5, 6, 5];
const set = new Set(arr);
console.log(set);

                        // ПРИМЕР ФУНКЦИИ ДЛЯ БЫСТРОЙ ФИЛЬТРАЦИИ МАССИВА ЧЕРЕЗ SET
                        function unique(massiv) {
                            return Array.from(new Set(massiv));
                        }
                        console.log(unique(arr));

console.log('\n---- Не сортирует по порядку ----');
    const arr2 = [2, 3, 3, 1, 1, 2, 2, 4, 5, 6, 5];
    const set2 = new Set(arr2);
console.log(set2);

console.log('\n---- Пример со студентами. Добавляем новые значения через set.add ----');
        const students = ['Alex', 'Ivan', 'Ann', 'Oleg', 'Alex'];
        const set3 = new Set(students);
    set3.add('Alexus');
    set3.add('Ivan');
set3.add('1')
    .add('2')
    .add('3');
console.log(set3);

console.log(`\n---- Выводим значения через for..of ----`);
    for (let value of set3) {console.log(value);}

console.log(`\n---- Выводим значения через forEach ----`);
console.log(`value и valueAgain ИДЕНТИЧНЫ (!!)`);
    set3.forEach((value, valueAgain, set) => {
        console.log(value, valueAgain, set);
    });

console.log(`\n          ---- Выводим значения через set.values() ----`);
    console.log('          ', set.values());
    console.log(`          ---- Выводим >>КЛЮЧИ<< через set.keys() ----`);
    console.log('          ', set.keys());
    console.log(`          ---- Выводим пары (ключ-значение) через set.entries() ----`);
    console.log('          ', set.entries());
    console.log(`          ---- ПОЧТИ ОДНО И ТО ЖЕ. .keys и .entries для обратной совместимости с map's ----`);

console.log(`\n---- Удвляем значение в set'e через set.delete(value) ----`);
    set3.delete('3');
    set3.delete('2');
console.log(set3);

console.log(`\n---- Проверяем на наличие значения через set.has(value) ----`);
    console.log(set3.has('3'));
    console.log(set3.has('1'));

console.log(`\n---- Получаем размер через set.size ----`);
    console.log(set3.size);

console.log(`\n---- Очищаем set через set.clear() ----`);
    set3.clear();
    console.log(set3);