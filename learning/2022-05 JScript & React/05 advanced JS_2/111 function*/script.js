'use strict';
/////////////////// VER.1
function* generator() {
    yield 'S';
    yield 'C';
    yield 'R';
    yield 'I';
    yield 'P';
    yield 'T';
}
const str = generator();
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());

const str2 = generator();
console.log(str2.next());
console.log(str2.next());
console.log(str2.next().value);
console.log(str2.next().value);

/////////////////// VER.2
console.log(`\n/////////////////// VER.2`);
function* count(n) {
    for (let i=0; i < n; i++) {
        yield i;
    }
}
const counter = count(5);
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());


/////////////////// VER.3
console.log(`\n/////////////////// VER.3`);
function* count2(n) {
    for (let i=0; i < n; i++) {
        yield i;
    }
}
const counter2 = count2(5);
for (let k of count2(5)) { // FOR..OF
    console.log(`${k} -- ${counter2.next().value}`);
}