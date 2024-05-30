'use strict';

// Task 1. Проверить со следующими значениями: 10, 17, 18, 19, 59, 60, 61
const minAge = 18;
const maxAge = 60;
const age = 61;

if (age < minAge) {
    console.log("You don't have acsess couse your age is " + age + ". It's less than ");
} else if (age >= minAge && age < maxAge) {
    console.log('Welcome!');
} else if (age > maxAge) {
    console.log('Keep culm and look culture channel');
} else {
    console.log('Technical work');
}