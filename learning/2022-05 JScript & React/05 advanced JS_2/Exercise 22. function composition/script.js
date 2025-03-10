'use strict';
/*
Задание:
В математике есть такое понятие, как композиция функций. В программирование этот прием тоже перекочевал и является весьма удобным в части ситуаций. Приведу наглядный пример из этой статьи. (Пока её можно открыть только в начале, так как там вы найдете начало решения 🙂)

Допустим, у вас есть отдельные функции, которые в итоге вычисляют скидку:
const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

В итоге мы получим результат, но эта цепочка не совсем удобна. А если действий там будет много? Можно запустить её вот так:
// result = a(b(c(x)))
const discount = normalizePrice(divide100(multiply20(200)));
Но при увеличении количества функций это превратиться в нечитаемый ад. И вот задача состоит в том, чтобы написать функцию compose, которая будет принимать все эти функции и делать тоже самое. То есть, организовывать композицию функций. Обратите внимание на порядок записи функций - последняя записанная запускается первой и дальше справа налево. Возможно вам понадобится это.

const discount = compose(normalizePrice, divide100, multiply20);
discount(200.0);
Функций может быть сколько угодно и они могут принимать только один начальный аргумент. Так что вариант:

const compose = (a, b, c) => (x) => a(b(c(x)));
Не подходит, так как работает только с 3мя функциями.

P.S. Да, в работе такие функции уже готовы за нас, мы будем работать с подобными в части по React. Но как оно устроено изнутри, да и вообще такое понятие полезно знать. Лично у меня спрашивали на одном собеседовании и на экзаменах в универе когда-то 🙂
*/
function a(n) {
    return n * 100;
}
function b(n) {
    return n / 50;
}
function c(n) {
    return n + 100;
}

function compose(...functions) {
    return functions.reduce((sum, curr) => sum(curr));
}

console.log(compose(a(b(c(100)))));

// const compose = (...funcArray) => (x) => funcArray.reduceRight((prevValue, currValue) => currValue(prevValue), x);

/*
Усложненное задание!
Справились с первой частью? Хорошо, давайте усложним 🙂
А теперь напишите функцию композиции composeWithArgs, которая принимает сколько угодно аргументов в начале. Пример:

    const add1 = function(a){return a + 1}
    const addAll3 = function(a,b,c){return a + b + c}
    composeWithArgs(add1,addAll3)(1,2,3)  => Вернет 7
*/

function composeWithArgs(...functions) {
    return functions.reduce((sum, curr) => (...args) => sum(curr(...args)));
}

function add1(a){
    console.log(`"add1" in work`);
    return a + 1;
};
const addAll3 = function(a,b,c){
    console.log(`"addAll3" in work`);
    return a + b + c;
};
console.log(composeWithArgs(add1,addAll3)(2,1,1)); // addAll3 will work first >> then add1(addAll3)

// const composeWithArgs = (...fns) => fns.reduceRight((f, g) => (...args) => g(f(...args)));