'use strict';

// 1 Абстракция
// 2 Наследование
// 
class Rectangle {
    constructor(height2, width2) {
        this.height1 = height2;
        this.width1 = width2;
    }
    calcArea() {
        return this.width1 * this.height1;
    }
}

class ColoredRectangleWithText extends Rectangle {  // наследуемый класс
                                                    // inherited class
    constructor(height3, width3, text, bgColor) {
        super(height3, width3); // causes the same as the parent. always at first row
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`text: ${this.text}; color: ${this.bgColor}`);
        console.log(`height: ${this.height1}; width: ${this.width1}`);
    }
}

const square = new Rectangle(10, 10);
console.log(square.calcArea());
const long = new Rectangle(20, 100);
console.log(long.calcArea());

console.log('-------');
const div = new ColoredRectangleWithText(250, 100, 'Hello world!!', 'red');
div.showMyProps();
console.log(div.calcArea());