function myModule() {
    this.hello = function() {
        console.log(`Hello`);
    };
    this.goodBye = function() {
        console.log(`bye!!`);
    };
}

module.exports = myModule;