import {one, two} from './main.js';
import sayHi from './main.js';


console.log(`${one} and ${two}`);

sayHi();



// 2 version
// // U can do it another way:
// import {one as first} from './main'; // changing name
// console.log(first);




// // 3 version - EXPORT ALL
// import * as data from './main';
// console.log(`${data.one} and ${data.two}`);