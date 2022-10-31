'use strict';

class Rectangle {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.width * this.height;
    }
}

//// //// //// //// //// //// //// //// ////

const square = new Rectangle(30, 30);
console.log(square.calcArea());

const rectangle = new Rectangle(20, 150);
console.log(rectangle.calcArea());

//// //// //// //// //// //// //// //// ////
//// //// //// //// //// //// //// //// ////

class ColoredRectangleWithText extends Rectangle {
    constructor(width, height, text, bgColor) {
        super(width, height);
        this.text = text;
        this.bgColor = bgColor;
    }

    showProps() {
        console.log(`${this.text}, color: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, "Hello Worlddd!!", "blue");
div.showProps();
console.log(div.calcArea());