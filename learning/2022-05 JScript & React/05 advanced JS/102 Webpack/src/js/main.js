'use strict';

function myModule() {
    this.hello = function() {
        console.log('Hello');
    };
    this.goodBye = function() {
        console.log('Good bye');
    };
}

module.exports = myModule;