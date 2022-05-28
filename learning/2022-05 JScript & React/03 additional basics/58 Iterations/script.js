'use strict';

// for..in перебирает не по порядку (может не по порядку)
// for..of только по порядку, но нужен SymbolIterator

const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function() {
        console.log('Hello');
    }
};

salaries[Symbol.iterator] = function() {
    return {
        current: this.john,
        last: this.ann,
        next() {
            if (this.current < this.last) {
                this.current = this.current + 500;
                return {done: false, value: this.current};
            } else {
                return {done: true};
            }
            // {done: true, value: 123}
        }
    };
}

for (let res of salaries) {
    console.log(res);
}