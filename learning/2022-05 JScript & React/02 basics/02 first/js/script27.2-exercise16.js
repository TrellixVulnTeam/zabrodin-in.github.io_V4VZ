'use string';


function factorial(num) {
    let result = 1;
    if (num <= 0) {
        return result;  
    } else if (!num || num % 1 != 0) {
        result = 'input error';
        return result;
    } else {
        if (num === 1) {
            return result;
        } else {
            result = num * factorial(num-1);
            return result;
        }
    }
}

console.log(factorial(0));