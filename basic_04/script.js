'use strict';
console.log('arr' + '- object');
console.log(4 + '- object');

let answer = +prompt('Есть ли вам 18?');
console.log(typeof (answer));

let incr = 10,
    decr = 10;

// incr++;
// decr--;

// console.log(++incr);
// console.log(--decr);

console.log(incr++);
console.log(decr--);

console.log(5 % 2);

console.log('2' == 2);
console.log('2' === 2);

let isChecked = true,
    isClose = true,
    isOpen = false
console.log(isChecked && isClose);
console.log(isChecked || isOpen);
console.log(isChecked && !isOpen);