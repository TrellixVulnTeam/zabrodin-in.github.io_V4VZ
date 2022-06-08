'use strict';

// const myModule = require('./main');
// const myModuleInstance = new myModule();

// myModuleInstance.hello();
// myModuleInstance.goodBye();


//////////// IMPORT from main.js
// import {one, two} from './main'; // >> 1 variant
// import {one as first, two} from './main'; // >> 2 variant
import * as data from './main'; // 3 variant
import sayHi from './main' // 4 variant for DEFAULT EXPORT >> {default as sayHi}

// console.log(`${first} and ${two}`); // 1 & 2 variants
console.log(`${data.one} and ${data.two}`); // 3 variant
// data.sayHi(); // 3
sayHi(); // 4 (default export > import)