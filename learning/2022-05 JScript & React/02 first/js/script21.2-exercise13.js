"use strict";

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000,
    // CALCULATING SHOPS AREA
    shopsVolumeCalc: function() {
        let result = 0;
        this.shops.forEach((value,i) => {
            result += value.width * value.length * this.height;
        });
        return result;
        },
    shopsAreaCalc: function() {
        let result = 0;
        this.shops.forEach((value, i) => {
            result += value.width * value.length;
        });
        return result;
    }
    };

function isBudgetEnough(data) {
    // ADDING PROTO shoppingMallData FOR data
    if (data != shoppingMallData) {
        Object.setPrototypeOf(data, shoppingMallData);
    }
    // console.log('Общая площадь магазинов = ' + data.shopsAreaCalc());
    // console.log('Общий объем ТЦ = ' + data.shopsVolumeCalc());
    let result1 = '';
    // console.log('Надо денег на отопление = ' + data.shopsVolumeCalc()*data.moneyPer1m3);
    if (data.shopsVolumeCalc()*data.moneyPer1m3 > data.budget) {
        result1 = 'Бюджета недостаточно';
    } else if (data.shopsVolumeCalc()*data.moneyPer1m3 <= data.budget) {
        result1 = 'Бюджета достаточно';
    } else {
        result1 = 'Ошибка в данных';
    }
    return result1;
}

isBudgetEnough(shoppingMallData);
console.log(isBudgetEnough(shoppingMallData));



