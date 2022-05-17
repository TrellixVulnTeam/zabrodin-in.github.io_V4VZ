"use strict";

function palindromeCheck(input) {
    let check = '',
        result = 0;
    if ( (input == null) || (input == '') ) {
        console.log('Your input is incorrect');
        return result;
    }
    if ( (input.length % 2 != 0) && (input != '') ) {
        for (let i = (input.length-1)/2; i !== 0; i--) {
            check += input[i-1];
        }
        for (let i = check.length; i !== input.length-1; i++) {
            if (input[i+1] == check[i-(input.length-1)/2]) {
                console.log(`${input[i+1]} = ${check[i-(input.length-1)/2]}`);
            } else {
                console.log(`${input[i+1]} <> ${check[i-(input.length-1)/2]}`);
                result = 'Not a palindrome';
                return result;
            }
        }
        result = 'Palindrome';
        return result;
    } else if ( (input.length % 2 === 0) && (input != '') ) {
        for (let i = input.length/2; i !== 0; i--) {
            check += input[i-1];
        }
        for (let i = check.length; i !== input.length; i++) {
            if (input[i] == check[i-check.length]) {
                console.log(`${input[i]} = ${check[i-check.length]}`);
            } else {
                console.log(`${input[i]} <> ${check[i-check.length]}`);
                result = 'Not a palindrome';
                return result;
            }
        }
        result = 'Palindrome';
        return result;
    } else {
        console.log('Your input is incorrect');
        return result;
    }
}

console.log(palindromeCheck('12345678987654321'));// prompt()));


// function palindromeCheck2() {
//     let whileStop = 0;
//     do {
//         let input = '12345678987654321'; //prompt('Input your palindrome', '123454321');
//         if ( (input != '') && (input != null) ) {
//             if (input.length == 1) {
//                 console.log(`You putted just 1 number. Try again.`);
//             } else if (input.length % 2 != 0) {
//                 for (let i = (input.length-1)/2-1; i >= 0; i--) {
//                     if (input[i] != input[input.length-1-i]) {
//                         console.log('Not a palindrome');
//                         whileStop = 1;
//                         return;
//                     }
//                     whileStop = 1;
//                 }
//             } else {
//                 console.log('else');
//                 for (let i = (input.length/2)-1; i >= 0; i--) {
//                     if (input[i] != input[input.length-1-i]) {
//                         console.log('Not a palindrome');
//                         whileStop = 1;
//                         return;
//                     }
//                     whileStop = 1;
//                 }
//             } 
//         } else {
//             console.log('Your input is incorrect. Try again.');
//         }
//     } while (whileStop == 0);
//     console.log(`Palindrome!!`);
//     return;
// }

// palindromeCheck2();