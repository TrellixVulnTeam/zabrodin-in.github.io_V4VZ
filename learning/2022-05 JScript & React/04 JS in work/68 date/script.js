'use strict';

/////////////////////////// GETters ///////////////////////////
console.log('============ GETters ============');
let now = new Date();
console.log(now);
console.log(now+4);

console.log('--------');
now = new Date('2022-05-06');
//  new Date.parse('2022-05-06'); // similar
console.log(now);

console.log('--------');
now = new Date(2022, 5, 1, 18); // 2022>>06<<01 because jan=0
                                // 14 instead of 18 because of GMT
console.log(now);

console.log('--------');
now = new Date(0); // countdown starts from 1970-01-01 00:00:00
console.log(now);

//////////// METHODS
console.log('========');
now = new Date();
console.log(now.getFullYear()); // returns year
console.log(now.getMonth()); // returns year (MAY = 4, JAN = 0)
console.log(now.getDate()); // returns date
console.log(now.getDay()); // returns day of the week

console.log(now.getHours()); // returns hours
console.log(now.getUTCHours()); // returns UTC hours

console.log(now.getTimezoneOffset()); // returns deviation from UTC+0 in minutes

console.log(now.getTime()); // the number of milliseconds since 1970
now = new Date(now.getTime()); // returns this date UTC+0
console.log(now);

/////////////////////////// SETters ///////////////////////////
console.log('============ SETters ============');
now = new Date();
console.log(now.setHours(16));
console.log(now);

console.log(now.setHours(16, 16)); // plus minutes
console.log(now);

console.log(now.setHours(28)); // one day (24h) + 4h
console.log(now);

/////////////////////////// Timeout measuing ///////////////////////////
let start = new Date();
for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}
let end = new Date();
console.log(`Script was working for ${end - start} milliseconds`);