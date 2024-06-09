'use strict';

/*
Task 1
1*. Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом), 
  и выводить в консоль количество гласных и согласных букв в этом слове. 
  Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants
*/

let word = 'Programm'; 
let wordLowCase = word.toLowerCase();
let vowels = 'aeiouy';
let consonants = 'bcdfghjklmnpqrstvwxyz';

let vowelCount = 0;
let consonantCount = 0;

for (let i = 0; i < wordLowCase.length; i++) {
if (vowels.includes(wordLowCase[i])) {
vowelCount++;
} else if (consonants.includes(wordLowCase[i])) {
consonantCount++;
}
}

console.log(`${wordLowCase} contains ${vowelCount} vowels and ${consonantCount} consonants`);

/*
Task 2
2**. Написать программу, которая видоизменяет принимаемое слово (переменная со словом) 
  шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон. 
  Направление шифрования задается переменной offset, которая может быть +1 и -1.
  Например let str = 'AbC'; let offset = -1, result = 'ZaB';
  Например let str = 'ZzZ'; let offset = 1, result = 'AaA';
*/

let str = 'AbC';
let offset = -1; 
let result = '';

for (let i = 0; i < str.length; i++) {
let code = str.charCodeAt(i);

if (code >= 65 && code <= 90) { 
result += String.fromCharCode(((code - 65 + offset + 26) % 26) + 65);
} else if (code >= 97 && code <= 122) { // Для строчных букв
result += String.fromCharCode(((code - 97 + offset + 26) % 26) + 97); // Для не алфавитных символов
} else {
result += str[i];
}
}

console.log(result); 