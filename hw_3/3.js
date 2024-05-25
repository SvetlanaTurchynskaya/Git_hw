'use strict';

// Task1

let item_1, item_2, item_3, item_4, item_5, item_6, item_6_type, item_7, item_7_type;
item_1 = 5;
console.log(item_1);

item_2 = 3;
console.log(item_2);

item_3 = item_1 + item_2;
console.log(item_3);

item_4 = 'Yolochka';
console.log(item_4);

console.log(item_3 + item_4); // 8Yolochka
console.log(item_3 * item_4); // Nan

item_5 = item_3;

item_6 = 15;
console.log(typeof item_6); // number

item_6_type = 'number';
console.log('item_6 == ' + item_6, ',', 'item_6_type == ' + item_6_type);

item_7 = '' + item_6;  // string

item_7_type = typeof item_7; 

console.log('item_7 == ' + item_7, ',', 'item_7_type == ' + item_7_type);

/* 
Task2.1*
Решить уравнение x^2 - 6x + 9 = 0;
=> ax^2 + bx + c = 0;
*/

const a = 1;
const b = (-6);
const c = 9;

const k = b / 2; // -3
console.log(k);

const D = (k** 2) - (a * c); // 0
console.log(D);

const x = (D === 0) ? (-k) / a : false; // 3
console.log(x);

console.log('Ответ к уравнению 1: x = ' + x);

/* 
Task2.2*
Решить уравнение x^2 - 4x - 5 = 0;
=> ax^2 + bx + c = 0;
*/

const a2 = 1;
const b2 = (-4);
const c2 = (-5);

const k2 = b2 / 2; // -2
console.log(k2);

const D2 = (k2** 2) - (a2 * c2); // 9
console.log(D2);

const x2 = D2 > 0 ? (-k2) + Math.sqrt(D2) : false;
const x3 = D2 > 0 ? (-k2) - Math.sqrt(D2) : false;
console.log(x2, x3);

console.log('Ответ к уравнению 2: x2 = ' + x2 + ', ' + 'x3 = ' + x3);

/* 
Task3*
Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9)
и выводит сумму равную n + nn + nnn, где n не перемножаются, а конкатенируют.
*/

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const n = getRandomInt(1, 9); 
console.log('Рандомное число от 1 до 9: ' + n);
const sum = n + +('' + n + n) + +('' + n + n + n);
console.log('Сумма = ' + sum);

